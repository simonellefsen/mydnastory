---
type: decision
tags:
  - mydnastory/wiki
  - product
  - architecture
updated: 2026-09-02
status: accepted
---

# Parallel Localized v2-v4 Experiences

## Context

The current site is a polished bilingual long-form story, but its evidence, prose, numerical formatting, imagery, and chart values are coupled in one profile model. The next version needs better scientific precision and a clearer relationship between narrative and evidence. Three different experience directions are valuable enough to preserve rather than collapsing them into one compromise.

## Decision

- Keep v1 available at `/en/simon` and `/da/simon`.
- Create `/[locale]/v2/[slug]`, `/v3/`, and `/v4/` routes.
- Give v2, v3, and v4 independent visual systems and presentation components.
- Give all versions one typed, language-neutral evidence and source layer.
- Keep the content scope to ancestry and genealogy; exclude health and traits.
- Release v2, then v3, then v4. Each version is previewed, verified, merged, and checked in production before work branches from the next updated `main`.
- Show only released versions in the locale/slug-preserving version switcher.

## Consequences

- The initial v2 branch must build the shared evidence foundation as well as the first experience.
- Visual code duplication is acceptable where it preserves distinct design systems; scientific fact duplication is not.
- v1 remains a stable comparison and rollback path rather than being rewritten in place.
- Route metadata, localization parity, privacy verification, and accessibility must be tested for every version.
- Mutable vendor-tree results need visible as-of dates across all presentations.

## Alternatives Considered

- **Replace v1 in place:** rejected because it removes the current stable experience and makes comparison harder.
- **One responsive design with three themes:** rejected because the requested directions differ in information architecture, not just color and typography.
- **A single unlocalized `/v2/simon`:** rejected because the project is already bilingual and locale negotiation exists.
- **Ship all versions together:** rejected because sequential release provides smaller verification and rollback boundaries.

## Status

Accepted and documented. Implementation has not started. See the [roadmap](../roadmap.md) and [version strategy](../concepts/versioned-experience-strategy.md).
