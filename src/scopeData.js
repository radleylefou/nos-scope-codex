export const engagement = {
  client: 'Radiology Imaging Associates',
  solution: 'Imaging Operations Scope',
  code: 'NOS-SCOPE-014',
  status: 'in-progress',
  owner: 'Martyn Mason',
  stage: 'Domain Modeling',
  lastUpdated: 'May 14, 2026',
  budgetEnvelope: 420000,
  phaseOneBudget: 265000,
  phaseOneHours: 1432,
};

export const appShellNavigation = [
  { id: 'engagements', label: 'Engagements' },
  { id: 'portfolio-reporting', label: 'Portfolio Reporting' },
  { id: 'admin', label: 'Admin' },
];

export const dashboardFilters = [
  { id: 'all', label: 'All' },
  { id: 'mine', label: 'Mine' },
  { id: 'needs-action', label: 'Needs Action' },
  { id: 'by-stage', label: 'By Stage' },
];

export const workspaceNavigationGroups = [
  {
    title: 'Intake & Triage',
    items: [
      { id: 'intake', label: 'Intake', badge: 'Ready' },
      { id: 'triage', label: 'Triage', badge: 'Approved' },
    ],
  },
  {
    title: 'Solution',
    items: [
      { id: 'solution', label: 'Solution Definition', badge: 'Active' },
      { id: 'artifacts', label: 'Artifacts', badge: 'Stub' },
    ],
  },
  {
    title: 'Domain Model',
    items: [
      { id: 'domain-model', label: 'Domain Model', badge: 'Core' },
    ],
  },
  {
    title: 'Build Plan',
    items: [
      { id: 'estimation', label: 'Estimation', badge: 'Blocked' },
      { id: 'plan', label: 'Plan', badge: 'Draft' },
    ],
  },
  {
    title: 'Governance',
    items: [
      { id: 'risks', label: 'Risks / Questions / Assumptions', badge: '2' },
      { id: 'review', label: 'Review', badge: '3' },
    ],
  },
  {
    title: 'Outputs',
    items: [
      { id: 'outputs', label: 'Outputs', badge: 'Stub' },
    ],
  },
];

export const workspaceSections = workspaceNavigationGroups.flatMap((group) => group.items);

export const portfolioMetrics = [
  { label: 'Active Engagements', value: '12', detail: 'Across scoping lifecycle' },
  { label: 'In Review', value: '3', detail: 'Technology Partner queue' },
  { label: 'Signed This Month', value: '2', detail: 'Ready for Build handoff' },
  { label: 'Avg. Scope Ready', value: '8d', detail: 'Target median is 7 days' },
];

export const engagementDirectory = [
  {
    id: 'acme-health',
    client: 'Acme Health Systems',
    solution: 'Clinical Intake Automation Platform',
    stage: 'Domain Modeling',
    status: 'In Progress',
    statusVariant: 'in-progress',
    commercialLead: 'Maya Chen',
    solutionLead: 'Alex Rivera',
    deliveryManager: 'Priya Shah',
    estimationLead: 'Jordan Lee',
    serviceOffering: 'App Dev',
    triageRoute: 'New Engagement',
    hours: 950,
    budgetEnvelope: 320000,
    lastUpdated: 'Today',
    openQuestions: 2,
    readiness: '68%',
    attention: '2 open questions blocking Phase 1 estimation',
  },
  {
    id: 'northwind-logistics',
    client: 'Northwind Logistics',
    solution: 'Freight Visibility Platform',
    stage: 'Estimation',
    status: 'Needs Lead',
    statusVariant: 'warning',
    commercialLead: 'Tom Reyes',
    solutionLead: 'Celine Park',
    deliveryManager: 'Marcos Villa',
    estimationLead: 'Unassigned',
    serviceOffering: 'App Dev',
    triageRoute: 'Expansion',
    hours: 720,
    budgetEnvelope: 240000,
    lastUpdated: 'Yesterday',
    openQuestions: 4,
    readiness: '54%',
    attention: 'Estimation Lead not assigned',
  },
  {
    id: 'meridian-financial',
    client: 'Meridian Financial Services',
    solution: 'Advisor Portal Modernization',
    stage: 'Internal Review',
    status: 'Review',
    statusVariant: 'reviewed',
    commercialLead: 'Anna Mitchell',
    solutionLead: 'James Okafor',
    deliveryManager: 'Li Wei',
    estimationLead: 'James Okafor',
    serviceOffering: 'Re-platform',
    triageRoute: 'Change Request',
    hours: 1180,
    budgetEnvelope: 410000,
    lastUpdated: 'May 12',
    openQuestions: 1,
    readiness: '86%',
    attention: 'Technology Partner approval pending',
  },
];

export const portfolioAttention = [
  {
    id: 'acme-phase-1-blockers',
    tone: 'danger',
    title: 'Acme Health Systems',
    subtitle: '2 open questions blocking Phase 1 estimation',
    action: { label: 'Open' },
  },
  {
    id: 'northwind-lead',
    tone: 'warning',
    title: 'Northwind Logistics',
    subtitle: 'Estimation Lead not assigned',
  },
  {
    id: 'meridian-review',
    tone: 'brand',
    title: 'Meridian Financial',
    subtitle: 'Internal review checklist is 86% complete',
  },
];

export const portfolioReporting = {
  metrics: [
    { label: 'Total Pipeline Value', value: '$970k', detail: 'Across active scoped engagements' },
    { label: 'At Risk', value: '4', detail: 'Open blockers or missing owners' },
    { label: 'Scope Ready', value: '5', detail: 'Ready for internal/client review' },
    { label: 'Avg. Variance', value: '-8%', detail: 'Bottom-up vs envelope' },
  ],
  stageDistribution: [
    { stage: 'Intake', count: 2, percent: 17 },
    { stage: 'Domain Modeling', count: 3, percent: 25 },
    { stage: 'Estimation', count: 3, percent: 25 },
    { stage: 'Internal Review', count: 2, percent: 17 },
    { stage: 'SOW Deliverables', count: 2, percent: 16 },
  ],
  ownerLoad: [
    { owner: 'Alex Rivera', role: 'Solution Lead', engagements: 4, blockers: 3 },
    { owner: 'Celine Park', role: 'Solution Lead', engagements: 3, blockers: 2 },
    { owner: 'James Okafor', role: 'Solution Lead', engagements: 3, blockers: 1 },
    { owner: 'Jordan Lee', role: 'Estimation Lead', engagements: 5, blockers: 2 },
  ],
  blockers: [
    { client: 'Acme Health Systems', blocker: '2 open questions blocking Phase 1 estimation', owner: 'Maya Chen', severity: 'High' },
    { client: 'Northwind Logistics', blocker: 'Estimation Lead not assigned', owner: 'Tom Reyes', severity: 'High' },
    { client: 'Meridian Financial Services', blocker: 'Technology Partner approval pending', owner: 'James Okafor', severity: 'Medium' },
  ],
};

