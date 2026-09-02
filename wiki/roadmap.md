---
type: capability
tags:
  - mydnastory/wiki
  - roadmap
  - maintained-by-llm
updated: 2026-09-02
---

# My DNA Story Roadmap

This roadmap is a planning map, not a claim about production. Work should improve scientific precision, privacy, accessibility, and maintainability before adding visual spectacle.

## Guiding Principles

- One verified evidence layer; multiple presentations.
- Preserve source precision and expose uncertainty.
- Raw DNA remains local and private.
- English and Danish must remain numerically identical.
- Every version must work with keyboard navigation, reduced motion, and server-rendered content.
- Release one independently verifiable version at a time while v1 remains available.

## Phase 0 — Correct and Stabilize the Baseline

- Resolve the three current lint failures in `Origins.tsx` and `PhoneDock.tsx`.
- Replace invented numerical trace values with an explicit less-than representation.
- Correct over-precise lineage and assay wording listed in [urgent todo](urgent-todo.md).
- Ensure build/dev does not rewrite a tracked generated `next-env.d.ts`.
- Add an explicit Vercel exclusion for `ftdna/**` in addition to Git ignore protection.

Exit gate: lint and production build pass, the worktree remains clean, and production claims no longer rely on invented precision.

## Phase 1 — Shared Evidence Foundation

- Introduce language-neutral `Fact`, `SourceRef`, `OriginEstimate`, `LineageNode`, `DatasetQc`, and `Connection` records.
- Move numbers, precision, confidence, date, source IDs, and method notes out of presentation copy.
- Add clickable sources and retrieval dates.
- Add a sanitized aggregate fixture for CI and a local-only private verification command.
- Add unit coverage for evidence invariants, localization parity, and privacy exclusions.

Exit gate: all published facts render from one typed source, and a trusted local verification run reproduces the public aggregate fixture from the ignored inputs.

## Phase 2 — v2 Story + Evidence

Route: `/en/v2/simon` and `/da/v2/simon`.

- Build a warm editorial museum-dossier design from scratch.
- Use five chapters: Snapshot, Origins, Two Family Lines, Ancient Context, and Evidence & Method.
- Attach an evidence disclosure to major claims.
- Replace the chromosome skyline with an accurate test/QC card.
- Keep the experience shorter and easier to scan than v1.

Exit gate: bilingual preview passes content, accessibility, responsive, metadata, no-JavaScript, reduced-motion, bundle, and private-verification checks before production release.

## Phase 3 — v3 Research Dossier

Route: `/en/v3/simon` and `/da/v3/simon`.

- Build a slate-and-teal technical atlas with complete documented lineages.
- Add a filterable evidence matrix, QC tables, branch summaries, methodology, and source chronology.
- Separate peer-reviewed ancient-DNA evidence from vendor-curated notable connections.
- Show quality flags and interpretation limits without exposing raw records.

Exit gate: an informed reader can trace every material conclusion to a source and understand what is observed, derived, or interpreted.

## Phase 4 — v4 Immersive Journey

Route: `/en/v4/simon` and `/da/v4/simon`.

- Build a Nordic-night SVG/CSS scrollytelling experience without WebGL.
- Use six scenes: The Tests, Population Estimate, Ancient Europeans, Maternal Line, Paternal Line, and What the Evidence Can Say.
- Keep an evidence tray available throughout.
- Make conceptual geography visibly uncertain rather than GPS-like.

Exit gate: the story remains complete without animation or JavaScript, meets performance targets, and contains no weaker evidence treatment than v2/v3.

## Release Sequence

1. `codex/v2` from current `main`: shared foundation plus v2, preview, verify, merge, and production verification.
2. `codex/v3` from updated `main`: v3, preview, verify, merge, and production verification.
3. `codex/v4` from updated `main`: v4, preview, verify, merge, and production verification.

The version switcher exposes only released versions and preserves locale and slug. v1 remains the stable fallback at `/en/simon` and `/da/simon`.

## Acceptance Targets

- Lighthouse accessibility at least 95 and mobile performance at least 85 on each new route.
- No console errors, horizontal overflow, hidden server-rendered chapters, or keyboard traps at 390, 768, and 1280 CSS pixels.
- Each route remains below v1's audited approximate 681 KB first-load JavaScript; target no more than 600 KB for v2/v3 and 650 KB for v4.
- Canonical, hreflang, title, description, and social metadata are version-specific and correct in both locales.
- Lint, type checking, unit tests, production build, browser tests, private aggregate verification, and clean-worktree check pass before release.
