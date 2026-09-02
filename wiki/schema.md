---
type: wiki-schema
tags:
  - mydnastory/wiki
  - maintained-by-llm
updated: 2026-09-02
---

# Wiki Schema

This file is the operating contract for agents maintaining the My DNA Story wiki.

## Layers

1. **Private raw sources** — ignored FamilyTreeDNA exports under `ftdna/`. Read locally when authorized; never commit, quote, or deploy them.
2. **Public external sources** — scientific papers, reference sequences, methodology documents, and public haplotree pages. Link directly and record retrieval dates for mutable sources.
3. **Verified aggregates** — counts, percentages, branch calls, quality summaries, and date ranges that have been checked against the private or public source.
4. **Interpretation** — narrative meaning derived from aggregates. It must be visibly weaker than the observation it explains.
5. **Presentation** — bilingual copy and UI. It may simplify language but must not change precision, confidence, or provenance.

## Evidence Status

Use one of these labels when a page makes a material claim:

- `verified-private` — recomputed from a local ignored source without publishing raw rows.
- `verified-public` — checked directly against a linked public primary or vendor source.
- `derived` — reproducible calculation from verified inputs; document the calculation.
- `interpretation` — contextual reading that is not directly measured.
- `planned` — desired future behavior, not present in production.
- `superseded` — retained for history but no longer current.

Do not use `verified` without saying which kind. “FamilyTreeDNA says” is a vendor result, not independent scientific validation.

## Page Types

Maintained pages use YAML frontmatter:

```yaml
---
type: concept
tags:
  - mydnastory/wiki
updated: 2026-09-02
sources:
  - ../sources/scientific-source-register.md
---
```

Recommended types are `wiki-index`, `wiki-log`, `wiki-schema`, `source-note`, `audit`, `concept`, `runbook`, `decision`, `experiment`, and `capability`.

## Claim Rules

- Keep exact values, ranges, and less-than values distinct. Never convert `<1%` into `0.5%` to satisfy a chart API.
- Separate a haplogroup's formation date from the TMRCA of current testers.
- Treat tester countries as self-reported earliest-known origins, not as genetic coordinates.
- Say whether a lineage is complete or a selection of milestones.
- Distinguish an individual ancient genome on a related branch from a direct ancestor.
- Distinguish peer-reviewed ancient-DNA links from vendor-curated notable connections.
- Give mutable haplotree facts an `as of` or retrieval date.
- Keep numerical facts language-neutral; translate prose around them.

## Privacy Rules

Never store in Git, the wiki, build artifacts intended for deployment, screenshots, logs, or test fixtures:

- raw autosomal genotype rows;
- complete mtDNA or Y-DNA sequences;
- raw VCF records, BAM data, or kit-download archives;
- kit/account identifiers;
- living DNA match names or contact details;
- private family-tree details beyond the explicitly approved first name;
- health or trait interpretations.

Permitted public data is limited to approved first names, aggregate QC, ancestry estimates already selected for publication, haplogroup labels, branch-defining variant summaries, broad date ranges, and properly caveated historical context.

## Link and Source Rules

- Use relative Markdown links between wiki pages.
- Use repository-relative links when GitHub readers need to open code or documentation.
- Use direct HTTPS links for external sources, not search-result pages.
- Prefer primary papers and official reference records. Vendor methodology and public haplotrees may support descriptions of vendor results.
- Do not cite this wiki as proof when a raw or public source exists; cite the underlying source.
- Never add an external URL merely because it looks plausible. Open and verify it first.

## Maintenance Workflow

When evidence or implementation changes:

1. Read [the index](index.md) and the affected source/concept pages.
2. Inspect current code and, when needed, recompute aggregates from ignored local inputs.
3. Update the smallest set of synthesis pages; do not rewrite historical decision records.
4. Update roadmap and todo statuses.
5. Verify Markdown links and scan for prohibited private content.
6. Append one dated entry to [the log](log.md).

The log is append-only. Decision records may gain a short outcome section, but their original context and decision must remain intact.

## Wiki Lint Checklist

- Every maintained page is reachable from [the index](index.md) or an index page.
- All relative links resolve.
- Dates and mutable tree claims identify their source date.
- English and Danish presentations share the same numerical facts.
- Planned behavior is not described as deployed.
- The repository contains no tracked path under `ftdna/`.
- Searches for genotype headers, kit numbers, living-match names, tokens, and secrets return no new wiki content.
