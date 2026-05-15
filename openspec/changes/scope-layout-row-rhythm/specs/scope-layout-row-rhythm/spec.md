## ADDED Requirements

### Requirement: Dashboard modules fill grid tracks
Dashboard modules SHALL fill the width of their assigned grid track and SHALL NOT leave unused horizontal gaps caused by component max widths.

#### Scenario: Dashboard lower modules align
- **WHEN** the Engagement Dashboard renders lifecycle and activity modules
- **THEN** each module fills its grid column
- **AND** horizontal spacing between modules is controlled by the grid gap only

### Requirement: Row siblings share height
Grid siblings in dashboard and document workspace rows SHALL stretch to the height of the tallest sibling unless a screen explicitly opts out.

#### Scenario: Intake document panels align
- **WHEN** the Intake screen renders the form and document ingestion panels side by side
- **THEN** the shorter panel extends to the same outer height as the taller panel
- **AND** its inner white content area grows to match the available height

### Requirement: Product patterns document row rhythm
Product Pattern guidance SHALL state that application modules use equal horizontal and vertical gaps, fill assigned grid cells, and avoid empty holes between cards.

#### Scenario: Agent reads layout rule
- **WHEN** a builder reviews Product Patterns before composing an app screen
- **THEN** they can find guidance for equal-height row rhythm and no-gap module grids
