---
type: runbook
tags:
  - mydnastory/wiki
  - runbooks
  - testing
  - deployment
updated: 2026-09-02
---

# Build, Test, Preview, and Release

This runbook describes the current checks and release flow for v1-v4.

## Current Commands

Install dependencies:

```bash
rtk npm ci
```

Run the current static quality gates:

```bash
rtk npm run lint
rtk npm run typecheck
rtk npm run test
rtk npm run build
rtk npm run test:e2e
rtk npm run dna:verify:private
rtk git status --short
```

As of 2026-09-02 on `codex/v4`, all of these checks pass. The private verifier requires the ignored FamilyTreeDNA inputs on a trusted local machine; it prints aggregates only. Playwright starts a production build/server and tests desktop and mobile Chromium.

For local visual inspection:

```bash
rtk npm run dev
```

Use the in-app browser or a browser test runner against the localized route. Do not expose the dev server publicly.

- `typecheck` performs generated-route typing followed by `tsc --noEmit`.
- `test` runs unit and evidence-fixture tests without private data.
- `test:e2e` runs localized route, accessibility, responsive, interactive-control, and no-JavaScript browser checks.
- `dna:verify:private` requires ignored local DNA exports and compares only approved aggregates to the public fixture.

## Pre-Preview Checklist

1. Read [urgent todo](../urgent-todo.md), [roadmap](../roadmap.md), and the latest [wiki log](../log.md).
2. Confirm `ftdna/` is ignored and has no tracked files:

   ```bash
   rtk git ls-files ftdna
   rtk git check-ignore -v ftdna
   ```

3. Run lint, type checking, unit tests, production build, and browser tests available on the branch.
4. Run private aggregate verification on the trusted local machine.
5. Confirm the build did not modify tracked generated files.
6. Review the staged diff for raw DNA, identifiers, absolute private paths, secrets, and accidental generated artifacts.
7. Append the material change and evidence result to [the wiki log](../log.md).

## Preview Verification

Use the Vercel Git preview associated with the branch or pull request. Record the preview URL and exact Git revision in the release work log.

For both English and Danish:

- open the direct localized URL and the bare locale-negotiated URL;
- verify canonical and hreflang metadata;
- test version navigation without exposing unreleased routes;
- inspect 390, 768, and 1280 CSS-pixel layouts;
- navigate every control by keyboard and verify focus returns from dialogs;
- test reduced motion and a JavaScript-disabled render;
- verify no console error, horizontal overflow, or missing chapter;
- run Lighthouse and record accessibility, performance, and bundle results;
- confirm source links open the intended official or primary source.

## Production Release

Release only one version at a time:

1. Merge the verified version branch into `main`.
2. Wait for the Vercel production deployment associated with that exact commit.
3. Verify the localized route and the bare route redirect on `mydnastory.vercel.app`.
4. Confirm the page exposes only already released versions.
5. Re-run the high-value smoke checks: metadata, keyboard navigation, source links, responsive layout, console, and visible Git revision if the app later exposes one.
6. Update roadmap/todo state and append the production result to the wiki log.

If verification fails, keep v1 available, hide the new version from the switcher, and repair or roll back through Vercel before proceeding to the next version.