export const adminSettings = {
  lifecycleRules: [
    { name: 'Discovery Summary approval', setting: 'Required before Triage', status: 'Active' },
    { name: 'Phase 1 estimation gate', setting: 'All Phase 1 stories estimated', status: 'Active' },
    { name: 'Technology Partner review', setting: 'Required before Client Review', status: 'Active' },
    { name: 'Signed SOW handoff', setting: 'Required before Build Handoff', status: 'Draft' },
  ],
  governanceRules: [
    { name: 'Blocking question policy', setting: 'Resolve or explicitly defer', status: 'Active' },
    { name: 'Pain point traceability', setting: 'Every pain point must link to an Epic', status: 'Active' },
    { name: 'Assumption confidence', setting: 'Medium or low confidence requires trigger', status: 'Active' },
  ],
  outputSettings: [
    { name: 'HTML Scope Document', setting: 'Client preview enabled', status: 'Active' },
    { name: 'Markdown Scope Export', setting: 'Technical preview enabled', status: 'Active' },
    { name: 'Build Handoff Bundle', setting: 'Blocked until signed SOW', status: 'Draft' },
  ],
  teamDefaults: [
    { role: 'Commercial Lead', defaultOwner: 'Maya Chen', required: 'Yes' },
    { role: 'Solution Lead', defaultOwner: 'Assigned by service offering', required: 'Yes' },
    { role: 'Estimation Lead', defaultOwner: 'Jordan Lee', required: 'Yes' },
    { role: 'Delivery Manager', defaultOwner: 'Priya Shah', required: 'No' },
  ],
};

export const engagementContextById = {
  'acme-health': {
    documents: ['Discovery transcript', 'Current-state workflow map', 'Initial budget notes'],
    aiSuggestions: [
      'Generate pain points from approved discovery summary.',
      'Draft Phase 1 scope headline for client review.',
      'Check whether EHR integration is read-only or bidirectional.',
    ],
    openQuestions: [
      'Will referring providers access the portal directly or only internal coordinators?',
      'Is the EHR integration read-only or bidirectional in Phase 1?',
    ],
    assumptions: [
      'Client SMEs are available for weekly validation sessions.',
      'Phase 1 excludes external provider self-service access.',
    ],
  },
  'northwind-logistics': {
    documents: ['Freight discovery notes', 'Dispatch workflow export', 'Existing TMS integration list'],
    aiSuggestions: [
      'Assign Estimation Lead before Phase 1 estimates can be approved.',
      'Identify repeated logistics epics from prior visibility platform work.',
    ],
    openQuestions: [
      'Which carriers must be in Phase 1?',
      'Does the existing TMS expose shipment milestones through API?',
      'What SLA applies to status update latency?',
    ],
    assumptions: [
      'Phase 1 focuses on internal dispatch visibility.',
      'Carrier portal access is future scope.',
    ],
  },
  'meridian-financial': {
    documents: ['Advisor portal assessment', 'Current UX audit', 'Security questionnaire'],
    aiSuggestions: [
      'Prepare Technology Partner approval summary.',
      'Generate Build handoff checklist from reviewed scope.',
    ],
    openQuestions: [
      'Should legacy advisor reports remain available after launch?',
    ],
    assumptions: [
      'Existing SSO provider remains unchanged.',
      'Phase 1 prioritizes authenticated advisor workflows.',
    ],
  },
};

export const phaseTwoWorkflowByEngagement = {
  'acme-health': {
    intake: {
      fields: {
        clientName: 'Acme Health Systems',
        primaryContact: 'Dr. Elena Vasquez, VP Clinical Operations',
        businessArea: 'Ambulatory referrals and clinical intake operations',
        opportunityOrigin: 'Expansion',
        perceivedUrgency: 'High - need scope within 2 weeks',
        budgetRange: '$280k to $340k target envelope',
        anticipatedTimeline: 'Phase 1 kickoff in July; first release before Q4 operating review',
        primaryStakeholders: 'Clinical Operations, Referral Management, Radiology, Technology Partner, Compliance',
        currentSystems: 'Epic EHR, provider fax queue, shared intake inbox, Snowflake reporting warehouse, Azure AD',
      },
      uploads: [
        { id: 'doc-001', name: 'Discovery transcript - intake workflow', type: 'DOCX', size: '84 KB', tag: 'Discovery call' },
        { id: 'doc-002', name: 'Current-state referral routing map', type: 'PDF', size: '1.8 MB', tag: 'Architecture diagram' },
        { id: 'doc-003', name: 'Referral volume extract', type: 'XLSX', size: '426 KB', tag: 'Existing requirements' },
      ],
      transcript: {
        date: 'May 12, 2026',
        attendees: 'Maya Chen, Alex Rivera, Dr. Elena Vasquez, Priya Shah',
        topic: 'Clinical intake automation discovery',
        excerpt: 'Referral coordinators spend the first hour of each day reconciling faxes, portal messages, and EHR updates before routing work to the clinical team.',
      },
      aiSummary: {
        state: 'generated',
        title: 'AI Draft Discovery Summary',
        reviewedBy: 'Maya Chen',
        generatedAt: 'Today at 9:12 AM',
        sections: [
          { label: 'Business Context', value: 'Acme wants a single intake workspace for clinical referral routing across internal coordinators and radiology reviewers.' },
          { label: 'Pain Points Heard', value: 'Manual routing, duplicate patient data, incomplete audit trail, and limited priority queue visibility.' },
          { label: 'Systems Mentioned', value: 'Epic EHR, provider fax queue, shared inbox, reporting warehouse, Azure AD.' },
          { label: 'Stakeholders Identified', value: 'Intake Coordinator, Radiologist, Clinical Administrator, Technology Partner, Compliance.' },
          { label: 'Open Questions', value: 'Provider self-service access and EHR integration direction remain unresolved.' },
        ],
      },
      warnings: ['Discovery Summary must be approved before advancing to Triage'],
    },
    triage: {
      decision: 'new-engagement',
      decisionOptions: [
        { label: 'New Engagement', value: 'new-engagement', description: 'Net-new scope, no existing relationship constraints' },
        { label: 'Change Request', value: 'change-request', description: 'Modification to an existing in-flight engagement' },
        { label: 'Expansion', value: 'expansion', description: 'Additional scope on a delivered or active client' },
        { label: 'Decline / Pass', value: 'decline', description: 'Not a fit - document reason and close' },
      ],
      notes: 'Route as a new engagement. Although Acme has prior Nymbl work, this platform introduces a new operational workflow, new stakeholders, and new estimation baseline.',
      existingEngagement: 'No linked in-flight engagement selected',
      priorDomainModel: 'No reusable domain model selected',
      technologyPartner: 'Alex Rivera',
      approvalStatus: 'Approved',
      approverComments: 'Proceed to Solution Definition. Flag EHR integration direction before Phase 1 estimation closes.',
      nextStep: 'Advance to Solution Definition',
    },
    solution: {
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'pain-points', label: 'Pain Points' },
        { id: 'wish-list', label: 'Wish List' },
        { id: 'user-groups', label: 'User Groups' },
        { id: 'technology-needs', label: 'Technology Needs' },
      ],
      introduction: {
        clientProfile: 'Acme Health Systems operates a multi-site specialty referral network with centralized clinical intake and distributed radiology review teams.',
        organizationalContext: 'Clinical Operations owns intake routing. Radiology owns review prioritization. Technology Partner and Compliance approve integration and audit decisions.',
        engagementOrigin: 'Expansion opportunity surfaced during discovery on referral turnaround time and incomplete routing traceability.',
        problemStatement: 'Acme cannot reliably route incoming referrals because work arrives across disconnected channels, priority signals are inconsistent, and manual reconciliation delays clinical review.',
        opportunityStatement: 'A Phase 1 intake automation platform can centralize referral capture, normalize routing signals, and establish an auditable workflow foundation without overcommitting provider self-service.',
        status: 'AI Draft',
      },
      painPoints: [
        {
          id: 'manual-routing',
          title: 'Manual intake routing causes delays',
          category: 'Operational',
          severity: 'High',
          affectedGroups: 'Intake Coordinator, Radiologist',
          epicLinks: ['Submit Clinical Referrals', 'Validate Referral Completeness'],
          detail: 'Coordinators reconcile fax, inbox, and EHR updates before routing referrals, causing urgent cases to wait behind routine work.',
        },
        {
          id: 'duplicate-patient-data',
          title: 'Duplicate patient data across systems',
          category: 'Technical',
          severity: 'High',
          affectedGroups: 'Intake Coordinator, Clinical Administrator',
          epicLinks: ['Pre-fill Patient Demographics'],
          detail: 'Patient demographic data is re-entered from multiple sources, creating avoidable correction loops and uncertain ownership.',
        },
        {
          id: 'audit-trail',
          title: 'Compliance audit trail is incomplete',
          category: 'Compliance',
          severity: 'Medium',
          affectedGroups: 'Clinical Administrator, Compliance',
          epicLinks: [],
          detail: 'Routing decisions are not consistently linked to source records, owner, timestamp, and resolution reason.',
        },
        {
          id: 'priority-visibility',
          title: 'Radiologists lack priority queue visibility',
          category: 'Operational',
          severity: 'Medium',
          affectedGroups: 'Radiologist',
          epicLinks: ['Track Referral Status'],
          detail: 'Reviewers cannot see a unified queue ordered by referral urgency, completeness, and assigned route.',
        },
      ],
      wishList: [
        { id: 'guided-referral', title: 'Guided referral intake', priority: 'Must', linkedPainPoints: ['Manual intake routing causes delays'], detail: 'A coordinator can submit a complete referral with required documents and structured clinical context.' },
        { id: 'ehr-prefill', title: 'EHR demographic pre-fill', priority: 'Must', linkedPainPoints: ['Duplicate patient data across systems'], detail: 'Patient demographics can be looked up and inserted from Epic to avoid duplicate entry.' },
        { id: 'routing-rules', title: 'Configurable routing rules', priority: 'Should', linkedPainPoints: ['Radiologists lack priority queue visibility'], detail: 'Administrators can tune routing rules without requesting a code change.' },
        { id: 'provider-access', title: 'External provider self-service', priority: 'Could', linkedPainPoints: ['Manual intake routing causes delays'], detail: 'External referring providers can eventually submit referrals directly.' },
      ],
      userGroups: [
        {
          id: 'radiologist',
          name: 'Radiologist',
          roleDescription: 'Reviews and interprets clinical studies',
          missionStatement: 'Complete urgent studies with full context and no manual re-routing.',
          primaryExperiences: ['Radiologist Worklist'],
        },
        {
          id: 'intake-coordinator',
          name: 'Intake Coordinator',
          roleDescription: 'Processes incoming clinical referrals',
          missionStatement: 'Process referrals accurately in under 5 minutes without switching between systems.',
          primaryExperiences: ['Clinical Intake Portal'],
        },
        {
          id: 'clinical-admin',
          name: 'Clinical Administrator',
          roleDescription: 'Manages department routing rules and system configuration',
          missionStatement: 'Maintain routing accuracy without requiring IT intervention.',
          primaryExperiences: ['Admin Console'],
        },
      ],
      technologyNeeds: [
        { category: 'Identity & Access', needs: ['Authenticate internal clinical users', 'Map users to clinical and administrative roles'] },
        { category: 'Data Capture', needs: ['Capture referral metadata', 'Associate uploaded clinical documents to referral records'] },
        { category: 'Workflow', needs: ['Route referrals by completeness and priority', 'Track owner, status, and escalation state'] },
        { category: 'Integration', needs: ['Read patient demographics from EHR', 'Evaluate bidirectional integration requirements'] },
        { category: 'Audit & Compliance', needs: ['Record routing decisions with timestamp and owner', 'Preserve source document references'] },
        { category: 'Reporting', needs: ['Expose intake volume and turnaround time', 'Summarize unresolved open questions'] },
        { category: 'Operations', needs: ['Support configurable routing rules', 'Provide exception review queue'] },
      ],
    },
  },
};

