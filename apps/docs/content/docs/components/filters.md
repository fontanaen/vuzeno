---
title: Filters
description: A composable filter system with typed fields, operators, and filter chips.
tag: new
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

## Usage

```vue
<script setup lang="ts">
import { Field, Filters, Operator } from "@vuzeno/registry/ui/filters";
import { ref } from "vue";

const fields = ref([
  Field.TextField({
    key: "name",
    label: "Name",
    operators: [Operator.Contain({ label: "contains" })],
  }),
]);

const filters = ref([]);
</script>

<template>
  <Filters.Provider v-model:filters="filters" :fields="fields">
    <Filters.Menu>
      <Filters.MenuTrigger />
      <Filters.MenuContent />
    </Filters.Menu>

    <Filters.Group>
      <Filters.Item
        v-for="filter in filters"
        :key="`${filter.field}:${filter.operator}`"
        :filter="filter"
      />
    </Filters.Group>

    <Filters.Clear />
  </Filters.Provider>
</template>
```

## Composition

Use the following composition to build a Filters setup:

```
Filters.Provider
├── Filters.Menu
│   ├── Filters.MenuTrigger
│   └── Filters.MenuContent
├── Filters.Group
│   └── Filters.Item
└── Filters.Clear
```

## Examples

### Sizes and variants

Set `variant` and `size` on `Filters.Provider`, use `filter-style="short"` on `Filters.Group` to show only values.

::component-preview
---
name: FiltersShortDemo
---
::

### Custom menu trigger

Provide a custom trigger via the `Filters.MenuTrigger` slot.

::component-preview
---
name: FiltersCustomMenuDemo
---
::

## API Reference

### Components

| Component | Use |
| --- | --- |
| `Filters.Provider` | Root state and context. |
| `Filters.Menu` | Add-filter dropdown. |
| `Filters.MenuTrigger` | Default trigger, or custom slot. |
| `Filters.MenuContent` | Field list, groups, and submenus. |
| `Filters.Group` | Chip wrapper. |
| `Filters.Item` | One filter chip. |
| `Filters.Clear` | Clears all filters. |

### Filters.Provider

| Prop | Type | Default |
| --- | --- | --- |
| `filters` | `Filter[]` | `[]` |
| `fields` | `FilterFieldItem[]` | - |
| `variant` | `"outline" \| "secondary"` | `"outline"` |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |

### Filters.Group

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
