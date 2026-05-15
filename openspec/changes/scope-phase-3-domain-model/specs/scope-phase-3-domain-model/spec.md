## ADDED Requirements

### Requirement: Domain Model renders structured hierarchy
The app SHALL render Domain Model data as L1 Components, L2 Epics, L3 User Stories, and Acceptance Criteria.

#### Scenario: Domain Model selected
- **WHEN** a user opens Acme Health Systems and selects Domain Model
- **THEN** the page shows structured L1/L2/L3/AC scope data instead of a placeholder

### Requirement: Board view groups L1 by type
The app SHALL provide a board view where L1 Components are grouped by Experience, Workflow, Integration, and Foundation.

#### Scenario: Board columns visible
- **WHEN** Domain Model board view renders
- **THEN** the Experience, Workflow, Integration, and Foundation columns are visible

### Requirement: Detail pane exposes progressive hierarchy
The app SHALL show selected L1 details, L2 Epic rows, L3 User Story cards, and Acceptance Criteria details.

#### Scenario: Component selected
- **WHEN** a user selects Clinical Intake Portal
- **THEN** its Epics, selected Epic stories, and story Acceptance Criteria are visible

### Requirement: List view exposes expanded hierarchy
The app SHALL provide a list view that shows Phase, L1, Epic, Story count, Estimate, and Status.

#### Scenario: List view selected
- **WHEN** the user switches to List view
- **THEN** the hierarchy table shows L1 and Epic records with estimates and phases

### Requirement: Domain Model displays validation warnings
The app SHALL display validation warnings for missing estimates, missing pain point links, or missing user stories.

#### Scenario: Validation summary visible
- **WHEN** Domain Model renders
- **THEN** warning callouts summarize scope readiness issues