export const domainModelByEngagement = {
  'acme-health': {
    componentTypes: ['Experience', 'Workflow', 'Integration', 'Foundation'],
    validation: [
      { tone: 'warning', title: '2 Epics need estimates', detail: 'Track Referral Status and Generate Intake Summary Report are not estimated yet.' },
      { tone: 'warning', title: '1 Pain Point has no Epic link', detail: 'Compliance audit trail is incomplete needs a linked Epic before review.' },
      { tone: 'info', title: 'Phase 1 rollup is preliminary', detail: 'Current rollup uses story-level estimates where available.' },
    ],
    components: [
      {
        id: 'clinical-intake-portal',
        name: 'Clinical Intake Portal',
        type: 'Experience',
        interfaceType: 'Web App',
        description: 'Primary web workspace where coordinators capture, validate, and submit clinical referrals.',
        status: 'in-progress',
        traceability: 'warning',
        epics: [
          {
            id: 'submit-clinical-referrals',
            name: 'Submit Clinical Referrals',
            phase: 'Phase 1',
            status: 'Estimated',
            linkedPainPoints: ['Manual intake routing causes delays'],
            stories: [
              {
                id: 'upload-referral-documents',
                persona: 'User',
                action: 'upload referral documents from my desktop',
                outcome: 'intake coordinators have the correct files without emailing separately',
                priority: 'Must',
                complexity: 'Standard',
                estimate: 16,
                acceptanceCriteria: [
                  { statement: 'Referral documents can be uploaded from local desktop storage.', testMethod: 'Functional test', qualityStatus: 'Ready' },
                  { statement: 'Uploaded documents remain attached to the draft referral.', testMethod: 'Regression test', qualityStatus: 'Ready' },
                ],
              },
              {
                id: 'prefill-demographics',
                persona: 'User',
                action: 'pre-fill patient demographics from the EHR lookup',
                outcome: 'I avoid re-entering data that already exists in the system',
                priority: 'Must',
                complexity: 'Complex',
                estimate: 24,
                acceptanceCriteria: [
                  { statement: 'A coordinator can search the EHR by patient identifier.', testMethod: 'Integration test', qualityStatus: 'Needs dependency' },
                  { statement: 'Returned demographics populate referral fields without overwriting manual notes.', testMethod: 'Functional test', qualityStatus: 'Ready' },
                ],
              },
              {
                id: 'validate-mandatory-fields',
                persona: 'System',
                action: 'validate that mandatory fields are complete before submission',
                outcome: 'incomplete referrals are never sent downstream for routing',
                priority: 'Must',
                complexity: 'Simple',
                estimate: 8,
                acceptanceCriteria: [
                  { statement: 'Submission is blocked when required referral fields are empty.', testMethod: 'Unit test', qualityStatus: 'Ready' },
                  { statement: 'Validation messages identify the missing field and required action.', testMethod: 'Functional test', qualityStatus: 'Ready' },
                ],
              },
              {
                id: 'save-draft-referral',
                persona: 'User',
                action: 'save a referral as a draft and return to complete it',
                outcome: 'I can pause mid-entry without losing work',
                priority: 'Should',
                complexity: 'Simple',
                estimate: 8,
                acceptanceCriteria: [
                  { statement: 'Draft referrals persist current field values and documents.', testMethod: 'Functional test', qualityStatus: 'Ready' },
                ],
              },
              {
                id: 'submit-on-behalf',
                persona: 'User',
                action: 'submit a referral on behalf of an external referring provider',
                outcome: 'the intake process works for provider-initiated referrals',
                priority: 'Could',
                complexity: 'Standard',
                estimate: 16,
                acceptanceCriteria: [
                  { statement: 'Coordinator can identify external provider context on submission.', testMethod: 'Functional test', qualityStatus: 'Draft' },
                ],
              },
            ],
          },
          {
            id: 'validate-referral-completeness',
            name: 'Validate Referral Completeness',
            phase: 'Phase 1',
            status: 'Estimated',
            linkedPainPoints: ['Manual intake routing causes delays', 'Duplicate patient data across systems'],
            stories: [
              {
                id: 'score-referral-completeness',
                persona: 'System',
                action: 'score referral completeness before routing',
                outcome: 'coordinators know which referrals require follow-up',
                priority: 'Must',
                complexity: 'Standard',
                estimate: 24,
                acceptanceCriteria: [
                  { statement: 'Completeness status updates when required documents or metadata change.', testMethod: 'Functional test', qualityStatus: 'Ready' },
                  { statement: 'Incomplete referrals show required remediation steps.', testMethod: 'Functional test', qualityStatus: 'Ready' },
                ],
              },
              {
                id: 'flag-duplicate-patient-records',
                persona: 'System',
                action: 'flag possible duplicate patient records',
                outcome: 'coordinators resolve identity conflicts before clinical review',
                priority: 'Should',
                complexity: 'Complex',
                estimate: 24,
                acceptanceCriteria: [
                  { statement: 'Potential duplicate matches are displayed with confidence indicators.', testMethod: 'Integration test', qualityStatus: 'Draft' },
                ],
              },
            ],
          },
          {
            id: 'track-referral-status',
            name: 'Track Referral Status',
            phase: 'Phase 1',
            status: 'Ready for Estimation',
            linkedPainPoints: ['Radiologists lack priority queue visibility'],
            stories: [
              {
                id: 'view-referral-status',
                persona: 'User',
                action: 'view referral status from intake through clinical routing',
                outcome: 'I can answer status questions without searching multiple systems',
                priority: 'Should',
                complexity: 'Standard',
                estimate: null,
                acceptanceCriteria: [
                  { statement: 'Referral status includes current owner, stage, and last update.', testMethod: 'Functional test', qualityStatus: 'Draft' },
                ],
              },
            ],
          },
          {
            id: 'generate-intake-summary-report',
            name: 'Generate Intake Summary Report',
            phase: 'Phase 2',
            status: 'Draft',
            linkedPainPoints: [],
            stories: [
              {
                id: 'export-intake-summary',
                persona: 'User',
                action: 'export a referral intake summary',
                outcome: 'clinical reviewers have a concise context package',
                priority: 'Could',
                complexity: 'Standard',
                estimate: null,
                acceptanceCriteria: [
                  { statement: 'Summary includes referral metadata, documents, routing reason, and open questions.', testMethod: 'Functional test', qualityStatus: 'Draft' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'radiologist-worklist',
        name: 'Radiologist Worklist',
        type: 'Experience',
        interfaceType: 'Web App',
        description: 'Priority-aware worklist for radiologists reviewing routed clinical studies.',
        status: 'draft',
        traceability: 'reviewed',
        epics: [
          {
            id: 'prioritize-clinical-work',
            name: 'Prioritize Clinical Work',
            phase: 'Phase 1',
            status: 'Estimated',
            linkedPainPoints: ['Radiologists lack priority queue visibility'],
            stories: [
              {
                id: 'filter-by-urgency',
                persona: 'Radiologist',
                action: 'filter referrals by urgency and modality',
                outcome: 'urgent studies surface before routine work',
                priority: 'Must',
                complexity: 'Standard',
                estimate: 32,
                acceptanceCriteria: [
                  { statement: 'Worklist can be filtered by urgency and modality.', testMethod: 'Functional test', qualityStatus: 'Ready' },
                ],
              },
              {
                id: 'claim-referral-review',
                persona: 'Radiologist',
                action: 'claim a routed referral for review',
                outcome: 'duplicate clinical review is prevented',
                priority: 'Should',
                complexity: 'Standard',
                estimate: 28,
                acceptanceCriteria: [
                  { statement: 'Claimed referrals show assigned reviewer and claim timestamp.', testMethod: 'Functional test', qualityStatus: 'Ready' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'intake-routing-workflow',
        name: 'Intake Routing Workflow',
        type: 'Workflow',
        workflowType: 'Process-Oriented',
        description: 'Rules and review path for referral routing, escalation, and exception handling.',
        status: 'in-progress',
        traceability: 'warning',
        epics: [
          {
            id: 'route-intake-requests',
            name: 'Route Intake Requests',
            phase: 'Phase 1',
            status: 'Estimated',
            linkedPainPoints: ['Manual intake routing causes delays'],
            stories: [
              {
                id: 'route-by-completeness',
                persona: 'System',
                action: 'route complete referrals to the correct clinical queue',
                outcome: 'ready referrals do not wait for manual assignment',
                priority: 'Must',
                complexity: 'Complex',
                estimate: 48,
                acceptanceCriteria: [
                  { statement: 'Complete referrals are routed according to configured specialty rules.', testMethod: 'Functional test', qualityStatus: 'Ready' },
                  { statement: 'Routing events record rule, timestamp, and source referral.', testMethod: 'Audit test', qualityStatus: 'Ready' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'ehr-integration',
        name: 'EHR Integration',
        type: 'Integration',
        direction: 'Bidirectional',
        mechanism: 'REST',
        description: 'Patient and referral data exchange with the EHR, including lookup and potential status writeback.',
        status: 'warning',
        traceability: 'warning',
        epics: [
          {
            id: 'lookup-patient-context',
            name: 'Lookup Patient Context',
            phase: 'Phase 1',
            status: 'Estimated',
            linkedPainPoints: ['Duplicate patient data across systems'],
            stories: [
              {
                id: 'lookup-patient-demographics',
                persona: 'System',
                action: 'retrieve patient demographics from the EHR',
                outcome: 'the intake form can pre-fill trusted patient context',
                priority: 'Must',
                complexity: 'Complex',
                estimate: 72,
                acceptanceCriteria: [
                  { statement: 'EHR lookup returns patient demographics using approved identifiers.', testMethod: 'Integration test', qualityStatus: 'Needs dependency' },
                  { statement: 'Lookup failures show a recoverable error state.', testMethod: 'Functional test', qualityStatus: 'Ready' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'identity-access-foundation',
        name: 'Identity and Access Foundation',
        type: 'Foundation',
        foundationType: 'Identity',
        buildVsConfigure: 'Configure',
        description: 'Authentication and role mapping needed for coordinator, radiologist, and administrator access.',
        status: 'estimated',
        traceability: 'reviewed',
        epics: [
          {
            id: 'authenticate-clinical-users',
            name: 'Authenticate Clinical Users',
            phase: 'Phase 1',
            status: 'Estimated',
            linkedPainPoints: ['Compliance audit trail is incomplete'],
            stories: [
              {
                id: 'sign-in-with-sso',
                persona: 'User',
                action: 'sign in with my Acme account',
                outcome: 'I can access the intake platform without a separate credential',
                priority: 'Must',
                complexity: 'Standard',
                estimate: 40,
                acceptanceCriteria: [
                  { statement: 'Users authenticate through the approved SSO provider.', testMethod: 'Security test', qualityStatus: 'Ready' },
                  { statement: 'Inactive users cannot access the workspace.', testMethod: 'Security test', qualityStatus: 'Ready' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

export const phaseFourPlanByEngagement = {
  'acme-health': {
    blendedRate: 300,
    topDownEnvelope: 320000,
    phaseTargets: {
      Backlog: { hours: 0, budget: 0 },
      'Phase 1': { hours: 580, budget: 174000 },
      'Phase 2': { hours: 370, budget: 111000 },
      Future: { hours: 180, budget: 54000 },
      'Out of Scope': { hours: 0, budget: 0 },
    },
    phaseOrder: ['Backlog', 'Phase 1', 'Phase 2', 'Future', 'Out of Scope'],
    estimation: {
      confidence: 'Medium',
      blockedEpics: 2,
      decisionOptions: [
        { label: 'Increase envelope', value: 'increase-envelope' },
        { label: 'Reduce scope', value: 'reduce-scope' },
        { label: 'Defer Epics', value: 'defer-epics' },
        { label: 'Accept lower margin', value: 'accept-margin' },
      ],
      rationale: 'Modeled bottom-up scope is below the working envelope because future provider self-service and reporting epics remain intentionally deferred.',
    },
    timeline: {
      weeks: 12,
      milestones: [
        { label: 'Kickoff', week: 1 },
        { label: 'Discovery Complete', week: 2 },
        { label: 'First Demo', week: 5 },
        { label: 'User Login', week: 7 },
        { label: 'Technical Production', week: 9 },
        { label: 'Early Production', week: 10 },
        { label: 'Full Production', week: 12 },
      ],
      epicWindows: {
        'submit-clinical-referrals': { start: 2, end: 5 },
        'validate-referral-completeness': { start: 4, end: 6 },
        'track-referral-status': { start: 6, end: 8 },
        'generate-intake-summary-report': { start: 9, end: 11 },
        'prioritize-clinical-work': { start: 6, end: 9 },
        'route-intake-requests': { start: 3, end: 7 },
        'lookup-patient-context': { start: 2, end: 8 },
        'authenticate-clinical-users': { start: 1, end: 4 },
      },
    },
    warnings: [
      'Track Referral Status is in Phase 1 but still unestimated.',
      'EHR lookup remains the highest dependency risk for Phase 1.',
      'Generate Intake Summary Report is Phase 2 and should not block Phase 1 review.',
    ],
    team: {
      client: [
        { role: 'Executive Sponsor', name: 'Dr. Elena Vasquez', allocation: '10% P1 / 5% P2', responsibility: 'Approves scope and operational priorities', availability: 'Weekly steering review' },
        { role: 'Product Owner / Business SME', name: 'Maya Chen', allocation: '35% P1 / 25% P2', responsibility: 'Owns workflow decisions and acceptance review', availability: '2 workshops per week' },
        { role: 'Technical SME', name: 'Sam Patel', allocation: '30% P1 / 20% P2', responsibility: 'EHR, identity, and data access validation', availability: 'API office hours' },
        { role: 'End-user Representatives', name: 'Radiology cohort', allocation: '15% P1 / 10% P2', responsibility: 'Usability validation and scenario review', availability: 'Biweekly sessions' },
      ],
      nymbl: [
        { role: 'Commercial Lead', name: 'Maya Chen', allocation: '15% P1 / 10% P2', billable: 'No', rate: 'Internal' },
        { role: 'Solution Lead', name: 'Alex Rivera', allocation: '35% P1 / 25% P2', billable: 'Yes', rate: '$300/h' },
        { role: 'Delivery Manager', name: 'Priya Shah', allocation: '30% P1 / 20% P2', billable: 'Yes', rate: '$260/h' },
        { role: 'Estimation Lead', name: 'Jordan Lee', allocation: '20% P1 / 15% P2', billable: 'Yes', rate: '$280/h' },
        { role: 'Frontend Engineer', name: 'TBD', allocation: '75% P1 / 50% P2', billable: 'Yes', rate: '$225/h' },
        { role: 'Backend / Integration Engineer', name: 'TBD', allocation: '85% P1 / 60% P2', billable: 'Yes', rate: '$245/h' },
        { role: 'Product Designer', name: 'TBD', allocation: '45% P1 / 20% P2', billable: 'Yes', rate: '$210/h' },
      ],
    },
  },
};

export const phaseFiveGovernanceByEngagement = {
  'acme-health': {
    risks: [
      {
        id: 'ehr-procurement',
        description: 'EHR vendor API access may require 6-week procurement approval',
        category: 'Integration / Dependency',
        likelihood: 'High',
        impact: 'High',
        score: 'High',
        owner: 'Client',
        status: 'Open',
        linkedItems: ['EHR Integration', 'Lookup Patient Context'],
        mitigation: 'Start vendor access request during Solution Definition and keep patient lookup behind a feature flag.',
      },
      {
        id: 'change-management',
        description: 'Clinical workflow change management may slow adoption',
        category: 'Organizational / Change Management',
        likelihood: 'Medium',
        impact: 'High',
        score: 'High',
        owner: 'Nymbl',
        status: 'Open',
        linkedItems: ['Clinical Intake Portal', 'Radiologist Worklist'],
        mitigation: 'Include representative coordinators and radiologists in weekly validation sessions.',
      },
      {
        id: 'audit-log',
        description: 'HIPAA audit trail requirements may require custom audit log component',
        category: 'Technical',
        likelihood: 'Medium',
        impact: 'Medium',
        score: 'Medium',
        owner: 'Nymbl',
        status: 'Mitigated',
        linkedItems: ['Identity and Access Foundation'],
        mitigation: 'Capture routing event owner, timestamp, source record, and decision reason in Phase 1.',
      },
    ],
    questions: [
      {
        id: 'provider-access',
        question: 'Will referring providers access the portal directly or only internal coordinators?',
        impactArea: 'Scope',
        owner: 'Maya Chen',
        status: 'Open',
        linkedItems: ['Clinical Intake Portal', 'Submit Clinical Referrals'],
        blocksPhase1: true,
        resolution: '',
      },
      {
        id: 'ehr-direction',
        question: 'Is the EHR integration read-only or bidirectional in Phase 1?',
        impactArea: 'Estimate',
        owner: 'Alex Rivera',
        status: 'Open',
        linkedItems: ['EHR Integration', 'Lookup Patient Context'],
        blocksPhase1: true,
        resolution: '',
      },
      {
        id: 'routing-sla',
        question: 'What is the target SLA for routing decisions?',
        impactArea: 'Delivery',
        owner: 'Priya Shah',
        status: 'Answered',
        linkedItems: ['Intake Routing Workflow'],
        blocksPhase1: false,
        resolution: 'Under 30 seconds for automated routing, 4 hours for manual review.',
      },
    ],
    assumptions: [
      {
        id: 'sme-access',
        statement: 'Client SMEs are available for weekly validation sessions.',
        impactArea: 'Delivery',
        confidence: 'High',
        status: 'Active',
        trigger: 'If SME attendance drops below two sessions, timeline confidence moves to Low.',
        linkedItems: ['Review', 'Timeline'],
      },
      {
        id: 'provider-self-service',
        statement: 'Phase 1 excludes external provider self-service access.',
        impactArea: 'Scope',
        confidence: 'Medium',
        status: 'Active',
        trigger: 'If provider access is required, Generate Intake Summary Report and provider submission become Phase 1 candidates.',
        linkedItems: ['Clinical Intake Portal'],
      },
      {
        id: 'identity-provider',
        statement: 'Existing SSO provider remains unchanged.',
        impactArea: 'Technology',
        confidence: 'High',
        status: 'Validated',
        trigger: 'If SSO changes, Identity Foundation must be re-estimated.',
        linkedItems: ['Identity and Access Foundation'],
      },
    ],
    review: {
      score: { passed: 14, total: 17 },
      groups: [
        {
          title: 'Core Completeness',
          items: [
            { label: 'Introduction approved', status: 'passed' },
            { label: 'Problem Statement approved', status: 'passed' },
            { label: 'Pain Points complete and linked to Epics', status: 'review' },
            { label: 'Wish List complete', status: 'passed' },
            { label: 'User Groups complete with mission statements', status: 'passed' },
            { label: 'Technology Needs complete', status: 'passed' },
          ],
        },
        {
          title: 'Domain Model',
          items: [
            { label: 'All Phase 1 Epics have at least one User Story', status: 'passed' },
            { label: 'All Phase 1 User Stories have at least one AC', status: 'passed' },
            { label: 'All Epics linked to at least one Pain Point', status: 'review' },
            { label: 'No unresolved circular dependencies', status: 'passed' },
          ],
        },
        {
          title: 'Estimation',
          items: [
            { label: 'All Phase 1 User Stories estimated', status: 'blocked' },
            { label: 'L2 roll-ups validated by Estimation Lead', status: 'review' },
            { label: 'Top-down vs bottoms-up reconciliation logged', status: 'passed' },
          ],
        },
        {
          title: 'Governance',
          items: [
            { label: 'Budget variance reviewed', status: 'passed' },
            { label: 'All risks acknowledged', status: 'passed' },
            { label: 'Open Questions resolved or deferred with rationale', status: 'blocked' },
            { label: 'Technology Partner approval recorded', status: 'review' },
          ],
        },
      ],
      approval: {
        reviewer: 'Alex Rivera',
        status: 'Changes Requested',
        updatedAt: 'May 15, 2026 at 2:40 PM',
        comments: 'Resolve EHR integration direction and explicitly defer provider self-service before client review.',
      },
    },
    outputs: [
      {
        id: 'html-scope',
        title: 'HTML Scope Document',
        audience: 'Client',
        format: 'HTML',
        lastGenerated: 'Preview ready',
        readiness: 'Ready to preview',
        status: 'reviewed',
        requires: [],
      },
      {
        id: 'pdf-scope',
        title: 'PDF Scope Document',
        audience: 'Client',
        format: 'PDF',
        lastGenerated: 'Not generated',
        readiness: 'Requires approval',
        status: 'warning',
        requires: ['Technology Partner approval'],
      },
      {
        id: 'markdown-scope',
        title: 'Markdown Scope Document',
        audience: 'Technical team',
        format: '.md',
        lastGenerated: 'Queued',
        readiness: 'Ready to generate',
        status: 'reviewed',
        requires: [],
      },
      {
        id: 'sow-package',
        title: 'SOW Deliverables Package',
        audience: 'Commercial team',
        format: 'Structured list',
        lastGenerated: 'Preview ready',
        readiness: 'Requires open question decision',
        status: 'warning',
        requires: ['Provider access decision', 'EHR direction decision'],
      },
      {
        id: 'handoff-bundle',
        title: 'Build Phase Handoff Bundle',
        audience: 'Build team',
        format: '.zip',
        lastGenerated: 'Blocked',
        readiness: 'Requires signed SOW',
        status: 'danger',
        requires: ['Signed SOW', 'Build target configured'],
      },
      {
        id: 'estimation-report',
        title: 'Estimation Report',
        audience: 'Internal',
        format: 'PDF',
        lastGenerated: 'Draft',
        readiness: 'Requires Phase 1 story estimate completion',
        status: 'warning',
        requires: ['Track Referral Status estimate'],
      },
    ],
    preview: {
      title: 'Clinical Intake Automation Platform',
      oneLiner: 'Centralize clinical referral intake, normalize routing signals, and prepare the foundation for auditable downstream workflow automation.',
      phaseHeadline: 'Phase 1 establishes internal coordinator intake, EHR lookup, routing workflow, and access foundation.',
      timeline: '12-week modeled plan with first demo in Week 5 and technical production in Week 9.',
      budget: '$320,000 working envelope',
      sections: ['Solution Overview', 'User Groups', 'Domain Model', 'Technology', 'Phasing', 'Timeline', 'Team', 'Budget', 'Risks', 'Questions', 'Assumptions', 'Appendix'],
      keyRisks: ['EHR vendor API access timing', 'Clinical workflow change management'],
      openQuestions: ['Provider access model', 'EHR read/write direction'],
    },
  },
};

export const sectionStubDetails = {
  intake: {
    purpose: 'Capture raw discovery inputs, uploaded context, transcripts, and approved discovery summary.',
    phase: 'Phase 2 deep build',
    next: ['Structured intake form', 'Document upload placeholders', 'AI discovery summary states'],
  },
  triage: {
    purpose: 'Route the engagement as New, Change Request, Expansion, or Decline with approval context.',
    phase: 'Phase 2 deep build',
    next: ['Triage ChoiceGroup', 'Routing notes', 'Technology Partner approval state'],
  },
  solution: {
    purpose: 'Define business context, problem, opportunity, pain points, wish list, user groups, and technology needs.',
    phase: 'Phase 2 deep build',
    next: ['Introduction tabs', 'Pain point table and drawer', 'User group validation warnings'],
  },
  artifacts: {
    purpose: 'Hold diagrams and context artifacts that support solution definition and downstream outputs.',
    phase: 'v1 placeholder',
    next: ['System landscape placeholder', 'Workflow diagram placeholder', 'Context document references'],
  },
  'domain-model': {
    purpose: 'Model L1 Components, L2 Epics, L3 User Stories, and Acceptance Criteria as structured scope.',
    phase: 'Phase 3 deep build',
    next: ['L1 board grouped by type', 'Epic panel', 'Story panel and AC drawer'],
  },
  estimation: {
    purpose: 'Set L3 estimates, roll up to L2/L1/Phase/Total, and reconcile with top-down envelope.',
    phase: 'Phase 4 deep build',
    next: ['Estimation overview', 'L3 estimation table', 'Roll-up view', 'Top-down reconciliation'],
  },
  plan: {
    purpose: 'Convert the Domain Model into a phased delivery model with timeline, team, and budget.',
    phase: 'Phase 4 deep build',
    next: ['Phasing board', 'Token-styled Gantt', 'Team structure', 'Budget split view'],
  },
  risks: {
    purpose: 'Manage risks, open questions, and assumptions as first-class governance objects.',
    phase: 'Phase 5 deep build',
    next: ['Risk register', 'Open question blockers', 'Assumption confidence/status'],
  },
  review: {
    purpose: 'Run readiness gates and Technology Partner approval before client review.',
    phase: 'Phase 5 deep build',
    next: ['Auto checklist', 'Approval workflow', 'Reviewer comments'],
  },
  outputs: {
    purpose: 'Generate scope documents, SOW deliverables, estimation reports, and Build handoff bundles.',
    phase: 'Phase 5 deep build',
    next: ['Output cards', 'Readiness validation', 'HTML scope document preview'],
  },
};

export const lifecycle = [
  { id: 'intake', label: 'Intake', state: 'approved' },
  { id: 'triage', label: 'Triage', state: 'approved' },
  { id: 'solution', label: 'Solution Definition', state: 'reviewed' },
  { id: 'domain', label: 'Domain Model', state: 'in-progress' },
  { id: 'estimation', label: 'Estimation', state: 'pending' },
  { id: 'plan', label: 'Phasing & Planning', state: 'pending' },
  { id: 'outputs', label: 'Outputs', state: 'draft' },
];

export const engagements = [
  {
    client: 'Radiology Imaging Associates',
    solution: 'Imaging Operations Scope',
    stage: 'Domain Modeling',
    owner: 'Martyn Mason',
    status: 'In Progress',
    hours: 1432,
  },
  {
    client: 'Community Concierge Services',
    solution: '13 Week Forecast Platform',
    stage: 'Internal Review',
    owner: 'Marcos Bosche',
    status: 'Ready',
    hours: 880,
  },
  {
    client: 'Wentworth Institute of Technology',
    solution: 'Constituent Cultivation Pipeline',
    stage: 'Solution Definition',
    owner: 'Steve Smith',
    status: 'Draft',
    hours: 540,
  },
];

export const dashboardAttention = [
  {
    id: 'missing-tech-partner',
    tone: 'warning',
    title: 'Technology Partner review due',
    subtitle: 'Domain model needs approval before Estimation can close',
    action: { label: 'Review' },
  },
  {
    id: 'open-ris-question',
    tone: 'brand',
    title: '2 RIS questions unresolved',
    subtitle: 'Priority field authority and exception reason configurability',
  },
  {
    id: 'phase-hours',
    tone: 'danger',
    title: 'Phase 1 hours exceed dashboard target',
    subtitle: '648h modeled vs 620h working target',
  },
];

export const recentActivity = [
  {
    id: 'act-001',
    event: 'Discovery Summary approved',
    detail: 'Commercial Lead confirmed AI-assisted intake summary',
    owner: 'Martyn Mason',
    stage: 'Intake',
    when: 'Today',
  },
  {
    id: 'act-002',
    event: 'Route selected',
    detail: 'Triage decision set to New Engagement',
    owner: 'Technology Partner',
    stage: 'Triage',
    when: 'Today',
  },
  {
    id: 'act-003',
    event: 'Epics drafted',
    detail: '5 Phase 1 Epics created from L1 components',
    owner: 'Solution Lead',
    stage: 'Domain Model',
    when: 'Yesterday',
  },
  {
    id: 'act-004',
    event: 'SOW preview generated',
    detail: 'Phase 1 deliverables package refreshed from current model',
    owner: 'Commercial Lead',
    stage: 'Outputs',
    when: 'Yesterday',
  },
];

export const intake = {
  fields: {
    primaryContact: 'Alyssa Walker, VP Operations',
    businessArea: 'Imaging operations and case prioritization',
    urgency: 'Phase 1 live before Q4 operating review',
    budgetRange: '$350k to $450k target envelope',
    currentSystems: 'RIS, PACS, Azure AD, internal reporting warehouse',
  },
  documents: [
    { name: 'Discovery transcript', tag: 'Transcript', date: 'May 8' },
    { name: 'Current-state workflow sketch', tag: 'Diagram', date: 'May 9' },
    { name: 'Prior SOW deliverables', tag: 'Reference', date: 'May 10' },
  ],
  uploadPlaceholders: [
    { label: 'Client files', detail: 'PDF, DOCX, PPTX, XLSX, images, diagrams' },
    { label: 'Meeting transcripts', detail: 'Paste raw transcript or attach a text file' },
    { label: 'Working notes', detail: 'Topic-tagged notes from sales and solution calls' },
  ],
  summary:
    'RIA needs a structured worklist and triage workflow that surfaces urgent imaging studies, reduces manual queue management, and protects downstream reporting accuracy.',
};

export const solutionOverview = {
  clientProfile: {
    profile: 'Regional radiology group operating imaging workflows across multiple clinical sites.',
    context: 'Operations team manages study queues, exception handling, and daily readiness for radiologists.',
    origin: 'Opportunity surfaced during workflow discovery around urgent study prioritization and reporting traceability.',
    serviceOffering: 'Internal operations platform',
  },
  problem:
    'Case prioritization is distributed across people, queues, and exception reports, which makes urgent work hard to identify consistently and creates avoidable operational handoffs.',
  opportunity:
    'A scoped Phase 1 can centralize worklist visibility, automate core triage rules, and establish the integration foundation for future automation without overcommitting the first delivery cycle.',
  painPoints: [
    {
      title: 'Manual queue triage',
      severity: 'High',
      category: 'Operational',
      description: 'Queue ownership is distributed across people and exception reports, creating handoffs before clinical review can begin.',
      affected: 'Radiologist, Operations Manager',
    },
    {
      title: 'Priority signals are inconsistent',
      severity: 'High',
      category: 'Technical',
      description: 'Urgency data exists in source systems but is not normalized into one reliable worklist signal.',
      affected: 'Radiologist',
    },
    {
      title: 'Exception handling lacks traceability',
      severity: 'Medium',
      category: 'Compliance',
      description: 'Incomplete or conflicting source messages are resolved manually without a durable resolution history.',
      affected: 'Operations Manager',
    },
  ],
  wishList: [
    {
      title: 'Filter studies by priority',
      priority: 'Must Have',
      linkedPain: 'Priority signals are inconsistent',
      description: 'Radiologists can narrow the worklist by source-derived urgency, modality, and queue status.',
    },
    {
      title: 'Route exceptions to review queue',
      priority: 'Must Have',
      linkedPain: 'Exception handling lacks traceability',
      description: 'Unclassifiable studies move into an operations-owned resolution queue before clinical delay.',
    },
    {
      title: 'Expose operational metrics',
      priority: 'Should Have',
      linkedPain: 'Manual queue triage',
      description: 'Operations can monitor priority mix, unresolved exceptions, and worklist readiness.',
    },
  ],
  userGroups: [
    {
      name: 'Radiologist',
      role: 'Clinical user responsible for reviewing imaging studies.',
      mission: 'Complete the highest-priority studies with clear context and fewer manual queue decisions.',
      primaryExperience: 'Radiologist Worklist',
      secondaryExperience: 'Exception visibility',
    },
    {
      name: 'Operations Manager',
      role: 'Internal operations lead responsible for queue health and exception resolution.',
      mission: 'Monitor work distribution, exceptions, and readiness for daily imaging operations.',
      primaryExperience: 'Exception Triage Workflow',
      secondaryExperience: 'Operational reporting',
    },
  ],
  technologyNeeds: [
    { category: 'Frontend', need: 'Responsive internal web UI for worklist and queue operations', risk: 'Low' },
    { category: 'Backend', need: 'Asynchronous ingestion and replay handling for RIS messages', risk: 'Medium' },
    { category: 'Data', need: 'Auditable study state model with source-message lineage', risk: 'Medium' },
    { category: 'Security', need: 'Azure AD authentication with role-based access control', risk: 'Low' },
    { category: 'Integration', need: 'Inbound RIS order feed with priority mapping rules', risk: 'High' },
  ],
};

export const l1Components = [
  {
    id: 'worklist',
    name: 'Radiologist Worklist',
    type: 'Experience',
    description: 'Primary operational view for prioritizing and claiming imaging studies.',
    epics: [
      {
        id: 'filter-priority',
        name: 'Filter Studies by Priority',
        phase: 'Phase 1',
        status: 'Estimated',
        hours: 128,
        pain: 'Priority signals are inconsistent',
        stories: [
          {
            persona: 'Radiologist',
            action: 'filter studies by urgency and modality',
            outcome: 'critical cases surface before routine work',
            hours: 72,
            ac: ['Priority filter returns matching studies', 'Filter preference persists per user'],
          },
          {
            persona: 'System',
            action: 'apply priority labels from RIS messages',
            outcome: 'the worklist reflects source-system urgency',
            hours: 56,
            ac: ['Urgency label maps to configured priority', 'Unmapped values are flagged for review'],
          },
        ],
      },
      {
        id: 'claim-study',
        name: 'Claim Study for Review',
        phase: 'Phase 1',
        status: 'Ready for Estimation',
        hours: 96,
        pain: 'Manual queue triage',
        stories: [
          {
            persona: 'Radiologist',
            action: 'claim a study from the shared worklist',
            outcome: 'duplicate review work is prevented',
            hours: 96,
            ac: ['Claimed studies lock for the active reviewer', 'Expired claims return to the queue'],
          },
        ],
      },
    ],
  },
  {
    id: 'triage',
    name: 'Exception Triage Workflow',
    type: 'Workflow',
    description: 'Rules and review path for studies that cannot be auto-classified with confidence.',
    epics: [
      {
        id: 'route-exceptions',
        name: 'Route Exceptions to Review Queue',
        phase: 'Phase 1',
        status: 'Estimated',
        hours: 144,
        pain: 'Exception handling lacks traceability',
        stories: [
          {
            persona: 'System',
            action: 'route studies with incomplete priority inputs',
            outcome: 'exceptions are handled before clinical work is delayed',
            hours: 84,
            ac: ['Missing priority data creates an exception', 'Exception includes source message reference'],
          },
          {
            persona: 'Operations Manager',
            action: 'resolve exception reasons in a queue',
            outcome: 'the same issue does not repeat silently',
            hours: 60,
            ac: ['Resolved exceptions record owner and timestamp', 'Resolution reason is required'],
          },
        ],
      },
    ],
  },
  {
    id: 'ris',
    name: 'RIS Integration',
    type: 'Integration',
    description: 'Inbound study order and priority signal ingestion from the radiology information system.',
    epics: [
      {
        id: 'ingest-orders',
        name: 'Ingest Imaging Orders from RIS',
        phase: 'Phase 1',
        status: 'Estimated',
        hours: 192,
        pain: 'Priority signals are inconsistent',
        stories: [
          {
            persona: 'System',
            action: 'ingest imaging order messages',
            outcome: 'worklist data stays current without manual entry',
            hours: 132,
            ac: ['Orders create or update studies', 'Failed messages move to replay queue'],
          },
          {
            persona: 'System',
            action: 'store message lineage',
            outcome: 'delivery can audit how study state changed',
            hours: 60,
            ac: ['Each update references source message ID', 'Lineage is visible in study detail'],
          },
        ],
      },
    ],
  },
  {
    id: 'identity',
    name: 'Identity Platform',
    type: 'Foundation',
    description: 'Authentication and role mapping needed for internal clinical operations access.',
    epics: [
      {
        id: 'authenticate-users',
        name: 'Authenticate Users with Azure AD',
        phase: 'Phase 1',
        status: 'Estimated',
        hours: 88,
        pain: 'Manual queue triage',
        stories: [
          {
            persona: 'User',
            action: 'sign in with my existing RIA account',
            outcome: 'I can access the platform without a new credential',
            hours: 88,
            ac: ['Azure AD sign-in grants valid session', 'Inactive users cannot access the workspace'],
          },
        ],
      },
    ],
  },
];

export const phases = ['Backlog', 'Phase 1', 'Phase 2', 'Future', 'Out of Scope'];

export const topDownPlan = {
  totalBudget: 420000,
  blendedRate: 625,
  phaseTargets: {
    Backlog: 0,
    'Phase 1': 620,
    'Phase 2': 520,
    Future: 240,
    'Out of Scope': 0,
  },
  componentTargets: {
    worklist: 240,
    triage: 140,
    ris: 180,
    identity: 60,
  },
};

export const timelineMilestones = [
  { label: 'Kickoff', week: 1, phase: 'Phase 1' },
  { label: 'Discovery Complete', week: 2, phase: 'Phase 1' },
  { label: 'First Demo', week: 5, phase: 'Phase 1' },
  { label: 'Technical Production', week: 9, phase: 'Phase 1' },
  { label: 'Full Production', week: 12, phase: 'Phase 1' },
];

export const outputArtifacts = [
  {
    id: 'html',
    name: 'HTML Scope Document',
    status: 'Preview Ready',
    description: 'Client-facing navigable scope document with persistent section navigation.',
  },
  {
    id: 'markdown',
    name: 'Markdown Scope Export',
    status: 'Queued',
    description: 'Technical handoff bundle for documentation and version control.',
  },
  {
    id: 'sow',
    name: 'SOW Deliverables Package',
    status: 'Preview Ready',
    description: 'Phase-based deliverables organized by L1 Component and L2 Epic.',
  },
  {
    id: 'handoff',
    name: 'Build Handoff Bundle',
    status: 'Blocked',
    description: 'Structured package for downstream Build context setup after signature.',
  },
];

export const validationChecklist = [
  { label: 'Intake form complete', status: 'passed', area: 'Intake' },
  { label: 'Triage route approved', status: 'passed', area: 'Triage' },
  { label: 'User group missions defined', status: 'passed', area: 'Solution' },
  { label: 'Every Epic has at least one User Story', status: 'passed', area: 'Domain' },
  { label: 'Every User Story has acceptance criteria', status: 'passed', area: 'Domain' },
  { label: 'Phase 1 stories estimated in hours', status: 'passed', area: 'Estimation' },
  { label: 'Technology Partner approval recorded', status: 'review', area: 'Review' },
  { label: 'Build target configured', status: 'blocked', area: 'Outputs' },
];

export const reviewStates = [
  { label: 'Internal Review', owner: 'Technology Partner', state: 'review', detail: 'Domain model and estimate package need final quality review.' },
  { label: 'Client Review', owner: 'Commercial Lead', state: 'draft', detail: 'HTML scope document can be shared after internal approval.' },
  { label: 'SOW Package', owner: 'Commercial Lead', state: 'ready', detail: 'Deliverables preview is available for commercial packaging.' },
  { label: 'Build Handoff', owner: 'Delivery Manager', state: 'blocked', detail: 'Waiting on external SOW signature and build target configuration.' },
];

export const risksQuestionsAssumptions = {
  risks: [
    'RIS message availability may constrain Phase 1 automation depth.',
    'Clinical operations SMEs need protected review time during validation.',
  ],
  questions: [
    'Which RIS priority fields are authoritative when message values conflict?',
    'Should exception resolution reasons be client-configurable in v1?',
  ],
  assumptions: [
    'RIA Azure AD can support the required internal user group mappings.',
    'Phase 1 excludes client-facing portal access and downstream build execution tooling.',
  ],
};

export function getAllEpics() {
  return l1Components.flatMap((component) =>
    component.epics.map((epic) => ({
      ...epic,
      componentId: component.id,
      componentName: component.name,
      componentType: component.type,
    })),
  );
}

export function getHoursByPhase() {
  return phases.map((phase) => {
    const epics = getAllEpics().filter((epic) => epic.phase === phase);
    return {
      phase,
      epics,
      hours: epics.reduce((total, epic) => total + epic.hours, 0),
    };
  });
}

export function getHoursByComponent() {
  return l1Components.map((component) => ({
    ...component,
    hours: component.epics.reduce((total, epic) => total + epic.hours, 0),
  }));
}

export function getStoryRollups() {
  return getAllEpics().flatMap((epic) =>
    epic.stories.map((story, storyIndex) => ({
      id: `${epic.id}-story-${storyIndex + 1}`,
      epicId: epic.id,
      epicName: epic.name,
      componentName: epic.componentName,
      componentType: epic.componentType,
      phase: epic.phase,
      persona: story.persona,
      action: story.action,
      outcome: story.outcome,
      acceptanceCount: story.ac.length,
      hours: story.hours,
    })),
  );
}
