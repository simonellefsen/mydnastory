---
type: capability
tags:
  - mydnastory/wiki
  - todo
updated: 2026-09-02
---

# Todo

Open work that is important but is not classified as an immediate production defect. Ranked roughly by dependency order.

## T1 — Typed Evidence Contract

**State:** implemented and released; extend only when a new evidence shape requires it.

Create language-neutral facts and source records with precision, confidence, directness, method, and as-of metadata. Presentation copy must consume these records instead of embedding authoritative numbers.

## T2 — Reproducible Private Aggregate Verification

**State:** implemented and released.

Implement a local-only verifier for the autosomal CSV, mtDNA FASTA, and Big Y VCF/BED. It must compare approved aggregates and branch markers without writing raw rows. CI receives only a sanitized aggregate fixture.

## T3 — Localization Parity Tests

**State:** implemented and released.

Assert that EN and DA use the same fact IDs, values, precision, sources, lineage order, and QC. Only prose and presentation labels may differ.

## T4 — Version-Aware Routes and Metadata

**State:** implemented and released across v2-v4.

Add static localized version routes, canonical/hreflang metadata, and a locale/slug-preserving version switcher driven by an explicit released-version list.

## T5 — Automated Browser and Accessibility Coverage

**State:** implemented and released.

Playwright and axe now cover localized routing, version navigation, v3 filtering, v4 evidence disclosure, 390/768/1280-pixel responsive overflow, reduced motion, serious accessibility violations, console errors, and no-JavaScript visibility. Stable screenshot assertions remain part of T6.

## T6 — Visual Regression Baselines

**State:** open for a follow-up hardening pass.

Capture stable screenshots for the three target widths and both languages. Keep screenshots free of private inputs and update them only after a reviewed design change.

## T7 — Evidence Freshness Review

**State:** recurring after Phase 1.

Recheck mutable FamilyTreeDNA TMRCA, tester-count, country, and branch-variant pages before each release and record the retrieval date. Do not silently rewrite historical audit pages.
