## ADDED Requirements

### Requirement: Intake renders a structured workflow screen
The app SHALL render Intake as a structured NOS form with discovery fields, document upload placeholders, transcript ingestion context, AI discovery summary review states, and validation guidance.

#### Scenario: Intake screen visible
- **WHEN** a user opens Acme Health Systems and selects Intake
- **THEN** the screen shows Intake Form, Document Ingestion, Transcript Ingestion, and AI Discovery Summary sections

#### Scenario: Intake AI affordances visible
- **WHEN** Intake renders
- **THEN** AI discovery actions and the summary review state are visible without calling a real AI provider

### Requirement: Triage renders routing decision and approval state
The app SHALL render Triage with a route decision, notes, conditional lookup placeholders, Technology Partner approval context, and next-step guidance.

#### Scenario: Triage decision visible
- **WHEN** a user selects Triage
- **THEN** the screen shows the four route options: New Engagement, Change Request, Expansion, and Decline / Pass

#### Scenario: Triage next step visible
- **WHEN** the selected route is New Engagement
- **THEN** the screen shows guidance to advance to Solution Definition

### Requirement: Solution Definition renders tabbed document workspace
The app SHALL render Solution Definition with page-local tabs for Introduction, Pain Points, Wish List, User Groups, and Technology Needs.

#### Scenario: Solution tabs visible
- **WHEN** a user selects Solution Definition
- **THEN** the Introduction, Pain Points, Wish List, User Groups, and Technology Needs tabs are available

#### Scenario: Pain points are structured
- **WHEN** the Pain Points tab is selected
- **THEN** structured pain point records show title, category, severity, affected groups, epic links, and actions or detail affordances

### Requirement: Workspace pages avoid duplicate lifecycle navigation
The app SHALL NOT render a repeated lifecycle strip on every workspace section page.

#### Scenario: Workspace section page renders
- **WHEN** a workspace section page renders
- **THEN** the left rail remains the primary section navigation and no second strip of all lifecycle sections appears in the main content

### Requirement: Downstream sections remain documented stubs
Sections outside Intake, Triage, and Solution Definition SHALL continue to render documented stubs until their build phases begin.

#### Scenario: Domain Model selected in Phase 2
- **WHEN** a user selects Domain Model
- **THEN** the app shows the Phase 3 stub notes rather than incomplete Domain Model UI
