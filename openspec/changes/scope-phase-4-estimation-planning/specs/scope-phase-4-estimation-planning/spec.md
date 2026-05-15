## ADDED Requirements

### Requirement: Estimation renders bottom-up rollups
The app SHALL render Estimation using L3 story estimates rolled up to Epics, Components, Phases, and total.

#### Scenario: Estimation overview visible
- **WHEN** a user opens Acme Health Systems and selects Estimation
- **THEN** the page shows total estimate, Phase 1 estimate, Phase 2 estimate, and unestimated story count

### Requirement: Estimation includes L3 table
The app SHALL render a dense table of L3 user stories with parent Epic, L1 Component, phase, complexity, estimate, override, final estimate, and status.

#### Scenario: L3 table selected
- **WHEN** the user selects the L3 Estimation Table tab
- **THEN** story-level rows are visible with estimates and unestimated states

### Requirement: Estimation reconciles top-down and bottom-up
The app SHALL show phase-level top-down envelope values beside bottom-up rollups and variance.

#### Scenario: Reconciliation selected
- **WHEN** the user selects Top-Down Reconciliation
- **THEN** the app shows envelope, actual, and delta by phase plus decision options

### Requirement: Planning renders phase board and timeline
The app SHALL render Planning with Phasing, Timeline, Team Structure, and Budget tabs.

#### Scenario: Plan phasing visible
- **WHEN** the user selects Plan
- **THEN** the app shows a Kanban-style phase board with Backlog, Phase 1, Phase 2, Future, and Out of Scope

#### Scenario: Timeline visible
- **WHEN** the user selects the Timeline tab
- **THEN** the app shows a CSS Gantt grouped by L1 Component and L2 Epic

### Requirement: Planning budget compares envelope and rollup
The app SHALL compare phase envelopes and bottom-up estimate costs in the Budget tab.

#### Scenario: Budget tab selected
- **WHEN** the user selects Budget
- **THEN** top-down and bottom-up budget values and variance indicators are visible
