## ADDED Requirements

### Requirement: Governance registers render structured tabs
The app SHALL render Risks, Open Questions, and Assumptions as tabbed structured registers.

#### Scenario: Risks section selected
- **WHEN** a user opens Acme Health Systems and selects Risks / Questions / Assumptions
- **THEN** Risks, Open Questions, and Assumptions tabs are visible

### Requirement: Blocking open questions are highlighted
The app SHALL warn when open questions block Phase 1 estimation.

#### Scenario: Blocking questions exist
- **WHEN** Open Questions renders and any open question has `blocksPhase1`
- **THEN** a warning callout identifies the blocking estimation risk

### Requirement: Review renders readiness checklist
The app SHALL render an internal review checklist grouped by readiness area and an approval workflow.

#### Scenario: Review selected
- **WHEN** the user selects Review
- **THEN** readiness score, grouped checklist, reviewer, status, comments, and approval actions are visible

### Requirement: Outputs render artifact readiness and preview
The app SHALL render generated output artifact cards with readiness states and an HTML Scope Document preview.

#### Scenario: Outputs selected
- **WHEN** the user selects Outputs
- **THEN** output cards and a client-facing HTML Scope Document preview are visible
