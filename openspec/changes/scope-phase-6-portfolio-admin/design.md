## Context

The app state already separates portfolio and engagement workspace. Phase 6 extends portfolio mode so it has multiple product areas, not only Engagement Dashboard.

## Goals / Non-Goals

**Goals:**
- Make global nav functional for portfolio-level areas.
- Make dashboard filtering visible and useful.
- Mock create-engagement flow without persistence.
- Add cross-engagement portfolio reporting and admin settings.

**Non-Goals:**
- No backend persistence.
- No real user/permissions management.
- No actual create-engagement mutation.
- No charting library; use NOS cards, tables, and CSS bars.

## Decisions

### D1: Extend local view state
Use `view: "dashboard" | "portfolio-reporting" | "admin" | "engagement"` in the existing local state model.

### D2: Keep Create Engagement mocked
The modal captures the expected fields and communicates next-step behavior, but does not write to the engagement directory.

### D3: Use CSS reporting bars
Portfolio reporting uses simple tokenized bars and tables rather than adding a visualization library.

## Risks / Trade-offs

- [Mocked creation] The create flow improves product feel but does not persist new records.
- [Admin is representative] Admin settings are realistic but not wired into runtime behavior yet.
