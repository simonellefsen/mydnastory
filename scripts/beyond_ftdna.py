"""Derived autosomal findings only — no raw genotypes in the output.

A male X is haploid on this microarray and would look like one giant ROH,
so heterozygosity and runs of homozygosity are autosomal (chr 1–22) only.
"""

from __future__ import annotations

import csv
import json
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "lib/data/beyond.json"

GEN_CM = {
    "1": 286.54,
    "2": 268.76,
    "3": 223.28,
    "4": 214.07,
    "5": 204.07,
    "6": 191.97,
    "7": 187.06,
    "8": 167.99,
    "9": 166.36,
    "10": 181.14,
    "11": 158.22,
    "12": 174.68,
    "13": 125.71,
    "14": 120.20,
    "15": 141.35,
    "16": 134.04,
    "17": 128.40,
    "18": 117.28,
    "19": 107.89,
    "20": 108.20,
    "21": 62.79,
    "22": 74.10,
    "X": 180.84,
}
PHYS_MB = {
    "1": 249.25,
    "2": 243.20,
    "3": 198.02,
    "4": 191.15,
    "5": 180.92,
    "6": 171.12,
    "7": 159.14,
    "8": 146.36,
    "9": 141.21,
    "10": 135.53,
    "11": 135.01,
    "12": 133.85,
    "13": 115.17,
    "14": 107.35,
    "15": 102.53,
    "16": 90.35,
    "17": 81.19,
    "18": 78.08,
    "19": 59.13,
    "20": 63.03,
    "21": 48.13,
    "22": 51.30,
    "X": 155.27,
}
AUTO = {str(i) for i in range(1, 23)}


def kit_csv() -> Path:
    hits = list((ROOT / "ftdna").glob("simon_*/*Chrom*Autoso*.csv"))
    if not hits:
        raise SystemExit("No autosomal csv for simon")
    return hits[0]


def is_het(gt: str) -> bool:
    return gt[0] != gt[1]


def cm_span(chrom: str, start: int, end: int) -> float:
    phys = PHYS_MB.get(chrom, 100) * 1_000_000
    gen = GEN_CM.get(chrom, 100)
    return (end - start) / phys * gen


def load_rows(path: Path) -> dict[str, tuple[str, int, str]]:
    rows: dict[str, tuple[str, int, str]] = {}
    with path.open(newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rsid = row["RSID"].strip('"')
            chrom = row["CHROMOSOME"].strip('"')
            gt = row["RESULT"].strip('"')
            if not rsid or gt in {"--", "00", ""} or len(gt) != 2:
                continue
            rows[rsid] = (chrom, int(row["POSITION"].strip('"')), gt)
    return rows


def het_stats(rows: dict[str, tuple[str, int, str]]) -> dict:
    called = 0
    het = 0
    for chrom, _pos, gt in rows.values():
        if chrom not in AUTO:
            continue
        called += 1
        if is_het(gt):
            het += 1
    return {
        "called": called,
        "heterozygous": het,
        "heterozygosity": round(het / called, 4) if called else 0,
    }


def roh_runs(rows: dict[str, tuple[str, int, str]], min_mb: float = 1.5, min_snps: int = 200) -> list[dict]:
    by_chr: dict[str, list[tuple[int, str]]] = defaultdict(list)
    for chrom, pos, gt in rows.values():
        if chrom in AUTO:
            by_chr[chrom].append((pos, gt))
    found = []
    for chrom, pts in by_chr.items():
        pts.sort()
        run_start = None
        run_n = 0
        last = None
        for pos, gt in pts:
            homozygous = not is_het(gt)
            gap = last is not None and pos - last > 1_000_000
            if homozygous and not gap:
                if run_start is None:
                    run_start = pos
                    run_n = 1
                else:
                    run_n += 1
            else:
                if run_start is not None:
                    mb = (last - run_start) / 1_000_000
                    if mb >= min_mb and run_n >= min_snps:
                        found.append(
                            {
                                "chromosome": chrom,
                                "start": run_start,
                                "end": last,
                                "mb": round(mb, 2),
                                "snps": run_n,
                                "cM": round(cm_span(chrom, run_start, last), 1),
                            }
                        )
                run_start = pos if homozygous else None
                run_n = 1 if homozygous else 0
            last = pos
        if run_start is not None and last is not None:
            mb = (last - run_start) / 1_000_000
            if mb >= min_mb and run_n >= min_snps:
                found.append(
                    {
                        "chromosome": chrom,
                        "start": run_start,
                        "end": last,
                        "mb": round(mb, 2),
                        "snps": run_n,
                        "cM": round(cm_span(chrom, run_start, last), 1),
                    }
                )
    found.sort(key=lambda s: -s["cM"])
    return found


def main() -> None:
    rows = load_rows(kit_csv())
    het = het_stats(rows)
    roh = roh_runs(rows)
    payload = {
        "kit": "simon",
        "method": "Autosomal microarray, chr 1–22. X is omitted: a male X is haploid on this chip and would look like one giant ROH. Lengths use a sex-averaged chromosome map.",
        "heterozygosity": het,
        "roh": roh,
        "rohNote": "Runs of homozygosity longer than 1.5 Mb and 200 SNPs. Long ROH can reflect a cousin marriage; a handful of medium runs is typical in northern Europeans.",
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(payload, indent=2) + "\n")
    print(f"Wrote {OUT} het={het['heterozygosity']} roh={len(roh)}")
    for run in roh:
        print(f"  chr{run['chromosome']} {run['mb']} Mb {run['cM']} cM {run['snps']} SNPs")


if __name__ == "__main__":
    main()
