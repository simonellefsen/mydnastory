---
type: experiment-index
tags:
  - mydnastory/wiki
  - experiments
updated: 2026-09-02
---

# Experiments

Product experiments belong here when they can change a design or evidence decision. This project does not currently collect visitor analytics, so experiments default to local performance/accessibility measurements and documented moderated comprehension checks.

The v2-v4 redesign experiments are archived. The current product is the original v1 experience; a future redesign needs a new product decision before implementation.

Each experiment records:

- baseline route and Git revision;
- one question or hypothesis;
- audience and method;
- one primary metric and any guardrails;
- evidence gathered without private DNA exposure;
- result: adopt, reject, revise, or inconclusive;
- follow-up code/documentation decision.

Useful experiment classes include:

- whether readers understand `<1%` as uncertain rather than exactly `0.5%`;
- whether formation date and current-tester TMRCA are distinguishable;
- whether evidence disclosures are discoverable by keyboard and touch;
- whether v4 motion improves orientation without hiding content;
- whether a change meets bundle and Lighthouse targets.

Do not manufacture quantitative user conclusions from informal impressions, and do not add third-party tracking as part of an experiment without a separate privacy decision.
