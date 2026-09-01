"use client";

import { useState } from "react";
import sharing from "@/lib/data/sharing.json";

export function ChromosomeShare() {
  const [active, setActive] = useState("X");
  const current = sharing.chromosomes.find((c) => c.id === active) ?? sharing.chromosomes[0];

  return (
    <div className="rounded-3xl border border-white/10 bg-black/25 p-5 md:p-8">
      <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted">
        <span>
          <i className="mr-2 inline-block h-2 w-4 rounded-sm bg-amber" />
          Identical genotype
        </span>
        <span>
          <i className="mr-2 inline-block h-2 w-4 rounded-sm bg-aurora/70" />
          One allele in common
        </span>
        <span>
          <i className="mr-2 inline-block h-2 w-4 rounded-sm bg-rose" />
          Opposite homozygotes
        </span>
      </div>
      <div className="flex items-end gap-[3px] md:gap-1.5">
        {sharing.chromosomes.map((c) => {
          const on = c.id === active;
          const h = 40 + c.shareAtLeastOne * 180;
          const p2 = (c.ibs2 / c.compared) * 100;
          const p1 = (c.ibs1 / c.compared) * 100;
          const p0 = (c.ibs0 / c.compared) * 100;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              onMouseEnter={() => setActive(c.id)}
              className="flex flex-1 flex-col items-center gap-2"
              aria-label={`Chromosome ${c.id}`}
            >
              <span
                className={`flex w-full flex-col-reverse overflow-hidden rounded-t-sm ${on ? "ring-1 ring-ink/40" : ""}`}
                style={{ height: h }}
              >
                <span className="w-full bg-rose" style={{ height: `${p0}%` }} />
                <span className="w-full bg-aurora/70" style={{ height: `${p1}%` }} />
                <span className="w-full bg-amber" style={{ height: `${p2}%` }} />
              </span>
              <span className={`text-[10px] md:text-xs ${on ? "text-ink" : "text-faint"}`}>{c.id}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-8 border-t border-white/10 pt-5">
        <p className="kicker">Chromosome {current.id}</p>
        <p className="mt-2 font-display text-3xl md:text-4xl">
          {(current.opposite * 100).toFixed(2)}%
          <span className="ml-2 text-lg text-muted">opposite · {(current.identical * 100).toFixed(1)}% identical</span>
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {current.id === "X"
            ? "Almost no opposite homozygotes on X. That is the signature of a father’s mother: Pernille’s paternal X is the X Helle gave to her son."
            : current.ibs0 === 0
              ? "No opposite homozygotes on this chromosome. A shared segment can cover the whole thing."
              : current.opposite < 0.01
                ? "Opposite genotypes are vanishingly rare here — a long stretch is compatible with sharing."
                : "Opposite homozygotes mark places they cannot be sharing a DNA segment. The rest is compatible with sharing, including ordinary European background."}
        </p>
      </div>
    </div>
  );
}
