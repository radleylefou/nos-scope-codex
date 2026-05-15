## Decision: Equal-height row rhythm is a product composition rule

NOS cards can be reused in compact demos where intrinsic height is appropriate. In application screens, however, dashboard and document workspaces need row coherence: the tallest item in a row defines the row height and sibling panels stretch to match it.

## Decision: Keep component internals intact

The Scope app will override shell sizing from the app composition layer instead of changing local NOS primitives. This keeps the fix scoped and avoids surprising component demos.

## Rules

- Dashboard grids SHALL use a single row/column gap token rather than arbitrary margins.
- Grid children SHALL fill available track width.
- Two-column document and dashboard rows SHALL stretch items by default.
- Inner white content areas SHALL grow to consume the available card height.
- Empty visual holes between rows or columns SHALL be treated as layout bugs.
