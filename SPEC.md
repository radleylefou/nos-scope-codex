# NOS2 Scope — Product Spec (SPEC.md)

> **For agentic coders:** Read this file entirely before writing any code.
> It defines every entity, every screen, every field, all sample data, and which NOS components to use.
> Your visual and component reference is the NOS workbench: https://nos-design-system.vercel.app/
> Your component source is: github.com/radleylefou/nos-design-system (import from components/index.js, import tokens/tokens.css globally)
> Do not hardcode any visual values. Do not add UI component libraries. Build one screen at a time and verify it in the browser before proceeding.

---

## 0. App Overview

| Field | Value |
|---|---|
| **App name** | Nymbl Scope |
| **One-sentence description** | Internal platform for scoping client software engagements from intake through build handoff, producing traceable estimates and structured SOW deliverables. |
| **Primary audience** | Internal Nymbl staff: Commercial Lead, Solution Lead, Delivery Manager, Estimation Lead, Technology Partner |
| **Design system** | NOS (github: radleylefou/nos-design-system, viewer: https://nos-design-system.vercel.app/) |
| **Tech stack** | React + Vite, CSS custom properties from tokens.css, no router library (plain React state), no UI component libraries |
| **Estimation unit** | Hours (v1) |

---

## 1. Object Model

### Engagement
**Description:** Top-level container. An opportunity from intake through SOW signature.
**Parent of:** Solution (one per engagement)

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | auto |
| clientName | string | e.g., "Acme Health Systems" |
| solutionName | string | e.g., "Clinical Intake Automation Platform" |
| status | enum | Created, Intake, Triage, Solution Definition, Domain Modeling, Estimation, Phasing & Planning, Internal Review, Client Review, SOW Deliverables, Signed, Build Handoff, Closed |
| commercialLead | string | e.g., "Maya Chen" |
| solutionLead | string | e.g., "Alex Rivera" |
| deliveryManager | string | e.g., "Priya Shah" |
| estimationLead | string | e.g., "Jordan Lee" |
| createdAt | date | |
| updatedAt | date | |
| triageRoute | enum | New Engagement, Change Request, Expansion, Declined |
| serviceOffering | enum | App Dev, AI Assistant, Data Warehouse, Re-platform |

---

### Solution (L0)
**Description:** The complete system being scoped. One per engagement.
**Parent of:** L1 Components, Phases, Risks, Open Questions, Assumptions

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | |
| name | string | e.g., "Clinical Intake Automation Platform" |
| serviceOffering | enum | App Dev, AI Assistant, Data Warehouse, Re-platform |
| description | text | 2–4 sentences |
| clientProfile | text | AI-drafted, human-approved |
| organizationalContext | text | Which business unit / function |
| engagementOrigin | text | How this surfaced and why now |
| problemStatement | text | One executive-readable paragraph |
| opportunityStatement | text | Strategic value and expected outcomes |

---

### PainPoint
**Description:** A specific client pain. First-class entity — Epics must trace to at least one.

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | |
| title | string | Short label |
| description | text | 1–3 sentences |
| category | enum | Operational, Technical, Compliance, Financial, Customer Experience, Other |
| severity | enum | High, Medium, Low |
| affectedUserGroups | string[] | Links to UserGroup names |
| linkedWishListItems | string[] | Links to WishListItem ids |
| epicCount | number | How many epics trace to this |

---

### WishListItem
**Description:** Future-state capability or must-have, articulated by the client.

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | |
| title | string | |
| description | text | |
| priority | enum | Must Have, Should Have, Could Have, Won't Have |
| linkedPainPoints | string[] | |

---

### UserGroup
**Description:** A persona type within the solution. Mission statement is required.

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | |
| name | string | Role-based, not job-title |
| roleDescription | text | What they do |
| missionStatement | text | Single sentence — required before engagement can advance |
| primaryExperiences | string[] | Links to L1 Experience component names |
| secondaryExperiences | string[] | |

---

### L1Component (Domain Model Component)
**Description:** Architectural component. Four enforced types. Lives across phases.

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | |
| name | string | e.g., "Clinical Intake Portal" |
| type | enum | Experience, Workflow, Integration, Foundation |
| description | text | |
| status | enum | Draft, Active, Approved |
| epicCount | number | Rolled up |
| totalEstimate | number | Sum of child Epic estimates (hours) |
| phaseCount | number | How many phases this L1 has Epics in |
| traceabilityHealth | enum | Good, Warning, Error |
| — Experience-specific — | | |
| interfaceType | enum | Web App, Mobile App, AI Assistant, MCP Server, Other |
| primaryUserGroup | string | |
| secondaryUserGroups | string[] | |
| category | enum | Internal Module, External Portal, Company-wide AI Assistant, Other |
| — Workflow-specific — | | |
| workflowType | enum | Process-Oriented, Data-Oriented, Agentic |
| inputs | text | |
| outputs | text | |
| triggerMechanism | text | |
| — Integration-specific — | | |
| integrationType | enum | Core System, External Data Consumer, Security/Compliance, File-Based Knowledge |
| direction | enum | Inbound, Outbound, Bidirectional |
| mechanism | enum | REST, GraphQL, Webhook, Batch File, Event Stream, Direct DB |
| — Foundation-specific — | | |
| foundationType | enum | Identity, RBAC, API Gateway, Observability, Logging, Messaging, AI Hosting, Vector DB, CI/CD, IaC, Other |
| buildVsConfigure | enum | Build, Configure |

---

### Epic (L2)
**Description:** Discrete business capability. Contract unit. Delivered within exactly one phase.
**Naming rule:** Verb + Noun (e.g., "Route Intake Requests", "Authenticate Clinical Users")

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | |
| name | string | verb + noun format |
| l1ComponentId | string | Required |
| description | text | 2–4 sentences |
| phaseId | string | Backlog, phase-1, phase-2, future, out-of-scope — exactly one |
| dependencies | string[] | Other Epic ids |
| linkedPainPoints | string[] | |
| linkedWishListItems | string[] | |
| estimate | number | Rolled up from child L3 stories — not directly editable |
| status | enum | Draft, Ready for Estimation, Estimated, Approved |
| userStoryCount | number | |
| — Validation warnings — | | |
| missingPhase | boolean | Warning if phase not assigned |
| missingPainPoint | boolean | Warning if no linked pain point |
| missingStories | boolean | Warning if no user stories |
| circularDependency | boolean | Error if circular dep detected |

---

### UserStory (L3)
**Description:** Validation requirement. The unit of estimation. Rendered as "As a {persona}, I want to {action}, so that {outcome}."

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | |
| epicId | string | Parent Epic |
| persona | string | "User", "System", or custom from UserGroup list |
| action | text | "I want to..." |
| outcome | text | "so that..." |
| priority | enum | Must, Should, Could, Won't |
| assumptions | text | |
| dependencies | string[] | Other story or Epic ids |
| estimate | number | Hours — set by Estimation Lead |
| complexity | enum | Simple, Standard, Complex, Very Complex |
| estimateStatus | enum | Unestimated, AI Suggested, Expert Set, Approved |
| aiSuggestedEstimate | number | From estimation engine |
| expertOverride | number | If Estimation Lead overrides |
| overrideRationale | text | Required when expert override differs from AI suggestion |
| acCount | number | |

---

### AcceptanceCriteria (L4)

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | |
| userStoryId | string | |
| statement | text | Must be binary and verifiable |
| testMethod | enum | Manual, Automated, UAT, Integration Test |
| qualityStatus | enum | Valid, Rejected (vague language detected) |

---

### Phase

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | backlog, phase-1, phase-2, future, out-of-scope |
| name | string | Backlog, Phase 1, Phase 2, Future Phase, Out of Scope |
| totalEstimate | number | Sum of assigned Epic estimates |
| totalHours | number | |
| epicCount | number | |
| budgetEnvelope | number | Top-down allocation |
| variance | number | budgetEnvelope - totalHours |

---

### Risk

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | |
| description | text | |
| category | enum | Delivery, Technical, Organizational / Change Management, Integration / Dependency |
| likelihood | enum | High, Medium, Low |
| impact | enum | High, Medium, Low |
| riskScore | enum | High, Medium, Low (calculated from likelihood × impact) |
| mitigation | text | |
| owner | enum | Nymbl, Client |
| status | enum | Open, Mitigated, Accepted, Closed |
| linkedItems | string[] | Epic or L1 ids |

---

### OpenQuestion

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | |
| question | text | |
| impactArea | enum | Scope, Estimate, Delivery, Commercial |
| owner | string | |
| status | enum | Open, Answered, Deferred, Closed |
| resolution | text | Populated when answered |
| linkedItems | string[] | Epic / Story / Assumption ids |
| blocksPhase1 | boolean | Warning if Phase 1 Epic depends on this unresolved |

---

### Assumption

| Field | Type | Possible values / notes |
|---|---|---|
| id | string | |
| statement | text | |
| impactArea | enum | Scope, Estimate, Delivery, Commercial |
| confidence | enum | High, Medium, Low |
| status | enum | Active, Validated, Invalidated |
| trigger | text | What would invalidate this assumption |
| linkedItems | string[] | |

---

## 2. Navigation & IA

### Level 1 — Portfolio shell (always visible when no engagement selected)
Left nav items:
- Engagements (home)
- Portfolio Reporting
- Admin

### Level 2 — Engagement workspace shell (active when user opens an engagement)
**Top bar shows:** Client name • Solution name • Stage pill (current lifecycle stage) • Global search • "Generate" button • "Export" button

**Left rail sections (in order):**
1. Intake
2. Triage
3. Solution Definition
4. Artifacts
5. Domain Model
6. Estimation
7. Plan
8. Risks, Questions & Assumptions
9. Review
10. Outputs

**Right rail (collapsible, appears in workspace):**
- Open Questions (count badge)
- Assumptions (count badge)
- AI Suggestions
- Related documents

### Navigation state model
```
view = "dashboard"                         → Dashboard (list of all engagements)
view = "engagement", section = "intake"    → Engagement workspace > Intake
view = "engagement", section = "triage"   → Engagement workspace > Triage
view = "engagement", section = "solution" → Engagement workspace > Solution Definition
... etc.
```

No router library. Use plain React state: `{ view, engagementId, section, subsection }`.

---

## 3. Sample Dataset

### Engagements

**Engagement A — Acme Health Systems**
- clientName: "Acme Health Systems"
- solutionName: "Clinical Intake Automation Platform"
- status: "Domain Modeling"
- commercialLead: "Maya Chen"
- solutionLead: "Alex Rivera"
- deliveryManager: "Priya Shah"
- estimationLead: "Jordan Lee"
- serviceOffering: "App Dev"
- triageRoute: "New Engagement"

**Engagement B — Northwind Logistics**
- clientName: "Northwind Logistics"
- solutionName: "Freight Visibility Platform"
- status: "Estimation"
- commercialLead: "Tom Reyes"
- solutionLead: "Celine Park"
- deliveryManager: "Marcos Villa"
- estimationLead: "Sandra Wu"

**Engagement C — Meridian Financial**
- clientName: "Meridian Financial Services"
- solutionName: "Advisor Portal Modernization"
- status: "Internal Review"
- commercialLead: "Anna Mitchell"
- solutionLead: "James Okafor"
- deliveryManager: "Li Wei"
- estimationLead: "James Okafor"

### Pain Points (Acme Health Systems)
1. title: "Manual intake routing causes delays", category: "Operational", severity: "High"
2. title: "Duplicate patient data across systems", category: "Technical", severity: "High"
3. title: "Compliance audit trail is incomplete", category: "Compliance", severity: "Medium"
4. title: "Radiologists lack priority queue visibility", category: "Operational", severity: "Medium"

### User Groups (Acme Health Systems)
1. name: "Radiologist", roleDescription: "Reviews and interprets clinical studies", missionStatement: "Complete urgent studies with full context and no manual re-routing", primaryExperiences: ["Radiologist Worklist"]
2. name: "Intake Coordinator", roleDescription: "Processes incoming clinical referrals", missionStatement: "Process referrals accurately in under 5 minutes without switching between systems", primaryExperiences: ["Clinical Intake Portal"]
3. name: "Clinical Administrator", roleDescription: "Manages department routing rules and system configuration", missionStatement: "Maintain routing accuracy without requiring IT intervention", primaryExperiences: ["Admin Console"]

### L1 Components (Acme Health Systems)
1. name: "Clinical Intake Portal", type: "Experience", interfaceType: "Web App", epicCount: 4, totalEstimate: 280
2. name: "Radiologist Worklist", type: "Experience", interfaceType: "Web App", epicCount: 3, totalEstimate: 190
3. name: "Intake Routing Workflow", type: "Workflow", workflowType: "Process-Oriented", epicCount: 3, totalEstimate: 160
4. name: "EHR Integration", type: "Integration", direction: "Bidirectional", mechanism: "REST", epicCount: 2, totalEstimate: 240
5. name: "Identity and Access Foundation", type: "Foundation", foundationType: "Identity", buildVsConfigure: "Configure", epicCount: 2, totalEstimate: 80

### Epics (under "Clinical Intake Portal" L1)
1. name: "Submit Clinical Referrals", phase: "phase-1", status: "Estimated", estimate: 72, userStoryCount: 5
2. name: "Validate Referral Completeness", phase: "phase-1", status: "Estimated", estimate: 48, userStoryCount: 4
3. name: "Track Referral Status", phase: "phase-1", status: "Ready for Estimation", estimate: null, userStoryCount: 3
4. name: "Generate Intake Summary Report", phase: "phase-2", status: "Draft", estimate: null, userStoryCount: 2

### User Stories (under "Submit Clinical Referrals" Epic)
1. persona: "User", action: "upload referral documents from my desktop", outcome: "intake coordinators have the correct files without emailing separately", priority: "Must", complexity: "Standard", estimate: 16
2. persona: "User", action: "pre-fill patient demographics from the EHR lookup", outcome: "I avoid re-entering data that already exists in the system", priority: "Must", complexity: "Complex", estimate: 24
3. persona: "System", action: "validate that mandatory fields are complete before submission", outcome: "incomplete referrals are never sent downstream for routing", priority: "Must", complexity: "Simple", estimate: 8
4. persona: "User", action: "save a referral as a draft and return to complete it", outcome: "I can pause mid-entry without losing work", priority: "Should", complexity: "Simple", estimate: 8
5. persona: "User", action: "submit a referral on behalf of an external referring provider", outcome: "the intake process works for provider-initiated referrals", priority: "Could", complexity: "Standard", estimate: 16

### Risks (Acme Health Systems)
1. description: "EHR vendor API access may require 6-week procurement approval", category: "Integration / Dependency", likelihood: "High", impact: "High", owner: "Client", status: "Open"
2. description: "Clinical workflow change management may slow adoption", category: "Organizational / Change Management", likelihood: "Medium", impact: "High", owner: "Nymbl", status: "Open"
3. description: "HIPAA audit trail requirements may require custom audit log component", category: "Technical", likelihood: "Medium", impact: "Medium", owner: "Nymbl", status: "Mitigated"

### Open Questions (Acme Health Systems)
1. question: "Will referring providers access the portal directly or only internal coordinators?", impactArea: "Scope", owner: "Maya Chen", status: "Open", blocksPhase1: true
2. question: "Is the EHR integration read-only or bidirectional in Phase 1?", impactArea: "Estimate", owner: "Alex Rivera", status: "Open", blocksPhase1: true
3. question: "What is the target SLA for routing decisions?", impactArea: "Delivery", owner: "Priya Shah", status: "Answered", resolution: "Under 30 seconds for automated routing, 4 hours for manual review"

---

## 4. Screen Inventory

---

### Screen 1: Dashboard (Engagement List)

**Route state:** `{ view: "dashboard" }`
**Layout:** Full width (no left workspace rail)
**Purpose:** Entry point — all engagements, portfolio snapshot

**Header bar:**
- Left: "Nymbl Scope" wordmark
- Center: Global search input ("Search engagements, clients, solutions...")
- Right: "Create Engagement" (primary button), Avatar

**Page content:**

**Metrics row (4 DashboardCard components):**
- Active Engagements: 12
- In Review: 3
- Signed this month: 2
- Avg. time to scope-ready: 8 days

**Needs Attention panel (NeedsAttention component):**
- "Acme Health Systems — 2 open questions blocking Phase 1 estimation"
- "Northwind Logistics — Estimation Lead not assigned"

**Active Engagements table (PipelineTable):**
Columns: Client | Solution | Stage (StatusPill) | Commercial Lead | Solution Lead | Est. Hours | Last Updated | Actions
Row actions: Open, Duplicate, Archive

**Filters above table:** All / Mine / Needs Action / By Stage dropdown

**Empty state:** "No engagements yet. Create your first engagement to start scoping."

**NOS components:** `DashboardCard`, `NeedsAttention`, `PipelineTable`, `TableHeader`, `TableCell`, `StatusPill`, `Button`, `PageHeader`

---

### Screen 2: Engagement Workspace Shell

**Route state:** `{ view: "engagement", engagementId: "...", section: "..." }`
**Layout:** Fixed left rail (240px) + Top bar (56px) + Main content area + Collapsible right rail (320px)
**Purpose:** Persistent frame for all workspace sections

**Top bar (left to right):**
- "← Engagements" back link
- Client name / Solution name breadcrumb
- Lifecycle stage progress bar (all stages as dots, current highlighted)
- "Generate" button (opens AI generation modal)
- "Export" button (opens output selection)
- Avatar

**Left rail:**
- Section heading: "INTAKE & TRIAGE" → items: Intake, Triage
- Section heading: "SOLUTION" → items: Solution Definition, Artifacts
- Section heading: "DOMAIN MODEL" → items: Domain Model
- Section heading: "BUILD PLAN" → items: Estimation, Plan
- Section heading: "GOVERNANCE" → items: Risks / Questions / Assumptions, Review
- Section heading: "OUTPUTS" → items: Outputs
- Active item: highlighted with brand accent
- Each item shows a badge if it has open issues

**Right rail (collapsible):**
- "Open Questions" section (count badge, list of top 3 with "View all" link)
- "Assumptions" section (count badge)
- "AI Suggestions" section (contextual per section)
- "Documents" section (context docs linked to current section)

**NOS components:** `SideNavigation`, `SideNavItem`, `SideNavSection`, `PageHeader`

---

### Screen 3: Intake

**Route state:** section = "intake"
**Purpose:** Capture raw discovery inputs — structured form + document uploads

**Sections:**

**1. Intake Form**
Fields (all using Field + Input):
- Client Name
- Primary Contact
- Business Area / Department
- Opportunity Origin (enum: Inbound request, Outbound prospecting, Referral, Expansion, Other)
- Perceived Urgency (enum: High — need scope within 2 weeks, Medium, Low)
- Anticipated Budget Range (text)
- Anticipated Timeline (text)
- Primary Stakeholders (text, multi-line)
- Current Systems Involved (text, multi-line)

**2. Document Ingestion**
- Drag-drop upload area ("Drop files here or click to upload — PDF, DOCX, PPTX, XLSX, images")
- Uploaded files list with: filename, type icon, size, tag input, "Remove" action
- Tags: "Discovery call", "Existing requirements", "Architecture diagram", "SOW", "Other"

**3. Transcript Ingestion**
- Paste area with: "Paste meeting transcript here"
- Fields: Date, Attendees (comma-separated), Topic
- "Add transcript" to add multiple

**4. AI Discovery Summary**
- State A (pending): Gray card — "Generate Discovery Summary from uploaded documents and transcripts" — Generate button
- State B (generated): Light-tinted card with "AI Draft" badge showing summary text covering: Business Context, Pain Points Heard, Systems Mentioned, Stakeholders Identified, Open Questions. Action buttons: "Review", "Edit", "Approve"
- State C (approved): Green checkmark, "Discovery Summary Approved" — readonly

**AssistBar actions:**
- "Generate Discovery Summary"
- "Extract candidate pain points"
- "Identify open questions"

**Validation warnings:**
- "Discovery Summary must be approved before advancing to Triage" (info)

**NOS components:** `DocumentSection`, `SectionHeader`, `Field`, `FieldRow`, `Input`, `Textarea`, `Select`, `AssistBar`, `Callout`, `Button`, `AIActionBar`

---

### Screen 4: Triage

**Route state:** section = "triage"
**Purpose:** Route the engagement to the right path

**Sections:**

**1. Triage Decision (ChoiceGroup — 4 options):**
- New Engagement — "Net-new scope, no existing relationship constraints"
- Change Request — "Modification to an existing in-flight engagement"
- Expansion — "Additional scope on a delivered or active client"
- Decline / Pass — "Not a fit — document reason and close"

**2. Triage Notes**
- Textarea: "Rationale for this routing decision"

**3. Lookup Placeholders (shown if Change Request or Expansion selected)**
- "Link to existing engagement" (search input, placeholder)
- "Prior Domain Model reference" (placeholder card with "View" link)

**4. Routing Approval (shown if New Engagement or Expansion)**
- Technology Partner select
- Approval status: Pending / Approved
- Approver comments (textarea)

**5. Next Step guidance (conditional on decision):**
- New Engagement → "Advance to Solution Definition"
- Change Request → "Advance to Solution Definition (linked to existing engagement)"
- Expansion → "Advance to Solution Definition (reusing prior Domain Model)"
- Decline → "Close engagement" (destructive button, confirmation required)

**NOS components:** `ChoiceGroup`, `Checkbox`, `Field`, `FieldRow`, `Textarea`, `Callout`, `Button`, `DocumentSection`, `SectionHeader`

---

### Screen 5: Solution Definition

**Route state:** section = "solution"
**Purpose:** Define the narrative and strategic framing

**Subsections (PageTabs across top: Introduction | Pain Points | Wish List | User Groups | Technology Needs):**

**Tab: Introduction**
- Client Profile (AI-drafted text area, shows "AI Draft" badge until approved)
- Organizational Context (text area)
- Engagement Origin (text area)
- Problem Statement (text area, shows character count, "Draft / Reviewed / Approved" status pill)
- Opportunity Statement (text area)
- Each field has: Edit / Review / Approve inline actions

**Tab: Pain Points**
- "Add Pain Point" button (opens inline form or drawer)
- Table of pain points: Title | Category (pill) | Severity (pill) | Affected Groups | Epic Links | Actions
- Empty state: "No pain points yet. Generate from intake context or add manually."
- Detail drawer (click row): shows all fields, linked epics, linked wish list items
- Warning badge on rows with no linked Epics

**Tab: Wish List**
- Table: Title | Priority (MoSCoW pill) | Linked Pain Points | Actions
- Inline add form (click "+ Add Item")
- Detail drawer on row click

**Tab: User Groups**
- Card grid (3 columns): each card shows name, mission statement excerpt, primary experiences count
- "Add User Group" button
- Validation warning on cards missing mission statement: "Mission statement required to advance"
- Detail drawer: all fields, edit inline

**Tab: Technology Needs**
- 7 capability categories listed vertically
- Each category: heading + bullet list of needs + "Add need" button + AI suggest button
- No specific technologies — capability language only

**AssistBar (right side, contextual to tab):**
- "Generate pain points from intake"
- "Draft problem statement"
- "Suggest user groups"
- "Suggest technology needs"
- "Identify missing context"

**NOS components:** `PageTabs`, `DocumentSection`, `SectionHeader`, `DescriptionList`, `DocumentOutcomeList`, `AssistBar`, `Field`, `FieldRow`, `Textarea`, `Input`, `Select`, `StatusPill`, `Button`, `Callout`

---

### Screen 6: Domain Model

**Route state:** section = "domain-model"
**Purpose:** The core workspace. L1 → L2 → L3 → AC hierarchy.

**View mode toggle (top right):** Board | List

---

**Board View:**

4 columns (one per L1 type): Experience | Workflow | Integration | Foundation

Each column has a color-coded header:
- Experience: brand purple
- Workflow: blue
- Integration: teal
- Foundation: amber

Each L1 component card shows:
- Component name (large)
- Type badge
- Description (2 lines, truncated)
- Epic count: "4 Epics"
- Total estimate: "280h"
- Phase coverage: dots for Backlog, P1, P2, Future
- Traceability health: green check / amber warning / red error
- Status pill

Click L1 card → opens Epic list panel (right side, pushes content) or navigate to L2 detail.

"+ Add Component" card at bottom of each column.

---

**L2 Epic Panel (opened from L1 card):**

Header: L1 name breadcrumb → Epic list

Each Epic row shows:
- Name (verb + noun)
- Phase pill (color-coded: P1 = blue, P2 = teal, Backlog = gray)
- User story count
- Estimate (if set) or "Unestimated"
- Status pill
- Traceability warnings (icons: missing pain point link, missing phase, no stories)

"Generate Epics for this L1" button (AI action)
"+ Add Epic" button

Click Epic → opens L3 User Story panel.

---

**L3 User Story Panel (opened from Epic):**

Header: L1 → Epic breadcrumb

Each story displayed as:
"As a **{persona}**, I want to **{action}**, so that **{outcome}**."

Story card shows:
- Persona, Action, Outcome rendered as above
- Priority pill
- Complexity pill
- Estimate (hours or "Unestimated")
- AC count
- Dependencies indicator

"Generate User Stories for this Epic" button
"+ Add Story" button

Click story → opens AC detail drawer.

---

**L4 Acceptance Criteria Drawer:**

Opened from story click. Shows:
- Full story text (read-only)
- AC list as checklist rows: Statement | Test Method | Quality Status
- "Add AC" button
- "Generate AC from story" button (AI)
- Rejected AC examples shown in red: "Should be user-friendly" ← "Too vague — must be verifiable"

---

**List View (alternative to Board):**

Hierarchical table:
- Phase column | L1 column | Epic | Story count | Estimate | Status
- Expandable rows: click Phase → shows L1s; click L1 → shows Epics; click Epic → shows stories
- Inline phase assignment dropdown on each Epic row
- Bulk select (checkboxes) → bulk actions: Assign Phase, Change Status, Move to L1

---

**Bulk Operations bar (appears when rows selected):**
- "Assign Phase" dropdown
- "Change Status" dropdown
- "Move to L1" dropdown
- "Generate Stories" button
- Count: "3 Epics selected"

**AssistBar (right rail contextual):**
- "Generate Epics for selected L1"
- "Generate User Stories for selected Epic"
- "Generate Acceptance Criteria"
- "Find untraced Epics"
- "Find scope gaps"
- "Suggest Business Data Model entities"

**Validation warnings displayed as Callout components:**
- "3 Epics have no phase assignment" (warning)
- "2 Epics have no linked pain points" (warning)
- "1 Epic has no user stories" (error)

**NOS components:** `PageTabs`, `SectionHeader`, `StatusPill`, `Button`, `Callout`, `AssistBar`, `AIActionBar`, `KanbanBoard` (if available), else custom CSS grid

---

### Screen 7: Estimation

**Route state:** section = "estimation"
**Purpose:** Set L3 estimates, roll up to L2/L1/Phase/Total, reconcile with top-down envelope

**View tabs:** Overview | L3 Estimation Table | Roll-Up View | Top-Down Reconciliation

---

**Tab: Overview**
4 summary cards (DashboardCard):
- Total Estimate: "950h"
- Phase 1 Estimate: "580h"
- Phase 2 Estimate: "370h"
- Unestimated Stories: "12"

2 more cards:
- Top-Down Envelope: "$320,000"
- Bottoms-Up Estimate: "$285,000"
- Variance: "-11%" (green — under)

1 status card:
- Estimation Confidence: "Medium"
- Epics Blocked from Estimation: "2"

---

**Tab: L3 Estimation Table**
Dense table (all user stories):
Columns: Story (truncated) | Parent Epic | L1 | Phase | Complexity | Est. Hours | Expert Override | Final | Status

- Story cell: truncated "As a User, I want to..." with expand icon
- Complexity: dropdown (inline editable)
- Est. Hours: auto-calculated (grayed out)
- Expert Override: editable number input
- Final: shows override if set, otherwise auto
- Status pill: Unestimated / AI Suggested / Expert Set / Approved

Click story row → opens Estimate Detail Drawer

**Estimate Detail Drawer:**
- Full story text
- Acceptance criteria list
- Complexity profile (selected value with explanation)
- Calculation breakdown: base value + L1 multiplier + AC count bonus + dependency bonus = total
- AI-suggested complexity: "Complex — based on EHR lookup requirement"
- Expert override field + rationale (required if override differs > 20%)
- Related assumptions
- Related open questions

---

**Tab: Roll-Up View**
Hierarchical tree:
```
Phase 1 (580h / $290,000)
  └ Clinical Intake Portal (280h)
      └ Submit Clinical Referrals (72h)
          └ Upload referral documents (16h) ✓
          └ Pre-fill from EHR (24h) ✓
          └ Validate mandatory fields (8h) ✓
          └ Save as draft (8h) ✓
          └ Submit on behalf (16h) ✓
      └ Validate Referral Completeness (48h)
      └ Track Referral Status (Unestimated) ⚠
  └ Intake Routing Workflow (160h) ...
Phase 2 (370h) ...
```

Each row: name | hours | variance vs. envelope | confidence | status icon

---

**Tab: Top-Down Reconciliation**
Split view:
- Left: Top-Down envelope by phase (editable)
- Right: Bottoms-Up actual by phase (read-only)
- Delta shown per phase with color coding (green = under, amber = ≤10% over, red = >10% over)

Decision options (when variance exceeds threshold):
- ChoiceGroup: Increase envelope | Reduce scope | Defer Epics | Accept lower margin
- Rationale textarea (required)
- "Log Decision" button

**NOS components:** `DashboardCard`, `DocumentSection`, `SectionHeader`, `PageTabs`, `StatusPill`, `Button`, `Callout`, `ChoiceGroup`, `Field`, `Input`

---

### Screen 8: Plan

**Route state:** section = "plan"
**View tabs:** Phasing | Timeline | Team Structure | Budget

---

**Tab: Phasing (Kanban board)**
5 columns: Backlog | Phase 1 | Phase 2 | Future Phase | Out of Scope

Each phase column header shows:
- Phase name
- Total estimate: "580h"
- Epic count: "8 Epics"
- L1 distribution (mini bar or legend)
- Budget envelope: "$290,000"
- Variance indicator

Each Epic card shows:
- Epic name (verb + noun)
- L1 parent chip (color-coded by type)
- Estimate units: "72h"
- Dependencies indicator (icon if has deps, warning if order conflicts)
- Linked milestone
- Status pill

Drag-and-drop affordance: drag cards between columns.
"What-if Mode" toggle (top right) — preview mode before committing.

Warning when dependency conflict: "This Epic depends on 'Authenticate Clinical Users' which is in Phase 2."

---

**Tab: Timeline (Gantt)**
Rows grouped by L1 Component.
Within each L1: one row per Epic.
Horizontal bars spanning the phase duration.

Standard milestones as vertical lines with labels:
- Kickoff
- Discovery Complete
- First Demo
- User Login
- Technical Production
- Early Production
- Full Production

Milestone labels above the timeline. Phase boundaries as column backgrounds.
View controls: Zoom in / Zoom out / By Phase / By L1

---

**Tab: Team Structure**
Two inner tabs: Client-Side | Nymbl Delivery

**Client-Side table:**
Columns: Role | Name | Allocation (% by phase) | Responsibility | Required Availability
Rows: Executive Sponsor, Product Owner / Business SME, Technical SME, IT / Security Liaison, End-user Representatives

**Nymbl Delivery table:**
Columns: Role | Name (editable, "TBD" allowed) | Allocation by Phase | Billable | Rate
Rows: Commercial Lead, Solution Lead, Delivery Manager, Estimation Lead, Engineers (Frontend / Backend / Data / AI / DevOps), QA, Product Designer, Enablement Specialist

---

**Tab: Budget**
Split display:
- Top-down envelope: by Phase (editable) and by L1 Component (editable)
- Bottoms-up estimate: by Phase and L1 (read-only, from Estimation)
- Variance shown per cell with color coding
- Margin model: [INTERNAL ONLY badge] shows cost vs. price
- Sensitivity panel: "What if Phase 2 scope reduces by 20%?" → recalculates

**NOS components:** `KanbanBoard` (if available), `PageTabs`, `SectionHeader`, `StatusPill`, `DashboardCard`, `Button`, `Callout`, `Field`, `Input`

---

### Screen 9: Risks, Questions & Assumptions

**Route state:** section = "risks"
**View tabs:** Risks | Open Questions | Assumptions

---

**Tab: Risks**
Table columns: Description | Category | Likelihood | Impact | Score | Owner | Status | Actions

Score shown as calculated pill: High / Medium / Low
Status pill: Open / Mitigated / Accepted / Closed
Row click → detail drawer with full fields + linked Epics/L1s + Mitigation edit

"+ Add Risk" button
AI button: "Surface common risks for this engagement type"

---

**Tab: Open Questions**
Table columns: Question | Impact Area | Owner | Status | Linked Items | Actions

Warning callout at top if any questions have `blocksPhase1 = true` and status = "Open":
"2 open questions are blocking Phase 1 Estimation. Resolve or explicitly defer before advancing."

Status pill: Open / Answered / Deferred / Closed
Row click → drawer showing full question, resolution field (if answered), linked items

"+ Add Question" button

---

**Tab: Assumptions**
Table columns: Statement | Impact Area | Confidence | Status | Trigger | Actions

Status pill: Active / Validated / Invalidated
Row click → drawer with full fields + linked estimate items

"+ Add Assumption" button

**NOS components:** `PipelineTable`, `TableHeader`, `TableCell`, `StatusPill`, `PageTabs`, `Callout`, `Button`, `SectionHeader`

---

### Screen 10: Review (Internal)

**Route state:** section = "review"
**Purpose:** Technology Partner readiness checklist + approval workflow

**Readiness Checklist (structured, not free-form):**

Section: Core Completeness
- [ ] Introduction approved
- [ ] Problem Statement approved  
- [ ] Pain Points complete (>= 3, all linked to Epics)
- [ ] Wish List complete
- [ ] User Groups complete (all have mission statements)
- [ ] Technology Needs complete

Section: Domain Model
- [ ] All Phase 1 Epics have ≥ 1 User Story
- [ ] All Phase 1 User Stories have ≥ 1 AC
- [ ] All Epics linked to at least one Pain Point
- [ ] No unresolved circular dependencies

Section: Estimation
- [ ] All Phase 1 User Stories estimated
- [ ] L2 roll-ups validated by Estimation Lead
- [ ] Top-down vs. bottoms-up reconciliation logged

Section: Governance
- [ ] Budget variance reviewed
- [ ] All risks acknowledged (Open or Mitigated — none ignored)
- [ ] Open Questions resolved or explicitly deferred with rationale

Each item: checkbox (disabled — auto-checked from system data) + status indicator (green / amber / red)

Overall readiness score: e.g., "14/17 checks passing"

**Approval section:**
- Reviewer (Technology Partner): name field
- Status: Pending / Approved / Changes Requested
- Reviewer comments: textarea
- "Approve" button (primary) | "Request Changes" button (secondary)

Approval state shows timestamp and name when set.

**NOS components:** `DocumentSection`, `SectionHeader`, `Checkbox`, `StatusPill`, `Button`, `Callout`, `Field`, `Textarea`

---

### Screen 11: Outputs

**Route state:** section = "outputs"
**Purpose:** Generate and export all deliverable formats

**Output cards (one per artifact type):**

For each: title, audience, format badge, last generated, readiness status, buttons: Generate | Preview | Export | Version History

1. **HTML Scope Document** — Audience: Client (shareable link) — Format: HTML — Primary deliverable
2. **PDF Scope Document** — Audience: Client (formal distribution) — Format: PDF
3. **Markdown Scope Document** — Audience: Technical team — Format: .md
4. **SOW Deliverables Package** — Audience: Commercial team → SOW — Format: Structured list
5. **Build Phase Handoff Bundle** — Audience: Build team — Format: .zip (system_design.md + domain_model.json)
6. **Estimation Report** — Audience: Internal (Estimation Lead review) — Format: PDF

Readiness validation on each card:
- Red badge: "Requires: Problem Statement approved, All Phase 1 stories estimated"
- Green badge: "Ready to generate"

**Preview panel (HTML Scope Document):**
When "Preview" clicked, opens a full-width side panel showing a client-facing scope document with:
- Persistent left nav: Solution Overview, User Groups, Solution Architecture, Domain Model, Technology, Phasing, Timeline, Team, Budget, Risks, Questions, Assumptions, Glossary, Appendix
- Executive summary home with: solution name, one-liner, Phase 1 headline, scope summary, timeline summary, budget envelope, key risks, open questions, nav tiles

**NOS components:** `DashboardCard`, `DocumentSection`, `SectionHeader`, `Button`, `StatusPill`, `Callout`

---

## 5. States & Validation

### Engagement lifecycle status colors
| Status | Color |
|---|---|
| Created | neutral-300 |
| Intake | neutral-500 |
| Triage | warning-500 |
| Solution Definition | brand-400 |
| Domain Modeling | brand-600 |
| Estimation | brand-700 |
| Phasing & Planning | brand-800 |
| Internal Review | info-500 |
| Client Review | info-600 |
| SOW Deliverables | success-400 |
| Signed | success-600 |
| Build Handoff | success-700 |
| Closed | neutral-700 |

### Critical validation warnings
| Warning | Trigger | Severity |
|---|---|---|
| "Discovery Summary must be approved before advancing to Triage" | Intake: summary not approved | info |
| "Mission statement required for all User Groups before advancing" | Solution Definition: any UserGroup missing missionStatement | error |
| "N Epics have no phase assignment" | Domain Model: Epic.phaseId is null | warning |
| "N Epics have no linked pain points" | Domain Model: Epic.linkedPainPoints is empty | warning |
| "Open questions are blocking Phase 1 Estimation" | Risks: OpenQuestion.blocksPhase1 = true AND status = Open | warning |
| "Acceptance Criteria contains vague language" | AC: statement contains "user-friendly", "easy", "fast" without quantification | error |
| "Epic depends on item in a later phase" | Domain Model: Epic dependency phase order conflict | error |
| "All Phase 1 stories must be estimated before Internal Review" | Review: unestimated Phase 1 stories exist | error |

---

## 6. Interaction Patterns

| Pattern | Where it appears | Behavior |
|---|---|---|
| Detail drawer | Pain Points, Epics, User Stories, Risks, Questions, Assumptions | Click row → 480px right drawer slides in with full entity detail and edit fields. Close button or click outside dismisses. |
| Kanban drag-and-drop | Plan > Phasing | Drag Epic cards between phase columns. Card snaps to new column on drop. Dependency conflict shown as red border on drop. |
| AI draft review | Intake Summary, Problem Statement, Opportunity Statement, any AI-generated field | Shows AI badge + content in gray card. "Review" → highlights editable text. "Approve" → removes AI badge, stamps timestamp + approver name. |
| Inline estimation | Estimation > L3 Table | Click complexity or estimate cell to edit inline. Tab moves to next cell. |
| Expandable hierarchy | Estimation > Roll-Up View, Domain Model > List View | Click row to expand children. Expand all / Collapse all buttons. |
| Bulk operations | Domain Model > List View, any table with multi-select | Checkboxes appear on hover. Select rows → sticky bulk action bar appears at bottom of screen with available actions. |
| View mode toggle | Domain Model (Board/List), Estimation (Overview/Table/Roll-Up/Reconciliation) | Segmented control top-right. State persists per section during session. |
| "What-if" mode | Plan > Phasing | Toggle at top of screen. In What-if mode, changes are previewed with blue highlight but not committed. "Commit" button saves. "Discard" button resets. |
| Status pill interaction | Any StatusPill | Click opens dropdown of allowed next statuses (constrained by lifecycle rules). |
| Phase badge click | Domain Model | Click phase badge on Epic card to open phase assignment dropdown inline. |
| Right rail toggle | All workspace screens | Chevron button at right edge of screen. When collapsed, right rail icons remain visible. |
| Lifecycle progress bar | Top bar | Click any stage dot to see stage requirements. Cannot click to jump to stages not yet reached. |

---

## 7. NOS Component Map

| UI pattern | NOS component | Where used |
|---|---|---|
| Data table with header | `PipelineTable` + `TableHeader` + `TableCell` | Dashboard, all list views, Estimation Table, Risks/Questions/Assumptions |
| Document section with heading | `DocumentSection` + `SectionHeader` | Solution Definition, Outputs, Review, all text-heavy sections |
| Form field + label | `Field` + `FieldRow` + `Input` | Intake, Triage, Solution Definition, all forms |
| Multi-line text | `Field` + `FieldRow` + `Textarea` | Problem Statement, Opportunity Statement, notes |
| Dropdown select | `Field` + `FieldRow` + `Select` | Category, status, priority, all enum fields |
| Radio/multi-choice | `ChoiceGroup` | Triage decision, Reconciliation options |
| Checkbox | `Checkbox` | Review checklist, AC quality check, bulk select |
| AI suggestion bar | `AssistBar` | Solution Definition, Domain Model |
| AI action bar | `AIActionBar` | Intake (Discovery Summary), Domain Model (generate actions) |
| Status chip / badge | `StatusPill` | Everywhere — engagement status, Epic status, risk status |
| Primary / secondary button | `Button` | Everywhere |
| Metric summary card | `DashboardCard` | Dashboard, Estimation Overview |
| Attention item / callout | `NeedsAttention` + `Callout` | Dashboard right rail, validation warnings throughout |
| Page-level tab switcher | `PageTabs` | Solution Definition, Estimation, Plan, Risks, Domain Model |
| Section heading | `PageHeader` + `SectionHeader` | Top of every workspace section |
| Left navigation | `SideNavigation` + `SideNavItem` + `SideNavSection` | App shell, workspace left rail |
| Outcome / deliverable list | `DocumentOutcomeList` | Opportunity Statement, Solution wish list |
| Description list (key-value) | `DescriptionList` | Client Profile, entity detail drawers |

---

## 8. Build Phases

### Phase 1 — App shell + dashboard (validate IA first)
- [ ] Portfolio shell: top bar + left nav (Engagements, Portfolio Reporting, Admin)
- [ ] Dashboard screen with sample data (3 engagements, metrics row, needs attention, table)
- [ ] "Create Engagement" flow (simple form: client name, solution name, leads)
- [ ] Engagement workspace shell (left rail 10 sections, top bar, right rail collapsed)
- [ ] All sections stubbed with placeholder content ("Section coming soon")
- [ ] Navigation between sections working

### Phase 2 — Intake → Solution Definition (forms + AI affordances)
- [ ] Intake screen: form + document upload area + AI Discovery Summary states
- [ ] Triage screen: ChoiceGroup + notes + approval
- [ ] Solution Definition: Introduction + Pain Points tabs (full field set, drawer)
- [ ] Solution Definition: Wish List + User Groups + Technology Needs tabs
- [ ] AssistBar wired to each tab with contextual AI actions

### Phase 3 — Domain Model (the core)
- [ ] Domain Model: Board view with 4 L1 type columns
- [ ] L1 card with all fields and click behavior
- [ ] Epic panel: list of epics per L1 with phase pills, warnings
- [ ] User Story panel: stories rendered as "As a... I want... so that..."
- [ ] AC drawer: checklist + quality check
- [ ] List view with expandable hierarchy
- [ ] Bulk operations bar

### Phase 4 — Estimation + Plan
- [ ] Estimation Overview tab (summary cards)
- [ ] L3 Estimation table with inline editing
- [ ] Roll-Up view with hierarchical tree
- [ ] Top-Down Reconciliation tab
- [ ] Plan: Phasing board (kanban) with Epic cards
- [ ] Plan: Timeline (simplified Gantt — CSS/SVG, no library)
- [ ] Plan: Team Structure tables
- [ ] Plan: Budget split view

### Phase 5 — Governance + Outputs
- [ ] Risks/Questions/Assumptions: three tabs, tables, drawers
- [ ] Review: readiness checklist + approval workflow
- [ ] Outputs: output cards with readiness validation
- [ ] HTML Scope Document preview panel

---

*End of NOS2_Scope_SPEC.md*
*Source: PRD v3.0 (May 2026) — Nymbl Scope Platform*
