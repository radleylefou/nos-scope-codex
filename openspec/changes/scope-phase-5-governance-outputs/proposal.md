## Why

The Scope app can now move from intake through domain modeling, estimation, and planning. The next gap is governance and deliverable readiness: users need to track risks, resolve blocking questions, approve scope quality, and preview generated outputs before client/SOW handoff.

## What Changes

- Replace the Risks / Questions / Assumptions stub with three tabbed structured registers.
- Replace the Review stub with readiness checklist, score, approval state, and reviewer comments.
- Replace the Outputs stub with artifact cards, readiness validation, and an HTML Scope Document preview.
- Add Acme-specific governance, review, and output data.
- Keep export generation, PDF rendering, version history, and backend approvals mocked.

## Impact

- `src/scopeData.js` - Acme Phase 5 governance/review/output records.
- `src/App.jsx` - Risks, Review, and Outputs screens.
- `src/App.css` - governance table, readiness checklist, output cards, and preview styles.
- `openspec/changes/scope-phase-5-governance-outputs/*` - documented requirements and verification.
