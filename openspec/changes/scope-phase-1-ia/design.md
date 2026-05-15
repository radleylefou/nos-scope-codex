## Context

`SPEC.md` defines the app as a two-level product: a portfolio dashboard that lists engagements, and an engagement workspace where lifecycle sections belong to the selected engagement. The previous implementation used one `activeSection` state for both levels, which made Home, Intake, Triage, Solution, and Outputs appear as siblings.

## Goals / Non-Goals

**Goals:**
- Validate the portfolio to workspace information architecture.
- Use realistic Acme / Northwind / Meridian sample engagements from `SPEC.md`.
- Keep engagement lifecycle navigation local to the workspace.
- Expose right rail context only when an engagement is selected.
- Stub all workspace sections in Phase 1 while preserving the correct shell.

**Non-Goals:**
- Build deep Intake, Solution Definition, Domain Model, Estimation, Plan, Review, or Outputs screens in this phase.
- Add a router library.
- Wire backend persistence, uploads, AI providers, exports, or drag-and-drop.

## Decisions

### D1: Use plain React state instead of routing
The app follows `SPEC.md` and NOS repo constraints with local state: `{ view, engagementId, section, subsection }`. This preserves future route semantics without adding a router library.

### D2: Dashboard has global nav only
The portfolio shell shows Engagements, Portfolio Reporting, and Admin. Workspace lifecycle sections are not visible as global nav items.

### D3: Workspace shell owns lifecycle navigation
Once an engagement is selected, the side rail switches to grouped workspace sections and the top bar shows engagement context. Page content renders a Phase 1 stub for the active section.

### D4: Right rail is engagement-local
The right rail renders only in workspace mode, using selected engagement context, open questions, assumptions, AI suggestions, and documents.

## Risks / Trade-offs

- [Existing deeper screens temporarily not surfaced] Phase 1 intentionally prioritizes IA correctness. Deeper screens should be reintroduced from `SPEC.md` in later phases.
- [No URL deep links yet] State shape mirrors route hierarchy, so URL routing can be added later without changing product concepts.
