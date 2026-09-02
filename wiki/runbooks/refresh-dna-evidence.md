---
type: runbook
tags:
  - mydnastory/wiki
  - runbooks
  - evidence
  - privacy
updated: 2026-09-02
---

# Refresh DNA Evidence Safely

Use this procedure when a new FamilyTreeDNA export arrives, a public haplotree changes, or a release needs a fresh evidence check.

The former v2-v4 verifier and typed evidence fixture were retired on 2026-09-02. This runbook now applies to the active v1 page; keep raw inputs local and publish only reviewed aggregate copy.

## Before Reading Private Inputs

- Work only on the trusted local machine.
- Confirm the source sits below the ignored `ftdna/` directory.
- Confirm no `ftdna/` path is tracked or staged.
- Do not open a raw export through a public service, hosted notebook, external AI upload, or Vercel deployment.
- Do not paste raw rows or sequences into chat, issues, commits, screenshots, or this wiki.

## Evidence Refresh

1. Record the export/test date privately without adding kit identifiers to Git.
2. Open the current public FamilyTreeDNA scientific pages and record their retrieval date.
3. If no verifier exists for a new source, write a local read-only analysis that emits only approved aggregate names and values. Review its output before preserving any result.
5. Compare:
   - autosomal record totals, mapped chromosomes, missing/called counts, and displayed estimates;
   - mtDNA sequence length, reference alignment summary, uncertainty count, and approved branch markers;
   - Big Y callable bases, terminal and parent branch marker presence, derived state, filter status, and coverage summary;
   - public branch formation, TMRCA, confidence interval, tester count, and self-reported country counts.
6. Classify each changed claim using [the evidence statuses](../schema.md#evidence-status).

## When Results Change

- A vendor-tree change is not automatically an error in the old audit; keep the old audit dated and add a new source note or audit.
- Update the v1 data/copy once, then confirm both English and Danish routes present the same reviewed claim.
- If a value becomes less precise, preserve the weaker precision. Do not retain an old exact value for visual convenience.
- If private and public sources disagree, do not choose silently. Mark the claim unresolved, remove or qualify it in public copy, and document the competing observations.
- If the change reveals a privacy exposure, stop the release and add it to [urgent todo](../urgent-todo.md).

## Before Finishing

- Verify the committed fixture contains aggregates only.
- Check the Git diff and untracked files.
- Run `rtk npm run lint` and `rtk npm run build`.
- Update the scientific source retrieval date.
- Append a concise log entry identifying which fact IDs changed and why, without raw data.
