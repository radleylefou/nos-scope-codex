import React, { useState } from 'react';
import {
  AssistBar,
  AIActionBar,
  Badge,
  Button,
  Callout,
  Checkbox,
  ChoiceGroup,
  DashboardCard,
  DescriptionList,
  DocumentOutcomeList,
  DocumentSection,
  FieldRow,
  Input,
  KanbanBoard,
  Modal,
  NeedsAttention,
  PageHeader,
  PageTabs,
  PipelineTable,
  SectionHeader,
  Select,
  SegmentedControl,
  SideNavigation,
  SideNavAccount,
  SideNavItem,
  SideNavNotificationButton,
  SideNavSearch,
  SideNavSection,
  StatusPill,
  TableHeader,
  TableCellIcon,
  TableCellSubtext,
  TableCellText,
  Textarea,
} from '../components/index.js';
import {
  adminSettings,
  appShellNavigation,
  dashboardFilters,
  domainModelByEngagement,
  engagementContextById,
  engagementDirectory,
  phaseFiveGovernanceByEngagement,
  phaseFourPlanByEngagement,
  phaseTwoWorkflowByEngagement,
  portfolioAttention,
  portfolioMetrics,
  portfolioReporting,
  recentActivity,
  sectionStubDetails,
  workspaceNavigationGroups,
  workspaceSections,
} from './scopeData.js';

const engagementColumns = [
  { key: 'client', label: 'Client', cellType: 'link', width: '240px' },
  { key: 'solution', label: 'Solution', cellType: 'subtext', subtextKey: 'status', width: '280px' },
  { key: 'stage', label: 'Stage', cellType: 'text', width: '180px' },
  { key: 'commercialLead', label: 'Commercial Lead', cellType: 'text', width: '180px' },
  { key: 'solutionLead', label: 'Solution Lead', cellType: 'text', width: '180px' },
  { key: 'hours', label: 'Est. Hours', cellType: 'text', width: '120px' },
  { key: 'lastUpdated', label: 'Updated', cellType: 'text', width: '120px' },
];

const INITIAL_STATE = {
  view: 'dashboard',
  engagementId: null,
  section: 'intake',
  subsection: null,
};

const PORTFOLIO_TITLES = {
  dashboard: 'Portfolio Dashboard',
  'portfolio-reporting': 'Portfolio Reporting',
  admin: 'Admin',
};

export function App() {
  const [appState, setAppState] = useState(INITIAL_STATE);
  const selectedEngagement = engagementDirectory.find((item) => item.id === appState.engagementId) ?? null;
  const isWorkspace = appState.view === 'engagement' && selectedEngagement;
  const activeSection = workspaceSections.find((section) => section.id === appState.section) ?? workspaceSections[0];

  const openEngagement = (engagementId) => {
    setAppState({
      view: 'engagement',
      engagementId,
      section: 'intake',
      subsection: null,
    });
  };

  const returnToDashboard = () => setAppState(INITIAL_STATE);

  const setWorkspaceSection = (section) => {
    setAppState((current) => ({
      ...current,
      section,
      subsection: null,
    }));
  };

  const setWorkspaceSubsection = (subsection) => {
    setAppState((current) => ({
      ...current,
      subsection,
    }));
  };

  const setPortfolioView = (view) => {
    setAppState({
      ...INITIAL_STATE,
      view,
    });
  };

  return (
    <div className={`scope-app ${isWorkspace ? 'scope-app--workspace' : 'scope-app--dashboard'}`}>
      <SideNavigation
        logo={<BrandLockup />}
        notification={<SideNavNotificationButton unread aria-label="Notifications" />}
        account={<SideNavAccount name="George Stepanov" meta={isWorkspace ? 'Engagement workspace' : 'Portfolio'} initials="GS" />}
      >
        <SideNavSearch placeholder={isWorkspace ? 'Search workspace' : 'Search engagements'} shortcut="⌘K" />

        {!isWorkspace && <GlobalNavigation activeView={appState.view} onNavigate={setPortfolioView} />}

        {isWorkspace && (
          <WorkspaceNavigation
            activeSection={activeSection.id}
            onBack={returnToDashboard}
            onSectionChange={setWorkspaceSection}
          />
        )}
      </SideNavigation>

      <main className="scope-main">
        <TopBar
          isWorkspace={isWorkspace}
          engagement={selectedEngagement}
          portfolioTitle={PORTFOLIO_TITLES[appState.view] ?? PORTFOLIO_TITLES.dashboard}
          onBack={returnToDashboard}
        />

        <div className="scope-content">
          {!isWorkspace && appState.view === 'dashboard' && (
            <PortfolioDashboard onOpenEngagement={openEngagement} />
          )}
          {!isWorkspace && appState.view === 'portfolio-reporting' && (
            <PortfolioReporting onOpenEngagement={openEngagement} />
          )}
          {!isWorkspace && appState.view === 'admin' && (
            <AdminScreen />
          )}
          {isWorkspace && (
            <WorkspaceShell
              engagement={selectedEngagement}
              activeSection={activeSection}
              subsection={appState.subsection}
              onSectionChange={setWorkspaceSection}
              onSubsectionChange={setWorkspaceSubsection}
            />
          )}
        </div>
      </main>

      {isWorkspace && <RightRail engagement={selectedEngagement} />}
    </div>
  );
}

function GlobalNavigation({ activeView, onNavigate }) {
  return (
    <SideNavSection title="Scope Platform">
      {appShellNavigation.map((item) => {
        const Icon = getShellIcon(item.id);
        const view = item.id === 'engagements' ? 'dashboard' : item.id;
        return (
          <SideNavItem
            key={item.id}
            icon={<Icon />}
            label={item.label}
            active={activeView === view}
            onClick={() => onNavigate(view)}
          />
        );
      })}
    </SideNavSection>
  );
}

function WorkspaceNavigation({ activeSection, onBack, onSectionChange }) {
  return (
    <>
      <SideNavSection title="Portfolio">
        <SideNavItem icon={<DashboardIcon />} label="Engagements" onClick={onBack} />
      </SideNavSection>

      {workspaceNavigationGroups.map((group) => (
        <SideNavSection title={group.title} key={group.title}>
          {group.items.map((item) => {
            const Icon = getWorkspaceIcon(item.id);
            return (
              <SideNavItem
                key={item.id}
                icon={<Icon />}
                label={item.label}
                active={activeSection === item.id}
                onClick={() => onSectionChange(item.id)}
              />
            );
          })}
        </SideNavSection>
      ))}
    </>
  );
}

function TopBar({ isWorkspace, engagement, portfolioTitle, onBack }) {
  return (
    <div className="scope-topbar">
      {isWorkspace ? (
        <div className="scope-topbar__context scope-topbar__context--workspace">
          <Button variant="ghost" size="sm" onClick={onBack}>Back to Engagements</Button>
          <div className="scope-topbar__title-group">
            <span>{engagement.client}</span>
            <strong>{engagement.solution}</strong>
          </div>
          <StatusPill variant={engagement.statusVariant} label={engagement.stage} surface="white" />
        </div>
      ) : (
        <div className="scope-topbar__context">
          <span>Nymbl Scope</span>
          <span>{portfolioTitle}</span>
        </div>
      )}

      <div className="scope-topbar__actions">
        <Button variant="ghost" size="sm" leadingIcon={<SearchIcon />}>Command</Button>
        <Button variant="secondary" size="sm" leadingIcon={<ExportIcon />}>Export</Button>
        <Button variant="primary" size="sm" leadingIcon={<SparkIcon />}>Generate</Button>
      </div>
    </div>
  );
}

