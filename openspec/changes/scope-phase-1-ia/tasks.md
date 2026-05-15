## 1. Specification

- [x] 1.1 Copy `NOS2_Scope_SPEC.md` into app root as `SPEC.md`
- [x] 1.2 Add OpenSpec proposal, design notes, and requirements for Phase 1 IA
- [x] 1.3 Validate OpenSpec change

## 2. Data Model

- [x] 2.1 Add engagement directory with Acme, Northwind, and Meridian sample data
- [x] 2.2 Add workspace navigation groups and lifecycle metadata
- [x] 2.3 Add right rail context data

## 3. App Shell

- [x] 3.1 Replace flat `activeSection` state with `{ view, engagementId, section, subsection }`
- [x] 3.2 Render portfolio dashboard when no engagement is selected
- [x] 3.3 Render engagement workspace shell when an engagement is selected
- [x] 3.4 Keep lifecycle sections engagement-local and remove duplicate workflow tabs
- [x] 3.5 Render persistent right rail only in workspace mode

## 4. Verification

- [x] 4.1 Run `npx openspec validate scope-phase-1-ia`
- [x] 4.2 Run `npm run build`
- [x] 4.3 Browser smoke-check: dashboard -> select engagement -> navigate workspace sections -> return to dashboard
