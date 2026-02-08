---
title: Filters
description: A composable filter system for building dynamic, type-aware filter UIs with dropdown field selection, operators, and multiple value input types
name: filters
---

<script setup lang="ts">
import FiltersDemo from "../../.vitepress/components/demo/FiltersDemo.vue"
</script>

# Filters

A composable filter system to build dynamic filter UIs. Define fields (optionally grouped), operators, and value types; users add or remove filters from a dropdown and see active filters as chips with inline value editing.

<ComponentPreview :component="FiltersDemo">

```vue
<script setup lang="ts">
import { CalendarDate, today } from "@internationalized/date";
import type { FieldGroup, Filter } from "@vuetella/registry/ui/filter";
import { FiltersClear, FiltersGroup, FiltersMenu, FiltersProvider } from "@vuetella/registry/ui/filter";
import { CalendarIcon, DollarSignIcon, TagIcon, ToggleRightIcon, UserIcon } from "lucide-vue-next";
import { computed, h, type Ref, ref } from "vue";

const fields = ref<FieldGroup[]>([
  {
    group: "Base",
    fields: [
      {
        key: "status",
        name: "Status",
        type: "text",
        icon: TagIcon,
        options: {
          searchable: true,
          items: [
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
            { label: "Pending", value: "pending" },
            { label: "Cancelled", value: "cancelled" },
          ],
          optionDisplay: (option) => {
            const color = {
              active: "bg-green-500",
              inactive: "bg-red-500",
              pending: "bg-yellow-500",
              cancelled: "bg-gray-500",
            } as const;
            return h("div", { class: "flex items-center gap-2" }, [h("span", { class: `size-2 rounded-full ${color[option.value as keyof typeof color]}` }), h("span", option.label)]);
          },
        },
        operators: [
          { label: "is", value: "eq", inputType: "select" },
          { label: "is not", value: "neq", inputType: "select" },
        ],
      },
      {
        key: "name",
        name: "Name",
        type: "text",
        icon: UserIcon,
        operators: [
          { label: "is", value: "eq" },
          { label: "contains", value: "contains" },
          { label: "starts with", value: "starts_with" },
        ],
      },
    ],
  },
  {
    group: "Dates & Numbers",
    fields: [
      {
        key: "created_at",
        name: "Created At",
        type: "date",
        icon: CalendarIcon,
        min: today(),
        max: today().add({ days: 10 }),
        multiple: false,
        operators: [
          { label: "is", value: "eq" },
          { label: "between", value: "btw", inputType: "date-range" },
        ],
      },
      {
        key: "price",
        name: "Price",
        type: "number",
        icon: DollarSignIcon,
        min: 0,
        max: 1000,
        step: 10,
        numberFormat: { style: "currency", currency: "USD", maximumFractionDigits: 0 },
        operators: [
          { label: "less than", value: "lt", inputType: "number", default: true, defaultValue: 500 },
          { label: "between", value: "btw", inputType: "number-range" },
        ],
      },
      {
        key: "is_active",
        name: "Is Active",
        icon: ToggleRightIcon,
        type: "boolean",
        operators: [
          { label: "is", value: "eq" },
          { label: "is not", value: "neq" },
        ],
      },
    ],
  },
]);

const filters: Ref<Filter[]> = ref([
  { field: "status", operator: "eq", value: "active" },
  { field: "price", operator: "btw", value: [100, 500] },
]);
</script>

<template>
  <FiltersProvider v-model:filters="filters" :fields="fields">
    <FiltersMenu />
    <FiltersGroup />
    <FiltersClear v-if="filters.length > 0" />
  </FiltersProvider>
</template>
```

</ComponentPreview>

## Features

- **Field-based configuration** — Define fields as text, date, number, or boolean with optional icons and options
- **Grouped fields** — Organize fields into groups in the add-filter menu
- **Operators per field** — Each field supports multiple operators (is, is not, contains, between, etc.) with configurable default
- **Multiple value input types** — Text, select, multi-select, date, date range, number, number range, boolean switch, or none
- **Custom option display** — Customize how options appear in selects and in the add-filter submenu
- **Variants and sizes** — Outline or secondary variant; sm, default, or lg size
- **Clear all** — One action to remove all active filters
- **Composable** — Slot-based layout; use FiltersMenuTrigger and FiltersMenuContent for custom layouts

## Installation

<!-- @todo: Add installation instructions -->

## Fields configuration

`FiltersProvider` receives a `fields` prop: an array of **Field** or **FieldGroup** items. Each **Field** defines a filterable column: its key, label, type, which operators are available, and optionally a fixed set of options or constraints.

### Structure

- **Flat list** — Pass an array of `Field` to list all fields in the add-filter menu without groups.
- **Grouped list** — Pass an array of `FieldGroup`. Each group has a `group` (label) and a `fields` array. Groups appear as sections in the menu (e.g. “Base”, “Dates”, “Numbers”).

