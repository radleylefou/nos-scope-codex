## Context

`SPEC.md` defines Phase 2 as the first deep build pass after the IA fix: Intake, Triage, and Solution Definition. These screens need to behave like real engagement workspace areas rather than static placeholders.

## Goals / Non-Goals

**Goals:**
- Make the selected engagement workspace materially closer to the MagicPatterns prototype.
- Render real, structured Acme data for the first workflow path.
- Use NOS components from `components/index.js`.
- Preserve the Phase 1 state model: `{ view, engagementId, section, subsection }`.
- Use `subsection` for Solution Definition tabs.

**Non-Goals:**
- Wire backend persistence, file uploads, transcript parsing, AI provider calls, or output export.
- Build native diagram editing.
- Build Domain Model, Estimation, Planning, Review, or Outputs depth in this phase.
- Add any duplicate UI component library.

## Decisions

### D1: Keep sections in the left rail, not repeated page tabs
The duplicate lifecycle strip from Phase 1 looked like a second navigation system. Phase 2 removes it from workspace pages. Page tabs are only used where the SPEC calls for page-local subsections, starting with Solution Definition.

### D2: Use representative static data
The Phase 2 screens use realistic Acme sample records from `SPEC.md`. Controls render with default values and review actions, but changes do not persist beyond local interactive state where needed.

### D3: Treat AI as a review affordance
AI features remain mocked. The UI shows AI draft, review, edit, approve, and assist actions, but does not call a provider.

### D4: Preserve downstream stubs
Later workflow sections still render the documented stub format so Phase 2 stays focused and verifiable.

## Risks / Trade-offs

- [Static controls] Users can see the intended workflow and state, but data persistence is intentionally not implemented.
- [Drawer-lite details] Pain point detail appears as an inline detail panel in this phase. A true slide-over drawer can be added once the NOS overlay/drawer pattern is defined.
