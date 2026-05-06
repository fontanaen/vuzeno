---
title: Filters
description: A composable filter system with typed fields, operators, and filter chips.
tag: updated
---

::component-preview 
---
name: FiltersDemo
---
::


## Features

- Typed field factories.
- Text, number, date, boolean, select, and multi-select values.
- Long or short filter chips.
- Groups and nested menus.
- `outline` and `secondary` variants.
- `sm`, `md`, and `lg` sizes.

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/filters.json
exec: true
---
::

## Examples

### Sizes and variants

Set `variant` and `size` on `FiltersProvider`, use `filter-style="short"` to show only values.

::component-preview
---
name: FiltersShortDemo
---
::

## API Reference

### Components

| Component | Use |
| --- | --- |
| `FiltersProvider` | Root state and context. |
| `FiltersMenu` | Add-filter dropdown. |
| `FiltersMenuTrigger` | Default trigger, or custom slot. |
| `FiltersMenuContent` | Field list, groups, and submenus. |
| `Filters` | Chip wrapper. |
| `FiltersItem` | One filter chip. |
| `FiltersClear` | Clears all filters. |

### FiltersProvider

| Prop | Type | Default |
| --- | --- | --- |
| `filters` | `Filter[]` | `[]` |
| `fields` | `FilterFieldItem[]` | - |
| `variant` | `"outline" \| "secondary"` | `"outline"` |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |

### Filters

| Prop | Type | Default |
| --- | --- | --- |
| `filterStyle` | `"long" \| "short"` | `"long"` |

### Fields

Build fields with `Field.*`.

| Helper | Extra options |
| --- | --- |
| `Field.TextField` | `minLength`, `maxLength` |
| `Field.NumberField` | `min`, `max`, `step`, `numberFormat` |
| `Field.DateField` | `min`, `max` |
| `Field.BooleanField` | `trueValue`, `falseValue` |
| `Field.Group` | `label`, `fields` |
| `Field.Submenu` | `label`, `icon`, `fields` |

Common field options: `key`, `label`, `icon`, `operators`.

```ts
const fields = [
  Field.TextField({
    key: "name",
    label: "Name",
    operators: [
      Operator.Contain({ label: "contains" })
    ],
  }),
];
```

### Operators

Build operators with `Operator.*`.

| Helper | Value | Input |
| --- | --- | --- |
| `Operator.Eq` | `eq` | `input` or `select` |
| `Operator.Neq` | `neq` | `input` or `select` |
| `Operator.Contain` | `contains` | `input` |
| `Operator.NotContain` | `not_contains` | `input` |
| `Operator.In` | `in` | `multi-select` |
| `Operator.Nin` | `nin` | `multi-select` |
| `Operator.Btw` | `btw` | `range` |
| `Operator.Null` | `is_null` | `none` |
| `Operator.NotNull` | `not_null` | `none` |
| `Operator.Gt` | `gt` | `input` |
| `Operator.Lt` | `lt` | `input` |

Common operator options: `label`, `default`, `defaultValue`, `options`.

```ts
Operator.In({
  label: "any of",
  options: {
    items: [
      { label: "Active", value: "active" },
      { label: "Pending", value: "pending" },
    ],
  },
});
```

### Filter

Active filters are plain objects.

```ts
const filters: Filter[] = [
  { field: "status", operator: "in", value: ["active", "pending"] },
  { field: "price", operator: "btw", value: [100, 500] },
];
```

`FilterValue` can be `string`, `string[]`, `number`, `number[]`, `boolean`, `CalendarDate`, `CalendarDate[]`, `{ start, end }`, or `null`.
