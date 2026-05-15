## Why

The first NOS Scope implementation flattened portfolio navigation and engagement workflow navigation into one level. It also hardwired a single sample engagement as global context. `SPEC.md` now defines the controlling product model: portfolio dashboard first, then selected engagement workspace with local lifecycle sections and persistent right rail.

## What Changes

- Add `SPEC.md` to the app root as the controlling product spec.
- Replace the flat `activeSection` model with explicit app state: dashboard vs. engagement workspace.
- Make the dashboard the portfolio entry point with engagement selection.
- Move Intake, Triage, Solution Definition, Artifacts, Domain Model, Estimation, Plan, RQA, Review, and Outputs into the selected engagement workspace shell.
- Add a persistent workspace right rail with open questions, assumptions, AI suggestions, and related documents.
- Keep Phase 1 section content stubbed so IA can be verified before deep screens are expanded.

## Impact

- `SPEC.md` - new source-of-truth product spec copied from the Claude output.
- `src/scopeData.js` - Phase 1 portfolio and workspace data model.
- `src/App.jsx` - refactored shell, state model, dashboard selection, workspace navigation, section stubs.
- `src/App.css` - updated layout for portfolio mode and workspace mode.
