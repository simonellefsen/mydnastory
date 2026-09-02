---
type: capability
tags:
  - mydnastory/wiki
  - urgent
updated: 2026-09-02
---

# Urgent Todo

Verified production or repository gaps that should be corrected before the redesign expands the surface area.

## U1 — Remove Invented Precision from Trace Origins

**State:** open.

The Baltic and Sephardic Jewish estimates are published by FamilyTreeDNA as `<1%`, but the current model stores each as `0.5` so the ring can draw them. A display implementation must not manufacture a midpoint the source did not provide.

Required outcome: represent less-than estimates explicitly and do not render them as quantitatively comparable slices.

## U2 — Correct Assay and Lineage Wording

**State:** open.

The autosomal test is a microarray, mtFull is a mitochondrial sequence, and Big Y is targeted Y-chromosome sequencing—not three whole genomes. The current maternal headline also treats a medieval time estimate and modern tester-country cluster as proof of a Swedish Viking-age origin.

Required outcome: use accurate assay names and phrase geographic/time conclusions as interpretation with visible uncertainty.

## U3 — Make Sources Actionable

**State:** open.

The current science section lists citations as prose but does not provide direct URLs, retrieval dates, or a machine-readable connection from claim to source.

Required outcome: every material claim resolves to a typed source record and a clickable primary or official page.

## U4 — Fix the Existing Quality Gate

**State:** resolved on `codex/v2`; production release pending.

The production build succeeds, but lint currently fails on a render-time cursor mutation and two synchronous state updates inside effects. A redesign must not build on a red baseline.

Outcome: the render-time origin calculation is immutable and the effect-driven state resets were removed. Lint, TypeScript, evidence tests, and the production build pass without weakening rules.

## U5 — Add a Deployment-Level Raw-Data Exclusion

**State:** resolved on `codex/v2`; production release pending.

`ftdna/` is gitignored and untracked, but the deployment boundary should state the exclusion independently.

Outcome: `.vercelignore` excludes `ftdna/**`; Git continues to ignore the directory; the verifier emits approved aggregates only and does not create an output artifact.

## U6 — Preserve Content Without Viewport Animation

**State:** open.

Many v1 sections begin at opacity zero and appear only after viewport-triggered client animation. Full-page capture, printing, script failure, and some reduced-motion paths can therefore hide content.

Required outcome: server-rendered content is visible by default; motion enhances it after hydration and respects reduced-motion preferences.
