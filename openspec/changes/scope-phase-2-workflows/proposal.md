## Why

Phase 1 corrected the portfolio-to-workspace information architecture, but the workspace still renders shell stubs for the first lifecycle screens. The MagicPatterns benchmark feels deeper because it contains screen-level data, validation states, AI review affordances, and section-specific interactions for each engagement workflow.

## What Changes

- Replace the Phase 1 stubs for Intake, Triage, and Solution Definition with NOS-native workflow screens.
- Add Acme Health Systems sample data for intake fields, uploaded documents, transcript context, AI summary, triage route, approval state, solution narrative, pain points, wish list, user groups, and technology needs.
- Add Solution Definition tabs for Introduction, Pain Points, Wish List, User Groups, and Technology Needs.
- Remove the duplicate lifecycle/status strip from workspace section pages so the left rail remains the primary section navigation.
- Keep downstream sections as documented stubs until Domain Model, Estimation, Planning, Review, and Outputs are built in later phases.

## Impact

- `src/scopeData.js` - Phase 2 workflow data model.
- `src/App.jsx` - Intake, Triage, and Solution Definition screen rendering.
- `src/App.css` - workflow layout, tables, upload placeholders, AI draft cards, tab content, and validation styling.
- `openspec/changes/scope-phase-2-workflows/*` - documented Phase 2 requirements and verification tasks.
