## Context

`SPEC.md` defines Estimation and Plan as the bridge from scoped hierarchy to operational delivery. Estimates should start bottom-up from L3 stories, then compare against a top-down envelope. Planning should start with phase board and timeline placeholders before adding drag-and-drop.

## Goals / Non-Goals

**Goals:**
- Make L3 story estimates visible and reconcilable.
- Roll L3 estimates into Epics, Components, Phases, and total.
- Show unestimated stories and blocked estimation items.
- Build Phasing, Timeline, Team Structure, and Budget tabs.
- Use NOS components and tokenized local CSS.

**Non-Goals:**
- No drag-and-drop implementation yet.
- No editable persistence.
- No real budget/margin model beyond representative static data.
- No external timeline library.

## Decisions

### D1: Bottom-up calculation uses current Domain Model
The Phase 4 UI derives rows and rollups from `domainModelByEngagement`, so Domain Model and Estimation remain internally consistent.

### D2: Timeline uses CSS grid
The first Gantt is a token-styled CSS grid grouped by L1/Epic. A library can be added later only if interactions justify it.

### D3: What-if mode is visual only
Planning includes a What-if control as a visible affordance, but phase changes are not persisted in this phase.

## Risks / Trade-offs

- [Partial model estimate] The current Domain Model sample does not model every future epic needed for a full 950h estimate, so Estimation distinguishes modeled bottom-up values from the top-down envelope.
- [Static board] The phase board is ready for future drag-and-drop but cards do not move yet.
