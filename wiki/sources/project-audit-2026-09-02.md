---
type: audit
tags:
  - mydnastory/wiki
  - audit
  - evidence
updated: 2026-09-02
evidence_status:
  - verified-private
  - verified-public
  - derived
---

# Project and Evidence Audit — 2026-09-02

This is a dated baseline, not a timeless truth. It records what was inspected before planning v2-v4. Raw DNA was read locally only; no genotype row, full sequence, kit identifier, or living match identity is reproduced here.

## Scope and Method

- Inspected the repository, profile types, Simon's English source profile, Danish localization overlay, route generation, navigation, package scripts, ignore rules, and recent Git history.
- Ran the production build and linter.
- Inspected the live English experience on desktop and mobile, including the mobile jump dialog and browser console.
- Computed aggregate checks from the ignored autosomal CSV, mtDNA FASTA, and Big Y VCF/BED.
- Compared approved mtDNA and Y-DNA branch details with the public FamilyTreeDNA scientific pages and the mitochondrial sequence with NCBI rCRS.

## Repository Baseline

**Status:** `verified-private` against the local checkout at Git `f8f4771`.

- Stack: Next.js 16.3.4, React 19.2, TypeScript, Tailwind CSS 4, and Framer Motion 12.
- Production route: statically generated `/[locale]/[slug]`; locales are English and Danish.
- Locale proxy redirects bare paths according to cookie or browser language.
- `ftdna/` is ignored and no file below it is tracked.
- The production build passes.
- Lint fails on three errors: a render-time mutation in `Origins.tsx` and synchronous state updates inside two effects in `PhoneDock.tsx`.
- A build can rewrite the tracked generated `next-env.d.ts`, leaving a dirty worktree.
- The audited v1 profile route delivered approximately 681 KB of first-load JavaScript.

## Live v1 Experience

**Status:** `verified-public` on `mydnastory.vercel.app/en/simon` on 2026-09-02.

Strengths:

- Strong, coherent dark cinematic art direction.
- Good mobile hero composition and a useful desktop chapter rail/mobile dock.
- Clear separation of autosomal, maternal, and paternal stories in the long-form structure.
- No console warning or error observed during the checked interactions.

Limitations:

- The page is very long and repeats explanatory/card patterns.
- Many chapters begin hidden and depend on viewport-triggered client animation; full-page capture left offscreen content blank until scrolled.
- The mobile jump dialog works visually, but focus trapping, trigger state, and focus return are not explicitly implemented.
- The chromosome skyline mainly visualizes the vendor array's marker design rather than a personal ancestry insight.
- Current source citations are plain text without direct links or retrieval dates.
- Schematic migration lines may look more geographically precise than their evidence permits.

## Autosomal Audit

**Status:** `verified-private`; ancestry labels additionally checked against private result captures.

| Measure | Result |
| --- | ---: |
| CSV data rows | 725,291 |
| Rows on chromosomes 1–22 and X | 725,276 |
| Unplaced/other rows | 15 |
| Called diploid rows | 723,043 |
| Missing or non-diploid rows | 2,248 |
| Call rate | 99.69006% |
| Homozygous calls | 514,235 |
| Heterozygous calls | 208,808 |

FamilyTreeDNA result categories checked for publication:

- Europe: 100%.
- Scandinavia: 99%.
- Baltic: `<1%`.
- Sephardic Jewish: `<1%`.
- Ancient components: Hunter-Gatherer 49%, Early Farmer 39%, Metal Age Invader 12%, non-European 0%.

Important correction: the two trace results are thresholds, not exact `0.5%` measurements. They should be rendered as separately labeled traces rather than numerical pie/ring slices.

## mtDNA Audit

**Status:** `verified-private` against the ignored FASTA and `verified-public` against [NCBI rCRS](https://www.ncbi.nlm.nih.gov/nuccore/NC_012920.1) and the [FamilyTreeDNA terminal branch](https://discover.familytreedna.com/mtdna/U5b1b1a%2B7385%2B16519/scientific?section=tmrca).

- Sample sequence length: 16,570 characters; rCRS length: 16,569.
- Alignment summary: one insertion, 29 substitutions excluding one uncertain base, and one uncertain position.
- Approved terminal-path markers present: `T16144C`, `A7385G`, and `T16519C`.
- Exact terminal placement: `U5b1b1a+7385+16519`; the shorter `U5b1b1a` badge is a base label, not the complete terminal name.
- Public TMRCA on 2026-09-02: mean 836 CE, 95% interval 505–1127 CE.
- Public current-tester origin summary: Sweden 8, Finland 1 among 15 testers.

Interpretation limit: a date interval spanning 505–1127 CE plus modern self-reported tester origins does not prove that the shared woman was Swedish or specifically Viking. The defensible wording is an early-medieval/Viking-Age-centered branch currently clustered among Sweden-reporting testers.

## Big Y Audit

**Status:** `verified-private` against the ignored VCF/BED and `verified-public` against the [FamilyTreeDNA R-BY67151 record](https://discover.familytreedna.com/y-dna/R-BY67151/scientific?section=tmrca).

| Measure | Result |
| --- | ---: |
| VCF records | 208,116 |
| chrY records | 208,071 |
| Other reference-contig records | 45 |
| SNVs | 195,105 |
| Non-SNVs | 13,011 |
| PASS records | 171,902 |
| Non-PASS records | 36,214 |
| Callable BED intervals | 18,958 |
| Callable bases | 14,879,003 |

Terminal branch check:

- All 32 public R-BY67151 defining variants were found and called derived.
- 30 were PASS; two were derived but quality-flagged.
- Median depth across the terminal branch calls was 32; maximum was 59.
- The public TMRCA on 2026-09-02 was mean 1482 CE with a 95% interval of 1168–1703 CE.
- The branch formed from R-S7293 around 1050 BCE; this formation estimate is a different event from the current-testers' TMRCA.
- Current public tester-country summary: Norway 2 and England 1 among three testers.

The existing site correctly says all 32 terminal variants are derived, but the future dossier should disclose the 30 PASS/two quality-flagged split. The displayed lineage is a selection of milestones and omits intermediate nodes; either label it as selected or render the complete current path.

## Cross-Cutting Conclusions

1. Autosomal estimates, mtDNA, and Y-DNA answer different questions and must not be blended into one implied ancestry percentage.
2. Current tester-country clusters are clues for genealogy, not proof of ancient geography.
3. Branch formation dates and current-tester TMRCAs must be separately named.
4. A vendor “notable connection” is a deep shared-node illustration, not close kinship or direct descent.
5. The v1 model is presentation-first. v2-v4 need one evidence-first data layer so numerical facts cannot drift between language and design.
6. The public site needs approved aggregates only. None of the planned experiences requires raw DNA at runtime.

## Audit Limitations

- FamilyTreeDNA tree dates, tester counts, country summaries, and defining-variant lists can change after this date.
- This audit verifies file structure, aggregate counts, selected branch markers, and current public tree records; it is not a clinical, forensic, or genealogical proof of named ancestors.
- The audit did not independently validate FamilyTreeDNA's statistical ancestry model against an alternative provider.
- Informal browser inspection is not a substitute for automated accessibility testing, screen-reader testing, or a moderated comprehension study.