function PortfolioDashboard({ onOpenEngagement }) {
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [createOpen, setCreateOpen] = useState(false);
  const filteredEngagements = engagementDirectory
    .map((item) => ({ ...item, hours: `${formatNumber(item.hours)}h` }))
    .filter((item) => {
      if (filter === 'mine') return ['Maya Chen', 'Alex Rivera', 'James Okafor'].includes(item.commercialLead) || ['Alex Rivera', 'James Okafor'].includes(item.solutionLead);
      if (filter === 'needs-action') return item.openQuestions > 1 || item.statusVariant === 'warning';
      if (filter === 'by-stage') return ['Domain Modeling', 'Estimation', 'Internal Review'].includes(item.stage);
      return true;
    })
    .filter((item) =>
      [item.client, item.solution, item.stage, item.commercialLead, item.solutionLead, item.status]
        .join(' ')
        .toLowerCase()
        .includes(searchValue.toLowerCase()),
    );

  return (
    <>
      <PageHeader
        title="Engagement Dashboard"
        subtitle="Portfolio entry point for active scoping work, review blockers, owners, and current lifecycle stage."
        status="in-progress"
        statusLabel="12 Active"
        metaItems={['Portfolio', 'Avg. scope-ready 8 days', 'Updated today']}
        actions={<Button variant="primary" size="sm" onClick={() => setCreateOpen(true)}>Create Engagement</Button>}
      />

      <section className="scope-section">
        <div className="scope-stack">
          <div className="scope-filter-bar" aria-label="Dashboard filters">
            {dashboardFilters.map((item) => (
              <button
                type="button"
                className={`scope-filter-chip ${filter === item.id ? 'scope-filter-chip--active' : ''}`}
                onClick={() => setFilter(item.id)}
                key={item.id}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="scope-metrics">
            {portfolioMetrics.map((metric) => (
              <Metric key={metric.label} label={metric.label} value={metric.value} detail={metric.detail} />
            ))}
          </div>

          <div className="scope-dashboard-grid">
            <PipelineTable
              title="Active Engagements"
              subtext="Open an engagement to enter its workspace. Intake, Triage, Solution, and Outputs are engagement-local."
              columns={engagementColumns}
              rows={filteredEngagements}
              searchValue={searchValue}
              onSearch={setSearchValue}
              onFilterBy={() => {}}
              onExport={() => {}}
              onCellClick={(row) => onOpenEngagement(row.id)}
              onOpenLink={(row) => onOpenEngagement(row.id)}
              aria-label="Active engagements"
            />

            <NeedsAttention
              title="Needs Attention"
              items={portfolioAttention.map((item) => ({
                ...item,
                action: item.id === 'acme-phase-1-blockers'
                  ? { label: 'Open', onClick: () => onOpenEngagement('acme-health') }
                  : item.action,
              }))}
            />
          </div>

          <div className="scope-grid scope-grid--two">
            <DashboardCard title="Lifecycle Distribution">
              <div className="scope-lifecycle">
                {engagementDirectory.map((item, index) => (
                  <button
                    type="button"
                    className="scope-lifecycle__item scope-lifecycle__item--button"
                    key={item.id}
                    onClick={() => onOpenEngagement(item.id)}
                  >
                    <span className="scope-lifecycle__index">{index + 1}</span>
                    <span className={`scope-lifecycle__dot scope-lifecycle__dot--${item.statusVariant}`} />
                    <span className="scope-lifecycle__label">{item.client}</span>
                    <StatusPill variant={item.statusVariant} label={item.stage} />
                  </button>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Recent Activity">
              <RecentActivityTable />
            </DashboardCard>
          </div>
        </div>
      </section>
      <CreateEngagementModal open={createOpen} onOpenChange={setCreateOpen} />
    </>
  );
}

function CreateEngagementModal({ open, onOpenChange }) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Create Engagement"
      description="Mock setup flow for a new scoped engagement."
      size="lg"
      footer={(
        <>
          <Button variant="secondary" size="sm" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button size="sm" onClick={() => onOpenChange(false)}>Create Draft</Button>
        </>
      )}
    >
      <div className="scope-form">
        <FieldRow columns={2}>
          <Input label="Client Name" placeholder="Client organization" />
          <Input label="Solution Name" placeholder="Working solution title" />
        </FieldRow>
        <FieldRow columns={2}>
          <Select
            label="Service Offering"
            placeholder="Select offering"
            options={[
              { value: 'App Dev', label: 'App Dev' },
              { value: 'Re-platform', label: 'Re-platform' },
              { value: 'AI Enablement', label: 'AI Enablement' },
            ]}
          />
          <Select
            label="Opportunity Origin"
            placeholder="Select origin"
            options={[
              { value: 'Inbound request', label: 'Inbound request' },
              { value: 'Expansion', label: 'Expansion' },
              { value: 'Referral', label: 'Referral' },
            ]}
          />
        </FieldRow>
        <FieldRow columns={2}>
          <Input label="Commercial Lead" placeholder="Owner" />
          <Input label="Solution Lead" placeholder="Owner" />
        </FieldRow>
        <FieldRow columns={2}>
          <Input label="Budget Range" placeholder="$250k-$400k" />
          <Input label="Target Timeline" placeholder="Q3 kickoff, Q4 launch" />
        </FieldRow>
        <Textarea label="Initial Context" rows={4} placeholder="What problem is the client trying to solve?" />
        <Callout tone="info">
          Draft creation is mocked in this prototype. A real implementation would create the engagement and open Intake.
        </Callout>
      </div>
    </Modal>
  );
}

function PortfolioReporting({ onOpenEngagement }) {
  return (
    <>
      <PageHeader
        title="Portfolio Reporting"
        subtitle="Cross-engagement visibility into scope readiness, owners, blockers, and variance."
        status="reviewed"
        statusLabel="Portfolio"
        metaItems={['12 active engagements', '4 at risk', 'Updated today']}
        actions={<Button variant="secondary" size="sm">Export Report</Button>}
      />
      <section className="scope-section">
        <div className="scope-stack">
          <div className="scope-metrics">
            {portfolioReporting.metrics.map((metric) => (
              <Metric key={metric.label} label={metric.label} value={metric.value} detail={metric.detail} />
            ))}
          </div>
          <div className="scope-grid scope-grid--two scope-workflow-grid">
            <DashboardCard title="Stage Distribution">
              <div className="scope-report-bars">
                {portfolioReporting.stageDistribution.map((item) => (
                  <div className="scope-report-bar-row" key={item.stage}>
                    <span>{item.stage}</span>
                    <div><span style={{ width: `${item.percent}%` }} /></div>
                    <strong>{item.count}</strong>
                  </div>
                ))}
              </div>
            </DashboardCard>
            <DashboardCard title="Owner Load">
              <div className="scope-simple-table">
                {portfolioReporting.ownerLoad.map((item) => (
                  <div className="scope-simple-row" key={item.owner}>
                    <strong>{item.owner}</strong>
                    <span>{item.role}</span>
                    <span>{item.engagements} engagements</span>
                    <Badge tone={item.blockers > 2 ? 'warning' : 'success'}>{item.blockers} blockers</Badge>
                  </div>
                ))}
              </div>
            </DashboardCard>
            <DocumentSection
              header={<SectionHeader title="Portfolio Blockers" status="warning" statusLabel={`${portfolioReporting.blockers.length} Items`} />}
              footer={<AssistBar label="Actions:" actions={[{ label: 'Summarize blockers' }, { label: 'Draft owner follow-ups' }]} />}
            >
              <div className="scope-simple-table">
                {portfolioReporting.blockers.map((item) => (
                  <button type="button" className="scope-simple-row scope-simple-row--button" onClick={() => item.client === 'Acme Health Systems' && onOpenEngagement('acme-health')} key={item.client}>
                    <strong>{item.client}</strong>
                    <span>{item.blocker}</span>
                    <span>{item.owner}</span>
                    <Badge tone={item.severity === 'High' ? 'warning' : 'neutral'}>{item.severity}</Badge>
                  </button>
                ))}
              </div>
            </DocumentSection>
            <DocumentSection header={<SectionHeader title="Reporting Notes" status="pending" statusLabel="Mocked" />}>
              <DescriptionList
                items={[
                  { label: 'Primary Use', value: 'Weekly operating review for scope readiness and delivery handoff risk.' },
                  { label: 'Source', value: 'Engagement directory, governance registers, estimation rollups, and review states.' },
                  { label: 'Next Deepening', value: 'Add real chart interactions and cross-engagement drill-downs.' },
                ]}
              />
            </DocumentSection>
          </div>
        </div>
      </section>
    </>
  );
}

function AdminScreen() {
  return (
    <>
      <PageHeader
        title="Admin"
        subtitle="Prototype configuration for lifecycle gates, governance rules, outputs, and team defaults."
        status="pending"
        statusLabel="Prototype"
        metaItems={['Internal only', 'No persistence', 'NOS settings']}
        actions={<Button variant="secondary" size="sm">Save Settings</Button>}
      />
      <section className="scope-section">
        <div className="scope-grid scope-grid--two scope-workflow-grid">
          <AdminSettingsSection title="Lifecycle Rules" rows={adminSettings.lifecycleRules} />
          <AdminSettingsSection title="Governance Rules" rows={adminSettings.governanceRules} />
          <AdminSettingsSection title="Output Settings" rows={adminSettings.outputSettings} />
          <AdminTeamDefaults rows={adminSettings.teamDefaults} />
          <AdminProcessSource />
        </div>
      </section>
    </>
  );
}

function AdminSettingsSection({ title, rows }) {
  return (
    <DocumentSection header={<SectionHeader title={title} status="reviewed" statusLabel={`${rows.length} Rules`} />}>
      <div className="scope-simple-table">
        {rows.map((row) => (
          <div className="scope-simple-row" key={row.name}>
            <strong>{row.name}</strong>
            <span>{row.setting}</span>
            <Badge tone={row.status === 'Active' ? 'success' : 'neutral'}>{row.status}</Badge>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
}

function AdminTeamDefaults({ rows }) {
  return (
    <DocumentSection header={<SectionHeader title="Team Defaults" status="pending" statusLabel={`${rows.length} Roles`} />}>
      <div className="scope-simple-table">
        {rows.map((row) => (
          <div className="scope-simple-row" key={row.role}>
            <strong>{row.role}</strong>
            <span>{row.defaultOwner}</span>
            <Badge tone={row.required === 'Yes' ? 'warning' : 'neutral'}>{row.required === 'Yes' ? 'Required' : 'Optional'}</Badge>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
}

function AdminProcessSource() {
  return (
    <DocumentSection header={<SectionHeader title="Process Source" status="reviewed" statusLabel="SPEC.md" />}>
      <DescriptionList
        items={[
          { label: 'Build source', value: 'Project-local SPEC.md translates the PRD into entities, screens, sample data, validation, and build phases.' },
          { label: 'Workbench source', value: 'NOS Product Patterns, token rules, reusable components, and app-specific semantic tokens.' },
          { label: 'Template rule', value: 'Scope-specific specs stay in this app context and are not reusable workbench templates.' },
        ]}
      />
    </DocumentSection>
  );
}

function WorkspaceShell({ engagement, activeSection, subsection, onSectionChange, onSubsectionChange }) {
  const workflow = phaseTwoWorkflowByEngagement[engagement.id] ?? phaseTwoWorkflowByEngagement['acme-health'];

  return (
    <>
      <PageHeader
        title={activeSection.label}
        subtitle={`${engagement.client} · ${engagement.solution}`}
        status={engagement.statusVariant}
        statusLabel={engagement.stage}
        metaItems={[engagement.serviceOffering, `Commercial ${engagement.commercialLead}`, `Solution ${engagement.solutionLead}`]}
        actions={<Button variant="secondary" size="sm">Snapshot</Button>}
      />

      <section className="scope-section">
        {activeSection.id === 'intake' && <IntakeScreen data={workflow.intake} />}
        {activeSection.id === 'triage' && <TriageScreen data={workflow.triage} onSectionChange={onSectionChange} />}
        {activeSection.id === 'solution' && (
          <SolutionDefinitionScreen
            data={workflow.solution}
            activeTab={subsection ?? 'introduction'}
            onTabChange={onSubsectionChange}
          />
        )}
        {activeSection.id === 'domain-model' && (
          <DomainModelScreen data={domainModelByEngagement[engagement.id] ?? domainModelByEngagement['acme-health']} />
        )}
        {activeSection.id === 'estimation' && (
          <EstimationScreen
            domain={domainModelByEngagement[engagement.id] ?? domainModelByEngagement['acme-health']}
            plan={phaseFourPlanByEngagement[engagement.id] ?? phaseFourPlanByEngagement['acme-health']}
            activeTab={subsection ?? 'overview'}
            onTabChange={onSubsectionChange}
          />
        )}
        {activeSection.id === 'plan' && (
          <PlanningScreen
            domain={domainModelByEngagement[engagement.id] ?? domainModelByEngagement['acme-health']}
            plan={phaseFourPlanByEngagement[engagement.id] ?? phaseFourPlanByEngagement['acme-health']}
            activeTab={subsection ?? 'phasing'}
            onTabChange={onSubsectionChange}
          />
        )}
        {activeSection.id === 'risks' && (
          <GovernanceScreen
            data={phaseFiveGovernanceByEngagement[engagement.id] ?? phaseFiveGovernanceByEngagement['acme-health']}
            activeTab={subsection ?? 'risks'}
            onTabChange={onSubsectionChange}
          />
        )}
        {activeSection.id === 'review' && (
          <ReviewScreen data={phaseFiveGovernanceByEngagement[engagement.id] ?? phaseFiveGovernanceByEngagement['acme-health']} />
        )}
        {activeSection.id === 'outputs' && (
          <OutputsScreen data={phaseFiveGovernanceByEngagement[engagement.id] ?? phaseFiveGovernanceByEngagement['acme-health']} />
        )}
        {!['intake', 'triage', 'solution', 'domain-model', 'estimation', 'plan', 'risks', 'review', 'outputs'].includes(activeSection.id) && (
          <WorkspaceSectionStub
            section={activeSection}
            engagement={engagement}
            onSectionChange={onSectionChange}
          />
        )}
      </section>
    </>
  );
}

function IntakeScreen({ data }) {
  return (
    <div className="scope-stack">
      <AIActionBar
        label="AI Actions:"
        actions={[
          { label: 'Generate Discovery Summary' },
          { label: 'Extract candidate pain points' },
          { label: 'Identify open questions' },
        ]}
      />

      <div className="scope-grid scope-grid--two scope-workflow-grid">
        <DocumentSection header={<SectionHeader title="Intake Form" status="reviewed" statusLabel="Structured" />}>
          <FieldRow columns={2}>
            <Input label="Client Name" defaultValue={data.fields.clientName} />
            <Input label="Primary Contact" defaultValue={data.fields.primaryContact} />
          </FieldRow>
          <FieldRow columns={2}>
            <Input label="Business Area / Department" defaultValue={data.fields.businessArea} />
            <Select
              label="Opportunity Origin"
              defaultValue={data.fields.opportunityOrigin}
              options={[
                { value: 'Inbound request', label: 'Inbound request' },
                { value: 'Outbound prospecting', label: 'Outbound prospecting' },
                { value: 'Referral', label: 'Referral' },
                { value: 'Expansion', label: 'Expansion' },
                { value: 'Other', label: 'Other' },
              ]}
            />
          </FieldRow>
          <FieldRow columns={2}>
            <Select
              label="Perceived Urgency"
              defaultValue={data.fields.perceivedUrgency}
              options={[
                { value: 'High - need scope within 2 weeks', label: 'High - need scope within 2 weeks' },
                { value: 'Medium', label: 'Medium' },
                { value: 'Low', label: 'Low' },
              ]}
            />
            <Input label="Anticipated Budget Range" defaultValue={data.fields.budgetRange} />
          </FieldRow>
          <Input label="Anticipated Timeline" defaultValue={data.fields.anticipatedTimeline} />
          <Textarea label="Primary Stakeholders" rows={3} defaultValue={data.fields.primaryStakeholders} />
          <Textarea label="Current Systems Involved" rows={3} defaultValue={data.fields.currentSystems} />
        </DocumentSection>

        <DocumentSection header={<SectionHeader title="Document Ingestion" status="pending" statusLabel="Mocked" />}>
          <div className="scope-upload-zone">
            <UploadIcon />
            <strong>Drop files here or click to upload</strong>
            <p>PDF, DOCX, PPTX, XLSX, images, and diagrams</p>
          </div>
          <div className="scope-file-list">
            {data.uploads.map((file) => (
              <div className="scope-file-row" key={file.id}>
                <DocumentIcon />
                <div>
                  <strong>{file.name}</strong>
                  <span>{file.type} · {file.size}</span>
                </div>
                <Badge tone="neutral">{file.tag}</Badge>
              </div>
            ))}
          </div>
        </DocumentSection>

        <DocumentSection header={<SectionHeader title="Transcript Ingestion" status="reviewed" statusLabel="Captured" />}>
          <FieldRow columns={2}>
            <Input label="Date" defaultValue={data.transcript.date} />
            <Input label="Topic" defaultValue={data.transcript.topic} />
          </FieldRow>
          <Input label="Attendees" defaultValue={data.transcript.attendees} />
          <Textarea label="Paste meeting transcript here" rows={5} defaultValue={data.transcript.excerpt} />
          <Button variant="secondary" size="sm">Add transcript</Button>
        </DocumentSection>

        <DocumentSection
          header={<SectionHeader title="AI Discovery Summary" status="pending" statusLabel="AI Draft" />}
          footer={<AssistBar label="Review actions:" actions={[{ label: 'Review' }, { label: 'Edit' }, { label: 'Approve' }]} />}
        >
          <div className="scope-ai-draft">
            <div className="scope-ai-draft__header">
              <Badge tone="brand">{data.aiSummary.title}</Badge>
              <span className="scope-mono">{data.aiSummary.generatedAt}</span>
            </div>
            <DescriptionList
              items={data.aiSummary.sections.map((section) => ({
                label: section.label,
                value: section.value,
              }))}
            />
          </div>
          {data.warnings.map((warning) => (
            <Callout tone="info" key={warning}>
              {warning}
            </Callout>
          ))}
        </DocumentSection>
      </div>
    </div>
  );
}

function TriageScreen({ data, onSectionChange }) {
  const [decision, setDecision] = useState(data.decision);
  const selectedDecision = data.decisionOptions.find((option) => option.value === decision) ?? data.decisionOptions[0];
  const showLookup = decision === 'change-request' || decision === 'expansion';
  const showApproval = decision === 'new-engagement' || decision === 'expansion';

  return (
    <div className="scope-stack">
      <div className="scope-grid scope-grid--two scope-workflow-grid">
        <DocumentSection header={<SectionHeader title="Triage Decision" status="approved" statusLabel={selectedDecision.label} />}>
          <ChoiceGroup
            ariaLabel="Triage decision"
            value={decision}
            onChange={setDecision}
            options={data.decisionOptions.map((option) => ({ label: option.label, value: option.value }))}
          />
          <div className="scope-choice-detail">
            <strong>{selectedDecision.label}</strong>
            <p>{selectedDecision.description}</p>
          </div>
        </DocumentSection>

        <DocumentSection header={<SectionHeader title="Triage Notes" status="reviewed" statusLabel="Captured" />}>
          <Textarea label="Rationale for this routing decision" rows={7} defaultValue={data.notes} />
          <Checkbox label="Decision reviewed with Commercial Lead" defaultChecked />
          <Checkbox label="Technology Partner approval required" defaultChecked={showApproval} />
        </DocumentSection>

        {showLookup && (
          <DocumentSection header={<SectionHeader title="Lookup Placeholders" status="pending" statusLabel="Required" />}>
            <Input label="Link to existing engagement" defaultValue={data.existingEngagement} />
            <div className="scope-placeholder-card">
              <LayersIcon />
              <strong>Prior Domain Model reference</strong>
              <p>{data.priorDomainModel}</p>
              <Button variant="link" size="sm">View reference</Button>
            </div>
          </DocumentSection>
        )}

        {showApproval && (
          <DocumentSection header={<SectionHeader title="Routing Approval" status="approved" statusLabel={data.approvalStatus} />}>
            <FieldRow columns={2}>
              <Select
                label="Technology Partner"
                defaultValue={data.technologyPartner}
                options={[
                  { value: 'Alex Rivera', label: 'Alex Rivera' },
                  { value: 'Celine Park', label: 'Celine Park' },
                  { value: 'James Okafor', label: 'James Okafor' },
                ]}
              />
              <Select
                label="Approval Status"
                defaultValue={data.approvalStatus}
                options={[
                  { value: 'Pending', label: 'Pending' },
                  { value: 'Approved', label: 'Approved' },
                ]}
              />
            </FieldRow>
            <Textarea label="Approver Comments" rows={4} defaultValue={data.approverComments} />
          </DocumentSection>
        )}

        <DocumentSection header={<SectionHeader title="Next Step Guidance" status="reviewed" statusLabel="Ready" />}>
          <Callout tone={decision === 'decline' ? 'warning' : 'success'}>
            {decision === 'decline' ? 'Close engagement after documenting the reason.' : data.nextStep}
          </Callout>
          <div className="scope-action-row">
            <Button variant={decision === 'decline' ? 'secondary' : 'primary'} size="sm">
              {decision === 'decline' ? 'Close engagement' : 'Advance to Solution Definition'}
            </Button>
            {decision !== 'decline' && (
              <Button variant="secondary" size="sm" onClick={() => onSectionChange('solution')}>
                Open Solution Definition
              </Button>
            )}
          </div>
        </DocumentSection>
      </div>
    </div>
  );
}

function SolutionDefinitionScreen({ data, activeTab, onTabChange }) {
  const tab = data.tabs.some((item) => item.id === activeTab) ? activeTab : data.tabs[0].id;

  return (
    <div className="scope-stack">
      <PageTabs tabs={data.tabs} activeTab={tab} onTabChange={onTabChange} aria-label="Solution Definition sections" />
      <AssistBar
        label="Assist:"
        actions={[
          { label: 'Generate pain points from intake' },
          { label: 'Draft problem statement' },
          { label: 'Suggest user groups' },
          { label: 'Suggest technology needs' },
          { label: 'Identify missing context' },
        ]}
      />

      {tab === 'introduction' && <SolutionIntroduction data={data.introduction} />}
      {tab === 'pain-points' && <SolutionPainPoints items={data.painPoints} />}
      {tab === 'wish-list' && <SolutionWishList items={data.wishList} />}
      {tab === 'user-groups' && <SolutionUserGroups items={data.userGroups} />}
      {tab === 'technology-needs' && <SolutionTechnologyNeeds items={data.technologyNeeds} />}
    </div>
  );
}

function SolutionIntroduction({ data }) {
  return (
    <div className="scope-grid scope-grid--two scope-workflow-grid">
      <DocumentSection header={<SectionHeader title="Client Profile" status="pending" statusLabel={data.status} />}>
        <div className="scope-badge-row">
          <Badge tone={data.status === 'Reviewed' ? 'success' : 'warning'}>{data.status}</Badge>
          <Badge tone="neutral">Client context</Badge>
        </div>
        <Textarea label="Client Profile" rows={4} defaultValue={data.clientProfile} />
        <Textarea label="Organizational Context" rows={4} defaultValue={data.organizationalContext} />
        <Textarea label="Engagement Origin" rows={3} defaultValue={data.engagementOrigin} />
      </DocumentSection>

      <DocumentSection
        header={<SectionHeader title="Strategic Framing" status="pending" statusLabel="Review" />}
        footer={<AssistBar label="Inline actions:" actions={[{ label: 'Edit' }, { label: 'Review' }, { label: 'Approve' }]} />}
      >
        <div className="scope-badge-row">
          <Badge tone="brand">Problem</Badge>
          <Badge tone="info">Opportunity</Badge>
          <Badge tone="neutral">Traceable to intake</Badge>
        </div>
        <Textarea label="Problem Statement" helperText={`${data.problemStatement.length} characters`} rows={5} defaultValue={data.problemStatement} />
        <Textarea label="Opportunity Statement" rows={5} defaultValue={data.opportunityStatement} />
      </DocumentSection>

      <DocumentSection header={<SectionHeader title="Definition Outcomes" status="reviewed" statusLabel="Traceable" />}>
        <DocumentOutcomeList
          items={[
            'Problem and opportunity are linked to intake context',
            'Pain points can trace to Epics in Domain Model',
            'User groups include mission statements before review',
          ]}
        />
      </DocumentSection>
    </div>
  );
}

function SolutionPainPoints({ items }) {
  const [selectedId, setSelectedId] = useState(items[0]?.id);
  const selected = items.find((item) => item.id === selectedId) ?? items[0];

  return (
    <div className="scope-grid scope-grid--two scope-workflow-grid">
      <DocumentSection
        header={<SectionHeader title="Pain Points" status="warning" statusLabel={`${items.length} identified`} />}
        footer={<AssistBar label="Actions:" actions={[{ label: 'Add Pain Point' }, { label: 'Generate from intake' }]} />}
      >
        <div className="scope-record-list">
          {items.map((item) => (
            <button
              type="button"
              className={`scope-record-row ${selected?.id === item.id ? 'scope-record-row--active' : ''}`}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <div>
                <strong>{item.title}</strong>
                <span>{item.affectedGroups}</span>
              </div>
              <Badge tone={item.severity === 'High' ? 'danger' : 'warning'}>{item.severity}</Badge>
              <Badge tone="neutral">{item.category}</Badge>
              {item.epicLinks.length === 0 && <Badge tone="warning">No Epic</Badge>}
            </button>
          ))}
        </div>
      </DocumentSection>

      {selected && (
        <DocumentSection header={<SectionHeader title="Pain Point Detail" status="pending" statusLabel="Drawer Stub" />}>
          <DescriptionList
            items={[
              { label: 'Title', value: selected.title },
              { label: 'Category', value: selected.category },
              { label: 'Severity', value: selected.severity },
              { label: 'Affected Groups', value: selected.affectedGroups },
              { label: 'Linked Epics', value: selected.epicLinks.length ? selected.epicLinks.join(', ') : 'None linked yet' },
              { label: 'Detail', value: selected.detail },
            ]}
          />
          {selected.epicLinks.length === 0 && (
            <Callout tone="warning">
              Pain point needs at least one linked Epic before estimation review.
            </Callout>
          )}
        </DocumentSection>
      )}
    </div>
  );
}

function SolutionWishList({ items }) {
  return (
    <DocumentSection
      header={<SectionHeader title="Wish List" status="reviewed" statusLabel={`${items.length} items`} />}
      footer={<AssistBar label="Actions:" actions={[{ label: 'Add Item' }, { label: 'Prioritize' }]} />}
    >
      <div className="scope-record-list">
        {items.map((item) => (
          <div className="scope-record-row scope-record-row--static" key={item.id}>
            <div>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </div>
            <Badge tone={getPriorityBadgeTone(item.priority)}>{item.priority}</Badge>
            <Badge tone="brand">{item.linkedPainPoints.length}</Badge>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
}

function SolutionUserGroups({ items }) {
  return (
    <div className="scope-grid scope-user-groups">
      {items.map((item) => (
        <DocumentSection
          key={item.id}
          header={<SectionHeader title={item.name} status={item.missionStatement ? 'reviewed' : 'warning'} statusLabel={item.missionStatement ? 'Mission set' : 'Needs mission'} />}
        >
          <DescriptionList
            items={[
              { label: 'Role', value: item.roleDescription },
              { label: 'Mission Statement', value: item.missionStatement },
              { label: 'Primary Experiences', value: item.primaryExperiences.join(', ') },
            ]}
          />
        </DocumentSection>
      ))}
    </div>
  );
}

function SolutionTechnologyNeeds({ items }) {
  return (
    <div className="scope-tech-needs">
      {items.map((item) => (
        <DocumentSection
          key={item.category}
          header={<SectionHeader title={item.category} status="pending" statusLabel={`${item.needs.length} needs`} />}
          footer={<AssistBar label="Actions:" actions={[{ label: 'Add need' }, { label: 'AI suggest' }]} />}
        >
          <DocumentOutcomeList items={item.needs.map((need) => ({ label: need, tone: 'neutral' }))} />
        </DocumentSection>
      ))}
    </div>
  );
}

function DomainModelScreen({ data }) {
  const [view, setView] = useState('board');
  const [selectedComponentId, setSelectedComponentId] = useState(data.components[0]?.id);
  const selectedComponent = data.components.find((component) => component.id === selectedComponentId) ?? data.components[0];

  return (
    <div className="scope-stack">
      <div className="scope-toolbar">
        <SegmentedControl
          size="sm"
          ariaLabel="Domain Model view"
          value={view}
          onChange={setView}
          options={[
            { value: 'board', label: 'Board' },
            { value: 'list', label: 'List' },
          ]}
        />
        <AIActionBar
          label="AI Actions:"
          actions={[
            { label: 'Generate Epics' },
            { label: 'Generate User Stories' },
            { label: 'Find scope gaps' },
          ]}
        />
      </div>

      <div className="scope-domain-validation">
        {data.validation.map((item) => (
          <Callout tone={item.tone} key={item.title}>
            <strong>{item.title}.</strong> {item.detail}
          </Callout>
        ))}
      </div>

      {view === 'board' ? (
        <div className="scope-domain-workspace">
          <DomainBoard
            data={data}
            selectedComponentId={selectedComponent?.id}
            onSelectComponent={setSelectedComponentId}
          />
          <DomainDetailPane component={selectedComponent} />
        </div>
      ) : (
        <DomainListView data={data} onSelectComponent={setSelectedComponentId} />
      )}
    </div>
  );
}

function DomainBoard({ data, selectedComponentId, onSelectComponent }) {
  return (
    <div className="scope-domain-board-core">
      {data.componentTypes.map((type) => {
        const components = data.components.filter((component) => component.type === type);
        return (
          <section className="scope-domain-type-column" data-type={type.toLowerCase()} key={type}>
            <div className="scope-domain-type-column__header">
              <span className={`scope-type-dot scope-type-dot--${type.toLowerCase()}`} />
              <strong>{type}</strong>
              <Badge tone="neutral">{components.length}</Badge>
            </div>
            <div className="scope-domain-type-column__body">
              {components.map((component) => (
                <button
                  type="button"
                  className={`scope-domain-component-card ${selectedComponentId === component.id ? 'scope-domain-component-card--active' : ''}`}
                  onClick={() => onSelectComponent(component.id)}
                  key={component.id}
                >
                  <div className="scope-domain-component-card__header">
                    <strong>{component.name}</strong>
                    <Badge tone={getComponentTypeBadgeTone(component.type)}>{component.type}</Badge>
                  </div>
                  <p>{component.description}</p>
                  <div className="scope-domain-card-meta">
                    <span>{component.epics.length} Epics</span>
                    <span className="scope-mono">{formatNumber(getComponentHours(component))}h</span>
                    <Badge tone={component.traceability === 'warning' ? 'warning' : 'success'}>{component.traceability === 'warning' ? 'Needs trace' : 'Traced'}</Badge>
                  </div>
                  <PhaseDots phases={getComponentPhases(component)} />
                </button>
              ))}
              <button type="button" className="scope-add-card">+ Add Component</button>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function DomainDetailPane({ component }) {
  const [selectedEpicId, setSelectedEpicId] = useState(component?.epics[0]?.id);
  const selectedEpic = component?.epics.find((epic) => epic.id === selectedEpicId) ?? component?.epics[0];
  const selectedStory = selectedEpic?.stories[0];

  if (!component) return null;

  return (
    <aside className="scope-domain-detail" aria-label="Domain Model detail pane">
      <DocumentSection
        header={<SectionHeader title={component.name} status={component.traceability === 'warning' ? 'warning' : 'reviewed'} statusLabel={component.type} />}
        footer={<AssistBar label="Component actions:" actions={[{ label: 'Generate Epics' }, { label: '+ Add Epic' }]} />}
      >
        <DescriptionList
          items={[
            { label: 'Type', value: component.type },
            { label: 'Description', value: component.description },
            { label: 'Total Estimate', value: `${formatNumber(getComponentHours(component))}h` },
            { label: 'Phase Coverage', value: getComponentPhases(component).join(', ') },
          ]}
        />
      </DocumentSection>

      <DocumentSection header={<SectionHeader title="L2 Epics" status="pending" statusLabel={`${component.epics.length} Epics`} />}>
        <div className="scope-domain-epic-list">
          {component.epics.map((epic) => (
            <button
              type="button"
              className={`scope-domain-epic-row ${selectedEpic?.id === epic.id ? 'scope-domain-epic-row--active' : ''}`}
              onClick={() => setSelectedEpicId(epic.id)}
              key={epic.id}
            >
              <div>
                <strong>{epic.name}</strong>
                <span>{epic.stories.length} stories · {epic.linkedPainPoints.length || 'No'} pain links</span>
              </div>
              <Badge tone={epic.phase === 'Phase 1' ? 'success' : 'neutral'}>{epic.phase}</Badge>
              <span className="scope-mono">{getEpicHours(epic) ? `${formatNumber(getEpicHours(epic))}h` : 'Unestimated'}</span>
            </button>
          ))}
        </div>
      </DocumentSection>

      {selectedEpic && (
        <DocumentSection
          header={<SectionHeader title="L3 Stories" status={selectedEpic.status === 'Estimated' ? 'reviewed' : 'warning'} statusLabel={selectedEpic.status} />}
          footer={<AssistBar label="Epic actions:" actions={[{ label: 'Generate User Stories' }, { label: '+ Add Story' }]} />}
        >
          <div className="scope-story-stack">
            {selectedEpic.stories.map((story) => (
              <StoryCard story={story} key={story.id} />
            ))}
          </div>
        </DocumentSection>
      )}

      {selectedStory && (
        <DocumentSection
          header={<SectionHeader title="Acceptance Criteria" status="reviewed" statusLabel={`${selectedStory.acceptanceCriteria.length} AC`} />}
          footer={<AssistBar label="AC actions:" actions={[{ label: 'Generate AC' }, { label: '+ Add AC' }]} />}
        >
          <DescriptionList
            items={[
              { label: 'Story', value: formatStory(selectedStory) },
              { label: 'Priority', value: selectedStory.priority },
              { label: 'Complexity', value: selectedStory.complexity },
            ]}
          />
          <div className="scope-ac-list">
            {selectedStory.acceptanceCriteria.map((criterion) => (
              <div className="scope-ac-row" key={criterion.statement}>
                <Checkbox checked readOnly aria-label={criterion.statement} />
                <div>
                  <strong>{criterion.statement}</strong>
                  <span>{criterion.testMethod} · {criterion.qualityStatus}</span>
                </div>
              </div>
            ))}
          </div>
          <Callout tone="danger">
            Rejected AC example: "Should be user-friendly" is too vague. AC must be observable and testable.
          </Callout>
        </DocumentSection>
      )}
    </aside>
  );
}

function DomainListView({ data, onSelectComponent }) {
  return (
    <DocumentSection header={<SectionHeader title="Hierarchy List" status="reviewed" statusLabel="Expanded" />}>
      <div className="scope-hierarchy-table">
        <div className="scope-hierarchy-row scope-hierarchy-row--head">
          <span>Phase</span>
          <span>L1 Component</span>
          <span>L2 Epic</span>
          <span>Stories</span>
          <span>Estimate</span>
          <span>Status</span>
        </div>
        {data.components.flatMap((component) =>
          component.epics.map((epic) => (
            <button
              type="button"
              className="scope-hierarchy-row"
              onClick={() => onSelectComponent(component.id)}
              key={`${component.id}-${epic.id}`}
            >
              <span>{epic.phase}</span>
              <span>{component.name}</span>
              <strong>{epic.name}</strong>
              <span>{epic.stories.length}</span>
              <span className="scope-mono">{getEpicHours(epic) ? `${formatNumber(getEpicHours(epic))}h` : 'Unestimated'}</span>
              <Badge tone={epic.status === 'Estimated' ? 'success' : 'warning'}>{epic.status}</Badge>
            </button>
          )),
        )}
      </div>
    </DocumentSection>
  );
}

function StoryCard({ story }) {
  return (
    <article className="scope-story-card">
      <p>{formatStory(story)}</p>
      <div className="scope-domain-card-meta">
        <Badge tone={getPriorityBadgeTone(story.priority)}>{story.priority}</Badge>
        <Badge tone={story.complexity === 'Complex' ? 'warning' : 'success'}>{story.complexity}</Badge>
        <span className="scope-mono">{story.estimate ? `${story.estimate}h` : 'Unestimated'}</span>
        <span>{story.acceptanceCriteria.length} AC</span>
      </div>
    </article>
  );
}

function PhaseDots({ phases }) {
  return (
    <div className="scope-phase-dots" aria-label={`Phase coverage: ${phases.join(', ')}`}>
      {['Backlog', 'Phase 1', 'Phase 2', 'Future'].map((phase) => (
        <span className={phases.includes(phase) ? 'scope-phase-dot scope-phase-dot--active' : 'scope-phase-dot'} title={phase} key={phase} />
      ))}
    </div>
  );
}

function getComponentHours(component) {
  return component.epics.reduce((total, epic) => total + getEpicHours(epic), 0);
}

function getEpicHours(epic) {
  return epic.stories.reduce((total, story) => total + (story.estimate ?? 0), 0);
}

function getComponentPhases(component) {
  return [...new Set(component.epics.map((epic) => epic.phase))];
}

function getPriorityBadgeTone(priority) {
  if (priority === 'Must') return 'danger';
  if (priority === 'Should') return 'warning';
  return 'neutral';
}

function getComponentTypeBadgeTone(type) {
  if (type === 'Experience') return 'experience';
  if (type === 'Workflow') return 'workflow';
  if (type === 'Integration') return 'info';
  return 'item';
}

function getBadgeToneFromVariant(variant) {
  if (['approved', 'reviewed', 'success'].includes(variant)) return 'success';
  if (variant === 'warning') return 'warning';
  if (variant === 'danger') return 'danger';
  if (variant === 'brand') return 'brand';
  if (variant === 'info') return 'info';
  return 'neutral';
}

function formatStory(story) {
  return `As a ${story.persona}, I want to ${story.action}, so that ${story.outcome}.`;
}

function EstimationScreen({ domain, plan, activeTab, onTabChange }) {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'l3-table', label: 'L3 Estimation Table' },
    { id: 'rollup', label: 'Roll-Up View' },
    { id: 'reconciliation', label: 'Top-Down Reconciliation' },
  ];
  const tab = tabs.some((item) => item.id === activeTab) ? activeTab : tabs[0].id;
  const rollup = getEstimationRollup(domain, plan);

  return (
    <div className="scope-stack">
      <PageTabs tabs={tabs} activeTab={tab} onTabChange={onTabChange} aria-label="Estimation views" />

      {tab === 'overview' && <EstimationOverview rollup={rollup} plan={plan} />}
      {tab === 'l3-table' && <EstimationTable stories={rollup.stories} />}
      {tab === 'rollup' && <EstimationRollupView rollup={rollup} />}
      {tab === 'reconciliation' && <EstimationReconciliation rollup={rollup} plan={plan} />}
    </div>
  );
}

function EstimationOverview({ rollup, plan }) {
  const bottomUpCost = rollup.totalHours * plan.blendedRate;
  const variance = bottomUpCost - plan.topDownEnvelope;
  const variancePercent = plan.topDownEnvelope ? Math.round((variance / plan.topDownEnvelope) * 100) : 0;

  return (
    <div className="scope-stack">
      <div className="scope-metrics">
        <Metric label="Modeled Estimate" value={`${formatNumber(rollup.totalHours)}h`} detail="Bottom-up from L3 stories" />
        <Metric label="Phase 1 Estimate" value={`${formatNumber(rollup.phaseHours['Phase 1'] ?? 0)}h`} detail="Current modeled Phase 1" />
        <Metric label="Phase 2 Estimate" value={`${formatNumber(rollup.phaseHours['Phase 2'] ?? 0)}h`} detail="Current modeled Phase 2" />
        <Metric label="Unestimated Stories" value={String(rollup.unestimatedStories.length)} detail="Need expert input" />
      </div>

      <div className="scope-grid scope-grid--two">
        <DocumentSection header={<SectionHeader title="Top-Down Envelope" status="reviewed" statusLabel={formatCurrency(plan.topDownEnvelope)} />}>
          <DescriptionList
            items={[
              { label: 'Bottom-up Cost', value: formatCurrency(bottomUpCost) },
              { label: 'Variance', value: `${formatCurrency(Math.abs(variance))} ${variance <= 0 ? 'under' : 'over'} (${variancePercent}%)` },
              { label: 'Blended Rate', value: `${formatCurrency(plan.blendedRate)}/h` },
            ]}
          />
        </DocumentSection>
        <DocumentSection header={<SectionHeader title="Estimation Confidence" status="pending" statusLabel={plan.estimation.confidence} />}>
          <DescriptionList
            items={[
              { label: 'Blocked Epics', value: String(plan.estimation.blockedEpics) },
              { label: 'Estimated Stories', value: String(rollup.stories.length - rollup.unestimatedStories.length) },
              { label: 'Working Note', value: 'Modeled scope is intentionally partial until future/provider and reporting epics are approved.' },
            ]}
          />
        </DocumentSection>
      </div>

      <div className="scope-domain-validation">
        {plan.warnings.map((warning) => (
          <Callout tone="warning" key={warning}>{warning}</Callout>
        ))}
      </div>
    </div>
  );
}

function EstimationTable({ stories }) {
  return (
    <DocumentSection header={<SectionHeader title="L3 Estimation Table" status="pending" statusLabel={`${stories.length} Stories`} />}>
      <div className="scope-estimation-table">
        <div className="scope-estimation-row scope-estimation-row--head">
          <span>Story</span>
          <span>Parent Epic</span>
          <span>L1</span>
          <span>Phase</span>
          <span>Complexity</span>
          <span>Est.</span>
          <span>Override</span>
          <span>Final</span>
          <span>Status</span>
        </div>
        {stories.map((story) => (
          <div className="scope-estimation-row" key={story.id}>
            <span>{formatStory(story)}</span>
            <span>{story.epicName}</span>
            <span>{story.componentName}</span>
            <Badge tone={story.phase === 'Phase 1' ? 'success' : 'neutral'}>{story.phase}</Badge>
            <Badge tone={story.complexity === 'Complex' ? 'warning' : 'success'}>{story.complexity}</Badge>
            <span className="scope-mono">{story.estimate ? `${story.estimate}h` : 'Unestimated'}</span>
            <Input size="sm" aria-label={`Override for ${story.id}`} defaultValue="" placeholder="-" />
            <span className="scope-mono">{story.estimate ? `${story.estimate}h` : 'TBD'}</span>
            <Badge tone={story.estimate ? 'success' : 'warning'}>{story.estimate ? 'AI Suggested' : 'Unestimated'}</Badge>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
}

function EstimationRollupView({ rollup }) {
  return (
    <DocumentSection header={<SectionHeader title="Roll-Up View" status="reviewed" statusLabel={`${formatNumber(rollup.totalHours)}h`} />}>
      <div className="scope-rollup-tree">
        {Object.entries(rollup.phases).map(([phase, components]) => (
          <div className="scope-rollup-phase" key={phase}>
            <div className="scope-rollup-tree__row scope-rollup-tree__row--phase">
              <strong>{phase}</strong>
              <span className="scope-mono">{formatNumber(getPhaseTotal(components))}h</span>
            </div>
            {components.map((component) => (
              <div className="scope-rollup-component" key={`${phase}-${component.id}`}>
                <div className="scope-rollup-tree__row">
                  <span>{component.name}</span>
                  <span className="scope-mono">{formatNumber(component.hours)}h</span>
                </div>
                {component.epics.map((epic) => (
                  <div className="scope-rollup-epic" key={`${phase}-${component.id}-${epic.id}`}>
                    <div className="scope-rollup-tree__row">
                      <span>{epic.name}</span>
                      <span className="scope-mono">{getEpicHours(epic) ? `${formatNumber(getEpicHours(epic))}h` : 'Unestimated'}</span>
                    </div>
                    {epic.stories.map((story) => (
                      <div className="scope-rollup-story" key={story.id}>
                        <span>{story.action}</span>
                        <span className="scope-mono">{story.estimate ? `${story.estimate}h` : 'TBD'}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </DocumentSection>
  );
}

function EstimationReconciliation({ rollup, plan }) {
  const [decision, setDecision] = useState('defer-epics');

  return (
    <div className="scope-grid scope-grid--two scope-workflow-grid">
      <DocumentSection header={<SectionHeader title="Top-Down vs Bottom-Up" status="warning" statusLabel="Needs decision" />}>
        <div className="scope-reconciliation-table">
          <div className="scope-reconciliation-row scope-reconciliation-row--head">
            <span>Phase</span>
            <span>Envelope</span>
            <span>Bottom-Up</span>
            <span>Delta</span>
          </div>
          {plan.phaseOrder.map((phase) => {
            const envelope = plan.phaseTargets[phase]?.budget ?? 0;
            const actual = (rollup.phaseHours[phase] ?? 0) * plan.blendedRate;
            const delta = actual - envelope;
            return (
              <div className="scope-reconciliation-row" key={phase}>
                <strong>{phase}</strong>
                <span>{formatCurrency(envelope)}</span>
                <span>{formatCurrency(actual)}</span>
                <Badge tone={delta > envelope * 0.1 ? 'danger' : delta > 0 ? 'warning' : 'success'}>{`${delta <= 0 ? '-' : '+'}${formatCurrency(Math.abs(delta))}`}</Badge>
              </div>
            );
          })}
        </div>
      </DocumentSection>

      <DocumentSection header={<SectionHeader title="Variance Decision" status="pending" statusLabel="Draft" />}>
        <ChoiceGroup
          ariaLabel="Variance decision"
          value={decision}
          onChange={setDecision}
          options={plan.estimation.decisionOptions}
        />
        <Textarea label="Rationale" rows={5} defaultValue={plan.estimation.rationale} />
        <Button size="sm">Log Decision</Button>
      </DocumentSection>
    </div>
  );
}

function getEstimationRollup(domain, plan) {
  const stories = domain.components.flatMap((component) =>
    component.epics.flatMap((epic) =>
      epic.stories.map((story) => ({
        ...story,
        componentId: component.id,
        componentName: component.name,
        componentType: component.type,
        epicId: epic.id,
        epicName: epic.name,
        phase: epic.phase,
      })),
    ),
  );
  const phaseHours = plan.phaseOrder.reduce((acc, phase) => ({ ...acc, [phase]: 0 }), {});
  stories.forEach((story) => {
    phaseHours[story.phase] = (phaseHours[story.phase] ?? 0) + (story.estimate ?? 0);
  });
  const phases = plan.phaseOrder.reduce((acc, phase) => {
    const components = domain.components
      .map((component) => {
        const epics = component.epics.filter((epic) => epic.phase === phase);
        return {
          ...component,
          epics,
          hours: epics.reduce((total, epic) => total + getEpicHours(epic), 0),
        };
      })
      .filter((component) => component.epics.length > 0);
    return { ...acc, [phase]: components };
  }, {});

  return {
    stories,
    phases,
    phaseHours,
    totalHours: stories.reduce((total, story) => total + (story.estimate ?? 0), 0),
    unestimatedStories: stories.filter((story) => story.estimate == null),
  };
}

function getPhaseTotal(components) {
  return components.reduce((total, component) => total + component.hours, 0);
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

function PlanningScreen({ domain, plan, activeTab, onTabChange }) {
  const tabs = [
    { id: 'phasing', label: 'Phasing' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'team', label: 'Team Structure' },
    { id: 'budget', label: 'Budget' },
  ];
  const tab = tabs.some((item) => item.id === activeTab) ? activeTab : tabs[0].id;
  const rollup = getEstimationRollup(domain, plan);

  return (
    <div className="scope-stack">
      <PageTabs tabs={tabs} activeTab={tab} onTabChange={onTabChange} aria-label="Planning views" />

      {tab === 'phasing' && <PlanningPhasing domain={domain} plan={plan} rollup={rollup} />}
      {tab === 'timeline' && <PlanningTimeline domain={domain} plan={plan} />}
      {tab === 'team' && <PlanningTeam plan={plan} />}
      {tab === 'budget' && <PlanningBudget plan={plan} rollup={rollup} />}
    </div>
  );
}

function PlanningPhasing({ domain, plan, rollup }) {
  const epics = domain.components.flatMap((component) =>
    component.epics.map((epic) => ({
      ...epic,
      componentName: component.name,
      componentType: component.type,
      hours: getEpicHours(epic),
    })),
  );
  const columns = plan.phaseOrder.map((phase) => {
    const phaseEpics = epics.filter((epic) => epic.phase === phase);
    const target = plan.phaseTargets[phase] ?? { hours: 0, budget: 0 };
    const hours = rollup.phaseHours[phase] ?? 0;

    return {
      id: phase.toLowerCase().replace(/\s+/g, '-'),
      label: phase,
      probability: `${formatNumber(hours)}h`,
      tone: getPhaseKanbanTone(phase, hours, target.hours),
      cards: phaseEpics.map((epic) => ({
        id: epic.id,
        title: epic.name,
        date: epic.componentName,
        amount: epic.hours ? `${formatNumber(epic.hours)}h` : 'TBD',
        eyebrow: `${epic.componentType} · ${epic.status}`,
      })),
    };
  });

  return (
    <div className="scope-stack">
      <div className="scope-toolbar">
        <SegmentedControl
          size="sm"
          ariaLabel="What-if mode"
          defaultValue="committed"
          options={[
            { value: 'committed', label: 'Committed' },
            { value: 'what-if', label: 'What-if' },
          ]}
        />
        <Button variant="secondary" size="sm">Commit phase changes</Button>
      </div>

      <div className="scope-domain-validation">
        {plan.warnings.map((warning) => (
          <Callout tone="warning" key={warning}>{warning}</Callout>
        ))}
      </div>

      <KanbanBoard columns={columns} className="scope-phase-kanban" aria-label="Phase planning board" />
    </div>
  );
}

function getPhaseKanbanTone(phase, hours, targetHours) {
  if (targetHours && hours > targetHours) return 'warning';
  if (phase === 'Phase 1') return 'success';
  if (phase === 'Phase 2') return 'brand';
  if (phase === 'Future') return 'info';
  return 'neutral';
}

function PlanningTimeline({ domain, plan }) {
  const epics = domain.components.flatMap((component) =>
    component.epics.map((epic) => ({
      ...epic,
      componentName: component.name,
      componentType: component.type,
      window: plan.timeline.epicWindows[epic.id] ?? { start: 1, end: 2 },
    })),
  );

  return (
    <DocumentSection header={<SectionHeader title="Timeline" status="pending" statusLabel={`${plan.timeline.weeks} weeks`} />}>
      <div className="scope-gantt-v2" style={{ '--timeline-weeks': plan.timeline.weeks }}>
        <div className="scope-gantt-v2__weeks">
          <span />
          {Array.from({ length: plan.timeline.weeks }, (_, index) => (
            <span key={index + 1}>W{index + 1}</span>
          ))}
        </div>
        <div className="scope-gantt-v2__milestones">
          <span />
          {plan.timeline.milestones.map((milestone) => (
            <span style={{ gridColumn: milestone.week + 1 }} key={milestone.label}>{milestone.label}</span>
          ))}
        </div>
        {epics.map((epic) => (
          <div className="scope-gantt-v2__row" key={epic.id}>
            <div className="scope-gantt-v2__label">
              <strong>{epic.name}</strong>
              <span>{epic.componentName}</span>
            </div>
            <div
              className={`scope-gantt-v2__bar scope-gantt-v2__bar--${epic.componentType.toLowerCase()}`}
              style={{ gridColumn: `${epic.window.start + 1} / ${epic.window.end + 2}` }}
            >
              {epic.phase}
            </div>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
}

function PlanningTeam({ plan }) {
  return (
    <div className="scope-grid scope-grid--two scope-workflow-grid">
      <TeamTable title="Client-Side" rows={plan.team.client} />
      <TeamTable title="Nymbl Delivery" rows={plan.team.nymbl} />
    </div>
  );
}

function TeamTable({ title, rows }) {
  return (
    <DocumentSection header={<SectionHeader title={title} status="reviewed" statusLabel={`${rows.length} Roles`} />}>
      <div className="scope-team-table">
        {rows.map((row) => (
          <div className="scope-team-row" key={`${title}-${row.role}`}>
            <strong>{row.role}</strong>
            <span>{row.name}</span>
            <span>{row.allocation}</span>
            <span>{row.responsibility ?? `${row.billable} · ${row.rate}`}</span>
            <span>{row.availability ?? row.rate}</span>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
}

function PlanningBudget({ plan, rollup }) {
  return (
    <div className="scope-grid scope-grid--two scope-workflow-grid">
      <DocumentSection header={<SectionHeader title="Budget by Phase" status="warning" statusLabel="Compare" />}>
        <div className="scope-reconciliation-table">
          <div className="scope-reconciliation-row scope-reconciliation-row--head">
            <span>Phase</span>
            <span>Envelope</span>
            <span>Bottom-Up</span>
            <span>Variance</span>
          </div>
          {plan.phaseOrder.map((phase) => {
            const envelope = plan.phaseTargets[phase]?.budget ?? 0;
            const actual = (rollup.phaseHours[phase] ?? 0) * plan.blendedRate;
            const variance = actual - envelope;
            return (
              <div className="scope-reconciliation-row" key={phase}>
                <strong>{phase}</strong>
                <span>{formatCurrency(envelope)}</span>
                <span>{formatCurrency(actual)}</span>
                <Badge tone={variance > 0 ? 'warning' : 'success'}>{`${variance <= 0 ? '-' : '+'}${formatCurrency(Math.abs(variance))}`}</Badge>
              </div>
            );
          })}
        </div>
      </DocumentSection>

      <DocumentSection header={<SectionHeader title="Sensitivity Panel" status="pending" statusLabel="Internal" />}>
        <DescriptionList
          items={[
            { label: 'Scenario', value: 'What if Phase 2 scope reduces by 20%?' },
            { label: 'Current Phase 2 Envelope', value: formatCurrency(plan.phaseTargets['Phase 2'].budget) },
            { label: 'Reduced Phase 2 Envelope', value: formatCurrency(plan.phaseTargets['Phase 2'].budget * 0.8) },
            { label: 'Internal Note', value: 'Margin model is placeholder-only until pricing assumptions are confirmed.' },
          ]}
        />
        <Callout tone="info">
          Budget values reference modeled scope and should be reconciled before client review.
        </Callout>
      </DocumentSection>
    </div>
  );
}

function GovernanceScreen({ data, activeTab, onTabChange }) {
  const tabs = [
    { id: 'risks', label: 'Risks' },
    { id: 'questions', label: 'Open Questions' },
    { id: 'assumptions', label: 'Assumptions' },
  ];
  const tab = tabs.some((item) => item.id === activeTab) ? activeTab : tabs[0].id;
  const blockingQuestions = data.questions.filter((question) => question.blocksPhase1 && question.status === 'Open');

  return (
    <div className="scope-stack">
      <PageTabs tabs={tabs} activeTab={tab} onTabChange={onTabChange} aria-label="Governance views" />
      {tab === 'questions' && blockingQuestions.length > 0 && (
        <Callout tone="warning">
          <strong>{blockingQuestions.length} open questions are blocking Phase 1 Estimation.</strong> Resolve or explicitly defer before advancing.
        </Callout>
      )}
      {tab === 'risks' && <GovernanceRiskTable rows={data.risks} />}
      {tab === 'questions' && <GovernanceQuestionTable rows={data.questions} />}
      {tab === 'assumptions' && <GovernanceAssumptionTable rows={data.assumptions} />}
    </div>
  );
}

function GovernanceRiskTable({ rows }) {
  const [selectedId, setSelectedId] = useState(rows[0]?.id);
  const selected = rows.find((row) => row.id === selectedId) ?? rows[0];

  return (
    <div className="scope-grid scope-grid--two scope-workflow-grid">
      <DocumentSection
        header={<SectionHeader title="Risk Register" status="warning" statusLabel={`${rows.length} Risks`} />}
        footer={<AssistBar label="Actions:" actions={[{ label: '+ Add Risk' }, { label: 'Surface common risks' }]} />}
      >
        <GovernanceTable
          rows={rows}
          selectedId={selected?.id}
          onSelect={setSelectedId}
          columns={['Description', 'Category', 'Score', 'Owner', 'Status']}
          renderRow={(row) => [row.description, row.category, row.score, row.owner, row.status]}
        />
      </DocumentSection>
      {selected && <GovernanceDetail title="Risk Detail" record={selected} fields={['description', 'category', 'likelihood', 'impact', 'owner', 'status', 'mitigation']} />}
    </div>
  );
}

function GovernanceQuestionTable({ rows }) {
  const [selectedId, setSelectedId] = useState(rows[0]?.id);
  const selected = rows.find((row) => row.id === selectedId) ?? rows[0];

  return (
    <div className="scope-grid scope-grid--two scope-workflow-grid">
      <DocumentSection
        header={<SectionHeader title="Open Questions" status="warning" statusLabel={`${rows.filter((row) => row.status === 'Open').length} Open`} />}
        footer={<AssistBar label="Actions:" actions={[{ label: '+ Add Question' }, { label: 'Draft resolutions' }]} />}
      >
        <GovernanceTable
          rows={rows}
          selectedId={selected?.id}
          onSelect={setSelectedId}
          columns={['Question', 'Impact', 'Owner', 'Status', 'Blocks P1']}
          renderRow={(row) => [row.question, row.impactArea, row.owner, row.status, row.blocksPhase1 ? 'Yes' : 'No']}
        />
      </DocumentSection>
      {selected && <GovernanceDetail title="Question Detail" record={selected} fields={['question', 'impactArea', 'owner', 'status', 'resolution']} />}
    </div>
  );
}

function GovernanceAssumptionTable({ rows }) {
  const [selectedId, setSelectedId] = useState(rows[0]?.id);
  const selected = rows.find((row) => row.id === selectedId) ?? rows[0];

  return (
    <div className="scope-grid scope-grid--two scope-workflow-grid">
      <DocumentSection
        header={<SectionHeader title="Assumptions" status="reviewed" statusLabel={`${rows.length} Active`} />}
        footer={<AssistBar label="Actions:" actions={[{ label: '+ Add Assumption' }, { label: 'Validate assumptions' }]} />}
      >
        <GovernanceTable
          rows={rows}
          selectedId={selected?.id}
          onSelect={setSelectedId}
          columns={['Statement', 'Impact', 'Confidence', 'Status', 'Trigger']}
          renderRow={(row) => [row.statement, row.impactArea, row.confidence, row.status, row.trigger]}
        />
      </DocumentSection>
      {selected && <GovernanceDetail title="Assumption Detail" record={selected} fields={['statement', 'impactArea', 'confidence', 'status', 'trigger']} />}
    </div>
  );
}

function GovernanceTable({ rows, selectedId, onSelect, columns, renderRow }) {
  return (
    <div className="scope-governance-table">
      <div className="scope-governance-row scope-governance-row--head">
        {columns.map((column) => <span key={column}>{column}</span>)}
      </div>
      {rows.map((row) => {
        const cells = renderRow(row);
        return (
          <button
            type="button"
            className={`scope-governance-row ${selectedId === row.id ? 'scope-governance-row--active' : ''}`}
            onClick={() => onSelect(row.id)}
            key={row.id}
          >
            {cells.map((cell, index) => (
              index === cells.length - 1
                ? <Badge key={`${row.id}-${index}`} tone={getBadgeToneFromVariant(getGovernanceVariant(String(cell)))}>{String(cell)}</Badge>
                : <span key={`${row.id}-${index}`}>{String(cell || 'None')}</span>
            ))}
          </button>
        );
      })}
    </div>
  );
}

function GovernanceDetail({ title, record, fields }) {
  return (
    <DocumentSection header={<SectionHeader title={title} status={getGovernanceVariant(record.status ?? record.score)} statusLabel={record.status ?? record.score} />}>
      <DescriptionList
        items={fields.map((field) => ({
          label: toLabel(field),
          value: Array.isArray(record[field]) ? record[field].join(', ') : (record[field] || 'Not set'),
        }))}
      />
      {record.linkedItems && (
        <DocumentOutcomeList items={record.linkedItems.map((item) => ({ label: item, tone: 'neutral' }))} />
      )}
    </DocumentSection>
  );
}

function getGovernanceVariant(value) {
  if (['High', 'Open', 'Yes', 'Changes Requested', 'Requires approval', 'Blocked'].includes(value)) return 'warning';
  if (['Mitigated', 'Answered', 'Validated', 'Approved', 'Ready to preview', 'Ready to generate'].includes(value)) return 'reviewed';
  if (['Low', 'Closed', 'No'].includes(value)) return 'approved';
  if (['Requires signed SOW'].includes(value)) return 'danger';
  return 'pending';
}

function toLabel(value) {
  return value.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase());
}

function ReviewScreen({ data }) {
  const { review } = data;

  return (
    <div className="scope-stack">
      <div className="scope-metrics">
        <Metric label="Readiness Score" value={`${review.score.passed}/${review.score.total}`} detail="Checks passing" />
        <Metric label="Approval Status" value={review.approval.status} detail={`Reviewer ${review.approval.reviewer}`} />
        <Metric label="Blocked Checks" value={String(countReviewStatus(review.groups, 'blocked'))} detail="Must resolve before client review" />
        <Metric label="Review Items" value={String(review.groups.reduce((total, group) => total + group.items.length, 0))} detail="System-derived gates" />
      </div>

      <div className="scope-grid scope-grid--two scope-workflow-grid">
        <DocumentSection header={<SectionHeader title="Readiness Checklist" status="warning" statusLabel="Internal Review" />}>
          <div className="scope-review-checklist">
            {review.groups.map((group) => (
              <section className="scope-review-group" key={group.title}>
                <h3>{group.title}</h3>
                {group.items.map((item) => (
                  <div className="scope-review-check" key={item.label}>
                    <Checkbox checked={item.status === 'passed'} disabled aria-label={item.label} />
                    <span>{item.label}</span>
                    <Badge tone={item.status === 'passed' ? 'success' : item.status === 'blocked' ? 'danger' : 'warning'}>{toLabel(item.status)}</Badge>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </DocumentSection>

        <DocumentSection header={<SectionHeader title="Approval Workflow" status="warning" statusLabel={review.approval.status} />}>
          <FieldRow columns={2}>
            <Input label="Reviewer" defaultValue={review.approval.reviewer} />
            <Select
              label="Status"
              defaultValue={review.approval.status}
              options={[
                { value: 'Pending', label: 'Pending' },
                { value: 'Approved', label: 'Approved' },
                { value: 'Changes Requested', label: 'Changes Requested' },
              ]}
            />
          </FieldRow>
          <Textarea label="Reviewer Comments" rows={6} defaultValue={review.approval.comments} />
          <DescriptionList items={[{ label: 'Last Updated', value: review.approval.updatedAt }]} />
          <div className="scope-action-row">
            <Button size="sm">Approve</Button>
            <Button variant="secondary" size="sm">Request Changes</Button>
          </div>
        </DocumentSection>
      </div>
    </div>
  );
}

function OutputsScreen({ data }) {
  const [selectedId, setSelectedId] = useState(data.outputs[0]?.id);
  const selected = data.outputs.find((artifact) => artifact.id === selectedId) ?? data.outputs[0];

  return (
    <div className="scope-stack">
      <div className="scope-output-grid-v2">
        {data.outputs.map((artifact) => (
          <button
            type="button"
            className={`scope-output-card-v2 ${selected?.id === artifact.id ? 'scope-output-card-v2--active' : ''}`}
            onClick={() => setSelectedId(artifact.id)}
            key={artifact.id}
          >
            <div className="scope-output-card-v2__header">
              <strong>{artifact.title}</strong>
              <Badge tone={getBadgeToneFromVariant(artifact.status)}>{artifact.format}</Badge>
            </div>
            <p>{artifact.audience}</p>
            <span>{artifact.lastGenerated}</span>
            <Badge tone={getBadgeToneFromVariant(artifact.status)}>{artifact.readiness}</Badge>
            <div className="scope-output-actions">
              <Button size="sm">Generate</Button>
              <Button variant="secondary" size="sm">Preview</Button>
              <Button variant="ghost" size="sm">Export</Button>
            </div>
          </button>
        ))}
      </div>

      <div className="scope-grid scope-grid--two scope-workflow-grid">
        <DocumentSection header={<SectionHeader title="Readiness Validation" status={selected.status} statusLabel={selected.readiness} />}>
          {selected.requires.length > 0 ? (
            <DocumentOutcomeList items={selected.requires.map((item) => ({ label: `Requires: ${item}`, tone: 'neutral' }))} />
          ) : (
            <Callout tone="success">Ready to generate with current reviewed scope.</Callout>
          )}
        </DocumentSection>

        <DocumentSection header={<SectionHeader title="HTML Scope Document Preview" status="reviewed" statusLabel="Client" />}>
          <ScopeDocumentPreview preview={data.preview} />
        </DocumentSection>
      </div>
    </div>
  );
}

function ScopeDocumentPreview({ preview }) {
  return (
    <div className="scope-doc-preview">
      <aside>
        {preview.sections.map((section) => <span key={section}>{section}</span>)}
      </aside>
      <main>
        <span className="scope-section-label">Executive Summary</span>
        <h2>{preview.title}</h2>
        <p>{preview.oneLiner}</p>
        <div className="scope-preview-tiles">
          <div><strong>Phase 1</strong><span>{preview.phaseHeadline}</span></div>
          <div><strong>Timeline</strong><span>{preview.timeline}</span></div>
          <div><strong>Budget</strong><span>{preview.budget}</span></div>
        </div>
        <div className="scope-preview-columns">
          <div>
            <strong>Key Risks</strong>
            {preview.keyRisks.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div>
            <strong>Open Questions</strong>
            {preview.openQuestions.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </main>
    </div>
  );
}

function countReviewStatus(groups, status) {
  return groups.reduce((total, group) => total + group.items.filter((item) => item.status === status).length, 0);
}

function WorkspaceSectionStub({ section, engagement, onSectionChange }) {
  const details = sectionStubDetails[section.id] ?? {
    purpose: 'Workspace section defined by SPEC.md.',
    phase: 'Future deep build',
    next: ['Replace this stub with the full section inventory from SPEC.md'],
  };
  const adjacentSections = workspaceSections.filter((item) => item.id !== section.id).slice(0, 3);

  return (
    <div className="scope-grid scope-grid--two scope-workspace-stub">
      <DocumentSection
        header={<SectionHeader title={`${section.label} Shell`} status="draft" statusLabel="Phase 1 Stub" />}
        footer={<AssistBar label="Next build:" actions={details.next.map((item) => ({ label: item }))} />}
      >
        <DescriptionList
          items={[
            { label: 'Selected engagement', value: `${engagement.client} · ${engagement.solution}` },
            { label: 'Purpose', value: details.purpose },
            { label: 'Build phase', value: details.phase },
            { label: 'State model', value: `{ view: "engagement", engagementId: "${engagement.id}", section: "${section.id}", subsection: null }` },
          ]}
        />
      </DocumentSection>

      <DocumentSection header={<SectionHeader title="Section Requirements" status="pending" statusLabel="From SPEC.md" />}>
        <div className="scope-stub-requirements">
          {details.next.map((item) => (
            <div className="scope-stub-requirement" key={item}>
              <span className="scope-checklist__mark">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </DocumentSection>

      <DocumentSection header={<SectionHeader title="Workspace Navigation Check" status="reviewed" statusLabel="Phase 1" />}>
        <div className="scope-placeholder-grid">
          {adjacentSections.map((item) => (
            <button
              className="scope-placeholder-card scope-placeholder-card--button"
              type="button"
              key={item.id}
              onClick={() => onSectionChange(item.id)}
            >
              <DocumentIcon />
              <strong>{item.label}</strong>
              <p>Navigate without leaving the selected engagement workspace.</p>
            </button>
          ))}
        </div>
      </DocumentSection>

      <Callout tone="info">
        <strong>Phase 1 stops at the shell.</strong> This section is intentionally stubbed so the portfolio-to-workspace architecture can be verified before deeper workflow screens are rebuilt from SPEC.md.
      </Callout>
    </div>
  );
}

function RightRail({ engagement }) {
  const context = engagementContextById[engagement.id] ?? {
    documents: [],
    aiSuggestions: [],
    openQuestions: [],
    assumptions: [],
  };

  return (
    <aside className="scope-rail" aria-label="Engagement context">
      <div className="scope-rail__section">
        <span className="scope-section-label">Context</span>
        <h2>{engagement.client}</h2>
        <p>{engagement.solution}</p>
        <div className="scope-rail__meta">
          <StatusPill variant={engagement.statusVariant} label={engagement.stage} />
          <span className="scope-mono">{engagement.readiness} ready</span>
        </div>
      </div>

      <RailSection title="Open Questions" badge={context.openQuestions.length} items={context.openQuestions} />
      <RailSection title="Assumptions" badge={context.assumptions.length} items={context.assumptions} />
      <RailSection title="AI Suggestions" badge={context.aiSuggestions.length} items={context.aiSuggestions} />
      <RailSection title="Documents" badge={context.documents.length} items={context.documents} />
    </aside>
  );
}

function RailSection({ title, badge, items }) {
  return (
    <div className="scope-rail__section">
      <div className="scope-rail__heading">
        <span className="scope-section-label">{title}</span>
        <StatusPill variant={badge > 0 ? 'pending' : 'approved'} label={String(badge)} />
      </div>
      <RailList items={items} />
    </div>
  );
}

function RailList({ items }) {
  return (
    <ul className="scope-rail-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function Metric({ label, value, detail }) {
  return (
    <DashboardCard title={label}>
      <div className="scope-metric">
        <strong>{value}</strong>
        <p>{detail}</p>
      </div>
    </DashboardCard>
  );
}

function RecentActivityTable() {
  return (
    <div className="scope-activity-table">
      <TableHeader title="Activity" subtext="Latest scope events" actions={[{ label: 'View All' }]} />
      <div className="scope-activity-table__body" role="table" aria-label="Recent activity">
        {recentActivity.map((activity) => (
          <div className="scope-activity-table__row" role="row" key={activity.id}>
            <TableCellIcon icon={<ClockIcon />} text={activity.when} />
            <TableCellSubtext text={activity.event} subtext={activity.detail} />
            <TableCellText text={activity.owner} />
            <Badge tone="success">{activity.stage}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandLockup() {
  return (
    <div className="scope-brand">
      <span className="scope-brand__mark">NS</span>
      <span>Nymbl Scope</span>
    </div>
  );
}

function getShellIcon(id) {
  const icons = {
    engagements: DashboardIcon,
    'portfolio-reporting': ReportIcon,
    admin: SettingsIcon,
  };

  return icons[id] ?? DashboardIcon;
}

function getWorkspaceIcon(id) {
  const icons = {
    intake: ClipboardIcon,
    triage: RouteIcon,
    solution: DocumentIcon,
    artifacts: DiagramIcon,
    'domain-model': LayersIcon,
    estimation: CalculatorIcon,
    plan: TimelineIcon,
    risks: ReviewIcon,
    review: ReviewIcon,
    outputs: ExportIcon,
  };

  return icons[id] ?? DocumentIcon;
}

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

function DashboardIcon() {
  return <IconPath path="M3 4.5H7V9H3V4.5ZM9 4.5H13V7H9V4.5ZM9 9H13V13.5H9V9ZM3 11H7V13.5H3V11Z" />;
}

function ClipboardIcon() {
  return <IconPath path="M5.5 3.5H10.5M6 5H10M4 4.5H3.5V13H12.5V4.5H12M5.5 8H10.5M5.5 10.5H9" />;
}

function RouteIcon() {
  return <IconPath path="M4 4.5H7.5V8H4V4.5ZM8.5 10H12V13.5H8.5V10ZM7.5 6.25H9.5C10.6 6.25 11.5 7.15 11.5 8.25V10" />;
}

function DocumentIcon() {
  return <IconPath path="M4 2.75H9.5L12 5.25V13.25H4V2.75ZM9.5 2.75V5.25H12M5.75 7.5H10.25M5.75 10H9.25" />;
}

function LayersIcon() {
  return <IconPath path="M8 2.75L13 5.25L8 7.75L3 5.25L8 2.75ZM4.5 8L8 9.75L11.5 8M4.5 10.5L8 12.25L11.5 10.5" />;
}

function CalculatorIcon() {
  return <IconPath path="M4 2.75H12V13.25H4V2.75ZM5.75 5H10.25M6 7.5H6.01M8 7.5H8.01M10 7.5H10.01M6 10H6.01M8 10H8.01M10 10H10.01" />;
}

function TimelineIcon() {
  return <IconPath path="M3 4.5H13M5 4.5V12M8 4.5V12M11 4.5V12M4.25 8H6.75M7.25 10.5H9.75M10.25 7H12.25" />;
}

function ReviewIcon() {
  return <IconPath path="M4 3.5H12V12.5H4V3.5ZM5.75 6H10.25M5.75 8.25H10.25M5.75 10.5H8.5" />;
}

function ExportIcon() {
  return <IconPath path="M8 2.75V9.5M5.5 7L8 9.5L10.5 7M4 12.5H12" />;
}

function ReportIcon() {
  return <IconPath path="M3.5 12.5V8.5M6.5 12.5V5.5M9.5 12.5V7M12.5 12.5V3.5" />;
}

function SettingsIcon() {
  return <IconPath path="M8 5.5A2.5 2.5 0 1 1 8 10.5A2.5 2.5 0 0 1 8 5.5ZM8 2.75V4M8 12V13.25M12.25 8H13.5M2.5 8H3.75M11.1 4.9L12 4M4 12L4.9 11.1M11.1 11.1L12 12M4 4L4.9 4.9" />;
}

function SearchIcon() {
  return <IconPath path="M7.25 11.25A4 4 0 1 1 7.25 3.25A4 4 0 0 1 7.25 11.25ZM10.25 10.25L13 13" />;
}

function SparkIcon() {
  return <IconPath path="M8.5 2.5L9.75 6.25L13.5 7.5L9.75 8.75L8.5 12.5L7.25 8.75L3.5 7.5L7.25 6.25L8.5 2.5Z" fill />;
}

function ClockIcon() {
  return <IconPath path="M8 3A5 5 0 1 1 8 13A5 5 0 0 1 8 3ZM8 5.5V8.25L10 9.5" />;
}

function DiagramIcon() {
  return <IconPath path="M3 4.5H6.5V7.5H3V4.5ZM9.5 3.5H13V6.5H9.5V3.5ZM9.5 9.5H13V12.5H9.5V9.5ZM6.5 6H8.5L9.5 5M6.5 6L9.5 11" />;
}

function UploadIcon() {
  return <IconPath path="M8 10.5V3.5M5.5 6L8 3.5L10.5 6M4 12.5H12" />;
}

function IconPath({ path, fill = false }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={path}
        fill={fill ? 'currentColor' : 'none'}
        stroke={fill ? 'none' : 'currentColor'}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
