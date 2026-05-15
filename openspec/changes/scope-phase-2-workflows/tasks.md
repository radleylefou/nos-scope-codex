## 1. Specification

- [x] 1.1 Add OpenSpec proposal, design notes, requirements, and task checklist
- [x] 1.2 Validate OpenSpec change

## 2. Data Model

- [x] 2.1 Add Intake data for Acme including fields, uploads, transcript context, and AI summary
- [x] 2.2 Add Triage data including decision, notes, linked placeholders, and approval state
- [x] 2.3 Add Solution Definition data including tabs, narrative, pain points, wish list, user groups, and technology needs

## 3. Screens

- [x] 3.1 Replace Intake stub with structured form, upload placeholders, transcript area, and AI summary review
- [x] 3.2 Replace Triage stub with ChoiceGroup, routing notes, approval state, and next-step guidance
- [x] 3.3 Replace Solution Definition stub with PageTabs and tab-specific document workspace content
- [x] 3.4 Preserve downstream section stubs for later phases
- [x] 3.5 Remove duplicate lifecycle strip from workspace pages

## 4. Verification

- [x] 4.1 Run `npx openspec validate scope-phase-2-workflows`
- [x] 4.2 Run `npm run build`
- [x] 4.3 Browser smoke-check: dashboard -> Acme -> Intake -> Triage -> Solution tabs
