---
type: decision
tags:
  - mydnastory/wiki
  - release
  - workflow
updated: 2026-09-02
status: accepted
supersedes:
  - production-sequencing in 2026-09-02-parallel-localized-experiences.md
---

# Combined v2-v4 Production Release (Retired)

## Context

The original decision proposed three separate production promotions. Implementation still produced dependency-ordered Git milestones—v2 and its evidence foundation, then v3, then v4—but the user asked to proceed with all three versions in the same workstream. The shared navigation also became most useful once all three destinations were available.

## Decision

- Preserve separate `codex/v2`, `codex/v3`, and `codex/v4` branches and milestone commits.
- Validate each implementation locally as it lands.
- Validate the combined descendant revision in a protected Vercel preview.
- Fast-forward `main` through the milestone chain and make one combined production promotion.
- Keep v1 unchanged as the fallback route.

## Consequences

- The Git history still supports inspection and rollback at each version boundary.
- Production users receive a complete four-way version switcher immediately.
- A defect shared by the version switcher could affect all new routes at once, so the combined Playwright/axe matrix is a required release gate.
- This supersedes only the production-sequencing detail of the earlier decision; the route, evidence, privacy, localization, and independent-design decisions remain in force.

## Outcome

Released to `mydnastory.vercel.app` on 2026-09-02 after the combined preview and production checks passed. Retired later the same day after product review selected the original v1 page; see the rollback entry in the [wiki log](../log.md).
