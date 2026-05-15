## ADDED Requirements

### Requirement: SPEC.md controls implementation
The app SHALL include `SPEC.md` at the project root and Phase 1 implementation SHALL follow its navigation and state model.

#### Scenario: Product spec exists
- **WHEN** the project root is inspected
- **THEN** `SPEC.md` is present and describes the NOS2 Scope product spec

### Requirement: App state separates portfolio and workspace
The app SHALL use a state shape equivalent to `{ view, engagementId, section, subsection }` where `view` is either `dashboard` or `engagement`.

#### Scenario: Initial portfolio view
- **WHEN** the app first loads
- **THEN** `view` is `dashboard`, no engagement is selected, and the portfolio dashboard is shown

#### Scenario: Engagement selection
- **WHEN** the user opens an engagement from the dashboard
- **THEN** `view` becomes `engagement`, `engagementId` is set, and `section` defaults to `intake`

### Requirement: Dashboard is a portfolio entry point
The dashboard SHALL show portfolio-level metrics, needs-attention items, and an active engagements table with realistic sample records.

#### Scenario: Engagement table renders
- **WHEN** the dashboard renders
- **THEN** Acme Health Systems, Northwind Logistics, and Meridian Financial Services are visible as engagement rows

### Requirement: Workspace navigation is engagement-local
Lifecycle sections SHALL render inside the selected engagement workspace, not as siblings of the global dashboard nav.

#### Scenario: Global nav excludes lifecycle stages
- **WHEN** the dashboard renders
- **THEN** global navigation shows Engagements, Portfolio Reporting, and Admin, and does not show Intake or Triage as global siblings

#### Scenario: Workspace nav includes lifecycle stages
- **WHEN** an engagement is selected
- **THEN** workspace navigation shows Intake, Triage, Solution Definition, Artifacts, Domain Model, Estimation, Plan, Risks / Questions / Assumptions, Review, and Outputs

### Requirement: Right rail is scoped to selected engagement
The right rail SHALL appear in engagement workspace mode and SHALL show selected engagement context, open questions, assumptions, AI suggestions, and related documents.

#### Scenario: Right rail hidden on dashboard
- **WHEN** the dashboard renders
- **THEN** the engagement right rail is not shown

#### Scenario: Right rail visible in workspace
- **WHEN** an engagement is selected
- **THEN** the right rail shows context for that engagement

### Requirement: Phase 1 workspace sections are stubs
Each workspace section SHALL render a clear Phase 1 stub with purpose, status, and next-build notes rather than deep workflow content.

#### Scenario: Section stub renders
- **WHEN** the user navigates to any workspace section
- **THEN** the main content shows the section name, purpose, Phase 1 shell status, and future deep-build notes
