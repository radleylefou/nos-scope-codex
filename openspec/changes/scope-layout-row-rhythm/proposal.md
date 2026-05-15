## Why

The Scope app dashboard and workspace screens currently allow uneven card widths and top-aligned two-column sections. This creates visual holes between modules and makes right-side panels end early when the adjacent content is taller.

## What Changes

- Add app-level layout rules for equal-width, equal-height grid rows.
- Ensure NOS card and document shells fill their assigned grid tracks in Scope compositions.
- Make dashboard attention panels and workflow document panels stretch to the tallest item in each row.
- Codify the pattern so future NOS apps avoid masonry-like gaps in product screens.

## Impact

- Affects Scope app composition CSS only.
- Does not change NOS component APIs.
- Does not introduce new dependencies.
