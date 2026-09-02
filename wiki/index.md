---
type: wiki-index
tags:
  - mydnastory/wiki
  - maintained-by-llm
updated: 2026-09-02
---

# My DNA Story Knowledge Wiki

This is the maintained knowledge layer for My DNA Story. The live product is the original v1 experience; the v2-v4 redesign is retained here as an archived experiment and should not be restored without a new decision.

The wiki summarizes evidence; it is not a second copy of the genome data. Raw FamilyTreeDNA exports remain private and gitignored.

## Start Here

- [Wiki schema](schema.md) — maintenance contract, evidence statuses, citation rules, and privacy boundary.
- [Project audit, 2026-09-02](sources/project-audit-2026-09-02.md) — verified state of the repository, live experience, and Simon's aggregate results.
- [Roadmap](roadmap.md) — archived v2-v4 redesign plan and its retirement outcome.
- [Urgent todo](urgent-todo.md) — verified defects or misleading claims that should be corrected first.
- [Todo](todo.md) — open implementation work that is not a current production incident.
- [Wiki log](log.md) — append-only record of documentation changes.

## Concepts

- [Current system architecture](concepts/current-system-architecture.md) — v1 routing, localization, data flow, UI composition, and deployment shape.
- [Evidence and privacy boundary](concepts/evidence-and-privacy-boundary.md) — what may become public, how claims are classified, and what must remain local.
- [Versioned experience strategy](concepts/versioned-experience-strategy.md) — archived design directions for v2 Story, v3 Dossier, and v4 Journey.

## Decisions

- [Decision index](decisions/README.md)
- [Parallel localized v2-v4 experiences](decisions/2026-09-02-parallel-localized-experiences.md)
- [Retire v2, v3, and v4](decisions/2026-09-02-retire-v2-v4.md)

## Runbooks

- [Runbook index](runbooks/README.md)
- [Build, test, preview, and release](runbooks/build-test-release.md)
- [Refresh DNA evidence safely](runbooks/refresh-dna-evidence.md)

## Sources

- [Scientific source register](sources/scientific-source-register.md) — primary and vendor sources, supported claims, and interpretation limits.
- [Project audit, 2026-09-02](sources/project-audit-2026-09-02.md) — repository and private-source aggregate audit.

## Experiments

- [Experiment index](experiments/README.md) — format for accessibility, comprehension, performance, and visual experiments.

## Working Rule

When code or evidence changes, update the relevant concept or source page, update the roadmap/todo state if necessary, and append one concise entry to [the log](log.md). Never paste raw genotype rows, living match identities, account identifiers, or private export contents into the wiki.
