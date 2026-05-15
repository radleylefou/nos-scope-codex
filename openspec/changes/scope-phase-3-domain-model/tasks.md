## 1. Specification

- [x] 1.1 Add OpenSpec proposal, design notes, requirements, and tasks
- [x] 1.2 Validate OpenSpec change

## 2. Data Model

- [x] 2.1 Add Acme L1 Component records grouped by type
- [x] 2.2 Add L2 Epics, L3 User Stories, and Acceptance Criteria
- [x] 2.3 Add validation summary and rollup helpers

## 3. Screen

- [x] 3.1 Replace Domain Model stub with board/list switcher
- [x] 3.2 Render L1 board grouped by Experience, Workflow, Integration, Foundation
- [x] 3.3 Render detail pane with selected L1, L2, L3, and AC
- [x] 3.4 Render hierarchy list view and validation callouts
- [x] 3.5 Preserve later-phase stubs for Estimation, Plan, Review, and Outputs

## 4. Verification

- [x] 4.1 Run `npx openspec validate scope-phase-3-domain-model`
- [x] 4.2 Run `npm run build`
- [x] 4.3 Browser smoke-check: dashboard -> Acme -> Domain Model -> Board/List -> detail selection
