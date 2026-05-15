## Context

`SPEC.md` defines Phase 5 as Governance + Outputs: Risks, Open Questions, Assumptions, internal review, approval workflow, and generated artifact previews.

## Goals / Non-Goals

**Goals:**
- Make governance objects first-class structured records.
- Surface open questions that block Phase 1 estimation.
- Show readiness gates grouped by Core, Domain Model, Estimation, and Governance.
- Show output artifact readiness and HTML Scope Document preview.

**Non-Goals:**
- No real export generation.
- No approval persistence.
- No PDF/ZIP production.
- No drawer animation; detail appears inline in this phase.

## Decisions

### D1: Use tabbed registers
Risks, Questions, and Assumptions use `PageTabs` because they are peer governance views within one workspace section.

### D2: Review checklist is read-only
Checklist items represent system-derived readiness checks. The UI shows disabled checkboxes and status pills rather than editable task checkboxes.

### D3: Outputs are preview stubs
Output cards show readiness and actions, but Generate/Export do not produce real files yet.

## Risks / Trade-offs

- [Mocked actions] Output and approval actions communicate intent but do not mutate data.
- [Inline detail] Registers do not use a full drawer until NOS defines a standard drawer pattern.
