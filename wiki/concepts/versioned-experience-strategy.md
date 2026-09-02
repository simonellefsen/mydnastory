---
type: concept
tags:
  - mydnastory/wiki
  - product
  - design
updated: 2026-09-02
sources:
  - ../decisions/2026-09-02-parallel-localized-experiences.md
---

# Versioned Experience Strategy

Archived on 2026-09-02. The project explored three genuinely different answers to the same content problem, but the original v1 experience was judged the better product and remains live.

## v2 — Story + Evidence

**Audience:** relatives and curious non-specialists.

**Question answered:** “What does Simon's ancestry evidence say, and how much should I trust each part?”

**System:** warm museum dossier; ivory, oxblood, brass, paper-like depth, editorial serif, restrained motion.

**Structure:** Snapshot; Origins; Two Family Lines; Ancient Context; Evidence & Method.

**Interaction:** evidence badges disclose source, date, confidence, and limitations without forcing technical detail into the main story.

## v3 — Research Dossier

**Audience:** genealogists, technically curious relatives, and future maintainers.

**Question answered:** “What was measured, how was it checked, and how does every conclusion trace to evidence?”

**System:** cool technical atlas; slate, teal, grids, compact tables, restrained data graphics, monospace accents.

**Structure:** source matrix; autosomal estimate and QC; complete mtDNA lineage; complete Y-DNA lineage; branch variant evidence; ancient and notable connections; method and limitations.

**Interaction:** filter by evidence category and expand methodological detail. No raw-data download is offered.

## v4 — Immersive Journey

**Audience:** readers drawn in by narrative and visual progression.

**Question answered:** “How do three different DNA tests move through different scales of time?”

**System:** Nordic night; ink blue, aurora, cartographic texture, timeline, SVG/CSS scenes, no WebGL.

**Structure:** The Tests; Population Estimate; Ancient Europeans; Maternal Line; Paternal Line; What the Evidence Can Say.

**Interaction:** scrollytelling with a persistent evidence tray. All content remains present with reduced motion or JavaScript disabled.

## Version Navigation

The labels are:

- Original — v1 `/[locale]/simon`
- Story — v2 `/[locale]/v2/simon`
- Dossier — v3 `/[locale]/v3/simon`
- Journey — v4 `/[locale]/v4/simon`

The v2-v4 switcher and routes were removed. The active navigation is the original locale-preserving v1 experience.

## Shared and Independent Layers

Shared:

- facts, sources, aggregate fixture, privacy rules, localization keys;
- focus management, dialog semantics, reduced-motion helpers, source-link component;
- route generation, metadata utilities, and released-version navigation.

Independent:

- design tokens, layout, typography hierarchy, chapter composition, motion language, and data-visualization treatment.

This separation lets the experiences compete honestly without allowing scientific claims to drift.
