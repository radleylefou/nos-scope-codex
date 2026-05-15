## Why

The engagement workspace MVP is now complete, but the product shell still behaves like a single dashboard entry point. Scope needs basic portfolio reporting, admin/configuration surfaces, dashboard filters, and a create-engagement flow to feel like an internal platform instead of a single-engagement prototype.

## What Changes

- Enable portfolio-level navigation for Engagements, Portfolio Reporting, and Admin.
- Add dashboard filter chips for All, Mine, Needs Action, and By Stage.
- Add a mocked Create Engagement modal using NOS form components.
- Add Portfolio Reporting view with cross-engagement metrics, stage distribution, ownership load, and blockers.
- Add Admin view with lifecycle configuration, governance rules, output settings, and team defaults.

## Impact

- `src/scopeData.js` - portfolio reporting/admin configuration data.
- `src/App.jsx` - portfolio app state, global navigation, filters, modal, Portfolio Reporting, Admin.
- `src/App.css` - reporting/admin/filter/modal support styles.
- `openspec/changes/scope-phase-6-portfolio-admin/*` - documented Phase 6 requirements and tasks.
