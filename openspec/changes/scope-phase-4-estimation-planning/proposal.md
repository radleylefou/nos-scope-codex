## Why

The Domain Model now contains structured L1/L2/L3/AC scope data. The next product step is converting that model into estimates and a delivery plan. Without Estimation and Planning, the app can describe scope but cannot reconcile budget, phase work, or preview delivery implications.

## What Changes

- Replace the Estimation stub with overview, L3 table, roll-up, and reconciliation tabs.
- Calculate bottom-up rollups from Domain Model story estimates.
- Compare bottom-up hours and cost against a top-down engagement envelope.
- Replace the Plan stub with phasing board, CSS Gantt timeline, team structure, and budget tabs.
- Keep drag-and-drop, persistence, and real export/AI provider behavior out of scope.

## Impact

- `src/scopeData.js` - Acme Phase 4 envelope, team, milestone, and phase metadata.
- `src/App.jsx` - Estimation and Planning screens with tab state, rollups, reconciliation, phasing, timeline, team, and budget views.
- `src/App.css` - Estimation tables, rollup tree, phase board, Gantt, team tables, and budget reconciliation styles.
- `openspec/changes/scope-phase-4-estimation-planning/*` - documented Phase 4 requirements and tasks.