### Field properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `key` | `string` | Yes | Unique identifier; used as `filter.field` when a filter is added. |
| `name` | `string` | Yes | Display name in the menu and on filter chips. |
| `type` | `"text" \| "date" \| "number" \| "boolean"` | Yes | Drives the default input type when the operator doesn’t specify one. |
| `operators` | `Operator[]` | Yes | List of operators (e.g. “is”, “contains”, “between”). See [Operators](#operators). |
| `icon` | `Component \| (() => VNode)` | No | Icon shown next to the field name in the menu and on chips. |
| `multiple` | `boolean` | No | If `true`, allows multiple filters on this field (e.g. several status values). |
| `min` | `T` | No | Minimum value (date/number); used by date picker and number inputs. |
| `max` | `T` | No | Maximum value (date/number). |
| `step` | `number` | No | Step for number inputs. |
| `numberFormat` | `Intl.NumberFormatOptions` | No | Formatting for number/currency display (e.g. `{ style: "currency", currency: "USD" }`). |
| `options` | `object` | No | Predefined choices for select/multi-select. See [Options](#options). |

### Operators

Each operator is an object with:

| Property | Type | Description |
|----------|------|-------------|
| `label` | `string` | Label in the operator dropdown (e.g. “is”, “between”). |
| `value` | `string` | Unique value stored in `filter.operator`. |
| `default` | `boolean` | If `true`, this operator is selected when the filter is first added. |
| `defaultValue` | `T \| T[]` | Initial `filter.value` when this operator is selected. |
| `inputType` | `string` | Overrides the input: `select`, `multi-select`, `text`, `date`, `date-range`, `number`, `number-range`, `boolean`, `none`. Omit to use the field’s `type`. |

Use `inputType: "none"` for operators that don’t need a value (e.g. “is empty”, “is not empty”).

### Options

When a field has predefined choices, set `options`:

| Property | Type | Description |
|----------|------|-------------|
| `items` | `{ label: string, value: T }[]` | Options for select or multi-select. |
| `searchable` | `boolean` | Enable search in the options list. |
| `minSelections` | `number` | Minimum selected items (multi-select). |
| `maxSelections` | `number` | Maximum selected items (multi-select). |
| `optionDisplay` | `(option) => VNode \| string` | Custom render for each option (e.g. label + badge). |

Fields with `options.items` show a submenu in the add-filter dropdown so the user can pick a value when adding the filter.

### Filter and FilterValue

Active filters are stored as **Filter** objects: `{ field, operator, value, hidden? }`. The `value` type (**FilterValue**) depends on the operator and field: `string`, `string[]`, `number`, `number[]`, `boolean`, `CalendarDate`, `CalendarDate[]`, or a range `{ start, end }` for date/number ranges.

## Anatomy

### FiltersProvider

Root component. Provides `fields`, `filters` (v-model), `variant`, `size`, `rounded`, and `clearFilters()` to descendants. Renders a flex wrapper for the filter controls.

### FiltersMenu

Add-filter dropdown: trigger plus content that lists all fields (flat or grouped). Use as-is for the default “add filter” experience.

### FiltersMenuTrigger

The trigger that opens the add-filter menu. Default slot is an icon button; use the slot to customize.

### FiltersMenuContent

The dropdown content that lists fields and groups. Renders menu items or submenus for fields with predefined options.

### FiltersGroup

Renders the list of active filters. Each filter is shown as a chip (FiltersItem) with field label, operator selector, value input, and remove button.

### FiltersItem

A single filter chip: field label, operator dropdown, value input, and remove button. Used internally by FiltersGroup; exposed for custom layouts.

### FiltersItemField

The field label segment of a filter chip (e.g. “Status”, “Created At”). Displays the field name and optional icon.

### FiltersItemOperator

The operator selector segment of a filter chip. Dropdown to switch between the field’s operators (e.g. “is”, “is not”, “between”).

### FiltersItemValue

The value input segment. Renders the appropriate input (text, select, date, number range, switch, etc.) based on the field and selected operator.

### FiltersClear

Button that calls `clearFilters()`. Typically shown only when there are active filters.

### Types

- **Field** / **FieldGroup** — Field definition (key, name, type, operators, options, etc.) or group of fields
- **Filter** — Active filter: `field`, `operator`, `value`, optional `hidden`
- **Operator** — Operator definition: `label`, `value`, `inputType`, `default`, `defaultValue`
- **isField** / **isFieldGroup** — Type guards for field config

## Examples

### Data table filters

Filter table rows by status, date, or amount (e.g. price between two values).

### Search with facets

Narrow results by category, price range, or availability.

### Grouped fields

Use field groups (e.g. Base, Dates, Numbers) to structure the add-filter menu.

### Single and multi-select

Filter by one value (select) or several (multi-select) for the same field.

### Clear all

Show a “clear filters” control when at least one filter is active.

## API Reference

### Exports

<ExportsTable 
    :data="[
        { name: 'FiltersProvider', description: 'Root provider; fields, filters, variant, size, clearFilters' },
        { name: 'FiltersMenu', description: 'Add-filter dropdown (trigger + content)' },
        { name: 'FiltersMenuTrigger', description: 'Trigger for the add-filter menu' },
        { name: 'FiltersMenuContent', description: 'Dropdown content listing fields' },
        { name: 'FiltersGroup', description: 'Renders active filters as chips' },
        { name: 'FiltersItem', description: 'Single filter chip' },
        { name: 'FiltersItemField', description: 'Field label part of a chip' },
        { name: 'FiltersItemOperator', description: 'Operator selector part of a chip' },
        { name: 'FiltersItemValue', description: 'Value input part of a chip' },
        { name: 'FiltersClear', description: 'Button to clear all filters' },
        { name: 'Field', description: 'Field type' },
        { name: 'FieldGroup', description: 'Field group type' },
        { name: 'Filter', description: 'Filter type' },
        { name: 'Operator', description: 'Operator type' },
        { name: 'isField', description: 'Type guard for Field' },
        { name: 'isFieldGroup', description: 'Type guard for FieldGroup' }
    ]"
/>
