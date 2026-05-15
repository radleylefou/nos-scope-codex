## Context

`SPEC.md` identifies Domain Model as the app's heart. It must model scope as structured data: L1 Components contain L2 Epics, L2 Epics contain L3 User Stories, and L3 Stories contain Acceptance Criteria.

## Goals / Non-Goals

**Goals:**
- Build a usable Acme Domain Model screen.
- Support Board and List views with NOS-native controls.
- Expose progressive detail from L1 to L2 to L3 to AC.
- Show rollups and validation warnings before the dedicated Estimation phase exists.

**Non-Goals:**
- No drag-and-drop yet.
- No backend persistence.
- No AI provider calls.
- No full Estimation or Planning implementation in this phase.

## Decisions

### D1: Use custom CSS grid rather than a Kanban library
The Phase 3 board is a read/select board. Dragging is not needed yet, so a NOS-token CSS grid is sufficient and avoids adding a behavior library prematurely.

### D2: Keep detail pane inline
The SPEC calls for panels/drawers. This phase uses an inline detail pane to avoid inventing a drawer component before the NOS workbench defines one.

### D3: Start rollups inside Domain Model
The screen shows component and epic hour rollups from L3 story estimates. The full reconciliation model belongs in Estimation.

## Risks / Trade-offs

- [Static hierarchy] Data is representative and structured, but editing is not persisted.
- [Limited list expansion] List view presents the hierarchy in one expanded table rather than implementing full collapsible rows.
