## Why

The Scope app now has the corrected IA and the first workflow path through Intake, Triage, and Solution Definition. The next gap versus the MagicPatterns benchmark is the product core: a structured domain model where L1 Components, L2 Epics, L3 User Stories, and Acceptance Criteria are first-class scope objects rather than free-text notes.

## What Changes

- Add Acme Health Systems Domain Model data for L1/L2/L3/AC.
- Replace the Domain Model stub with a board/list workspace.
- Group L1 Components by Experience, Workflow, Integration, and Foundation.
- Show L2 Epics, L3 User Stories, Acceptance Criteria, estimates, phases, and traceability warnings.
- Add a detail pane and validation callouts for missing estimates, missing stories, and missing trace links.
- Keep Estimation, Planning, Review, and Outputs as documented stubs until later phases.

## Impact

- `src/scopeData.js` - Acme Domain Model hierarchy and validation summary.
- `src/App.jsx` - Domain Model view, board/list toggle, detail pane, story/AC rendering.
- `src/App.css` - Domain Model board, entity cards, hierarchy list, and detail layout.
- `openspec/changes/scope-phase-3-domain-model/*` - documented requirements and verification checklist.
