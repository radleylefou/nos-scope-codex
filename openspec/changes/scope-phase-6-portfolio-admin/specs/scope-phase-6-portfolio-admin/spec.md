## ADDED Requirements

### Requirement: Global nav switches portfolio areas
The app SHALL support Engagements, Portfolio Reporting, and Admin as portfolio-level views.

#### Scenario: Portfolio Reporting selected
- **WHEN** the user selects Portfolio Reporting
- **THEN** the main content shows portfolio reporting instead of the engagement dashboard

### Requirement: Dashboard supports filters
The dashboard SHALL provide filters for All, Mine, Needs Action, and By Stage.

#### Scenario: Needs Action filter selected
- **WHEN** the user selects Needs Action
- **THEN** the engagement table is narrowed to engagements with open attention items

### Requirement: Create Engagement flow is available
The dashboard SHALL provide a create-engagement modal with structured fields.

#### Scenario: Create modal opens
- **WHEN** the user clicks Create Engagement
- **THEN** a modal opens with client, solution, lead, service offering, origin, budget, and timeline fields

### Requirement: Portfolio Reporting renders cross-engagement insight
The app SHALL render cross-engagement reporting metrics, stage distribution, owner load, and blocker summary.

#### Scenario: Reporting visible
- **WHEN** Portfolio Reporting renders
- **THEN** portfolio metrics and reporting tables are visible

### Requirement: Admin renders platform settings
The app SHALL render admin settings for lifecycle rules, governance rules, output configuration, and team defaults.

#### Scenario: Admin visible
- **WHEN** Admin renders
- **THEN** configuration sections are visible
