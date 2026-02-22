---
title: Filters
description: A composable filter system for building dynamic, type-aware filter UIs with dropdown field selection, operators, and multiple value input types
name: filters
---

# Filters

A composable filter system to build dynamic filter UIs. Define fields (optionally grouped), operators, and value types; users add or remove filters from a dropdown and see active filters as chips with inline value editing.

<ComponentPreview name="FiltersDemo" />

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

Install from the Vuzeno registry with the shadcn-vue CLI:

<InstallationTabs exec value="shadcn-vue@latest add https://vuzeno.com/r/filters.json" />

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