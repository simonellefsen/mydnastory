---
type: wiki-log
tags:
  - mydnastory/wiki
  - maintained-by-llm
updated: 2026-09-02
---

# Wiki Log

Append-only timeline for wiki maintenance. Use headings in the form `## [YYYY-MM-DD] kind | summary`.

## [2026-09-02] fix | Add version-root redirects

- Added permanent locale-preserving redirects from `/[locale]/v2`, `/v3`, and `/v4` to Simon's corresponding story, including bare `/v2`, `/v3`, and `/v4` paths after locale negotiation.
- Added browser coverage for all Danish version roots and the bare v2 shortcut after `/da/v2` was reported as a production 404.

## [2026-09-02] release | Publish v2, v3, and v4

- Fast-forwarded `main` through the three version milestones and deployed production revision `b84c217` as Vercel deployment `dpl_J5z7SUZzEZcurMfZ9XWQzu3hdk2i`.
- Verified HTTP 200 responses, localized headings, canonical URLs, cross-version navigation, the v4 evidence tray, and locale negotiation on `mydnastory.vercel.app` for all six English and Danish v2-v4 routes.
- Recorded the combined-production decision while preserving the separate v2, v3, and v4 Git branches as review and rollback boundaries.

## [2026-09-02] preview | Verify the combined v2-v4 deployment

- Deployed Git revision `5336f78` to [the protected Vercel preview](https://mydnastory-e6aoo6cdb-simonellefsens-projects.vercel.app). Vercel completed the Next.js 16.3.4 build and statically generated all six localized version routes.
- Confirmed HTTP 200 responses, English and Danish headings, production canonical URLs, locale-preserving v2/v3/v4 links, and bare `/v4/simon` locale negotiation against the preview.
- The production build references approximately 625.4 KiB (v2), 613.4 KiB (v3), and 611.0 KiB (v4) of unique uncompressed client JavaScript, versus 775.6 KiB for v1 in the same build. All are below the current v1 route; v2 and v3 remain above the roadmap's aspirational 600 KiB target.

## [2026-09-02] implementation | Build the v4 immersive journey and browser quality gate

- Added static English and Danish v4 routes with a Nordic-night six-scene journey, meaningful CSS data visuals, full server-rendered content, reduced-motion protection, explicit evidence boundaries, and a persistent native evidence tray.
- Exposed all four experiences in the locale-preserving version switcher and added a production-mode Playwright/axe matrix at 390, 768, and 1280 CSS pixels for routing, metadata, filters, disclosures, reduced motion, JavaScript-disabled content, overflow, console errors, and serious accessibility defects.
- The browser gate found and drove fixes for v3 scroll-table keyboard focus and v4 percentage-label contrast. All 27 end-to-end checks pass on `codex/v4`; production release remains pending.

## [2026-09-02] implementation | Build the v3 research dossier

- Added static English and Danish v3 routes with a separate technical-atlas design, origin and QC tables, complete documented maternal and paternal paths, branch-quality evidence, a filterable connection register, and direct source links.
- Verified type-safe static generation, responsive semantics, and the client-side peer-reviewed/vendor filter. The version switcher now exposes Original, Story, and Dossier; Journey remains hidden until v4 lands. This entry records the `codex/v3` implementation state; production release remains pending.

## [2026-09-02] implementation | Build the evidence foundation and v2 story

- Added typed language-neutral evidence and source records, a sanitized aggregate fixture, and a local-only verifier that reproduced 725,291 autosomal rows/723,043 calls, the mtDNA sequence summary and three terminal-path markers, and 14,879,003 Big Y callable bases with all 32 terminal variants derived and 30 PASS.
- Added static English and Danish v2 routes with a warm editorial presentation, explicit `<1%` traces, evidence disclosures, accurate assay/lineage language, and server-rendered content.
- Fixed the existing three lint errors, excluded private inputs from Vercel, stopped tracking generated `next-env.d.ts`, and passed lint, type checking, seven evidence tests, production build, and desktop/mobile browser smoke checks. This entry records the `codex/v2` implementation state; production release remains pending.

## [2026-09-02] foundation | Create the project knowledge wiki

- Adapted the repository-based wiki pattern used by `saxo-daytrader-rust` into an index, schema, roadmap, source register, audit, concepts, decisions, runbooks, experiments, and ranked work queues.
- Added DNA-specific evidence statuses and a strict rule that raw exports, sequences, genotype rows, living match identities, and kit identifiers never enter Git or deployment artifacts.

## [2026-09-02] audit | Record the v1 and Simon evidence baseline

- Recorded the repository architecture, current build/lint state, route behavior, localization model, live UX findings, and aggregate checks of the autosomal, mtDNA, and Big Y inputs.
- Marked current precision, wording, source-linking, progressive-rendering, and accessibility gaps so proposed v2 behavior is not mistaken for deployed v1 behavior.

## [2026-09-02] decision | Adopt three parallel localized experiences

- Recorded the chosen sequence: v2 Story + Evidence, v3 Research Dossier, and v4 Immersive Journey under localized versioned routes, while preserving v1.
- Chose a shared evidence foundation with three independent design systems and staged releases.
