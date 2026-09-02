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

**State:** initial contract implemented on `codex/v2`; extend only when a new evidence shape requires it.

Create language-neutral facts and source records with precision, confidence, directness, method, and as-of metadata. Presentation copy must consume these records instead of embedding authoritative numbers.

## T2 — Reproducible Private Aggregate Verification

**State:** implemented on `codex/v2`; production release pending.

Implement a local-only verifier for the autosomal CSV, mtDNA FASTA, and Big Y VCF/BED. It must compare approved aggregates and branch markers without writing raw rows. CI receives only a sanitized aggregate fixture.

## T3 — Localization Parity Tests

**State:** implemented on `codex/v2`; production release pending.

Assert that EN and DA use the same fact IDs, values, precision, sources, lineage order, and QC. Only prose and presentation labels may differ.

## T4 — Version-Aware Routes and Metadata

**State:** v2 implemented; v3/v4 route entries follow their branches.

Add static localized version routes, canonical/hreflang metadata, and a locale/slug-preserving version switcher driven by an explicit released-version list.

## T5 — Automated Browser and Accessibility Coverage

**State:** planned for v2.

Add Playwright and axe checks for routing, evidence disclosures, keyboard/focus behavior, mobile navigation, no-JavaScript visibility, reduced motion, responsive overflow, and console errors.

## T6 — Visual Regression Baselines

**State:** planned for v2.

Capture stable screenshots for the three target widths and both languages. Keep screenshots free of private inputs and update them only after a reviewed design change.

## T7 — Evidence Freshness Review

**State:** recurring after Phase 1.

Recheck mutable FamilyTreeDNA TMRCA, tester-count, country, and branch-variant pages before each release and record the retrieval date. Do not silently rewrite historical audit pages.
