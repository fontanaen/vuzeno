---
title: Date Picker
description: Date Picker component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/date-picker
---

::component-preview
---
component: date-picker
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/date-picker.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { CalendarIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
</script>

<template>
  <DatePicker.Root>
    <DatePicker.Label>Label</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input />
      <DatePicker.Trigger as-child>
        <Button size="icon-sm" variant="outline">
          <CalendarIcon />
        </Button>
      </DatePicker.Trigger>
    </DatePicker.Control>
    <DatePicker.Content>
      <DatePicker.Calendar />
    </DatePicker.Content>
  </DatePicker.Root>
</template>
```

Use `DatePicker.Calendar` for the default day / month / year views, or compose `DatePicker.DayView`, `DatePicker.MonthView`, and `DatePicker.YearView` individually. All Ark UI primitives remain available for custom layouts.

## Composition

```
DatePicker.Root
├── DatePicker.ClearTrigger
├── DatePicker.Content
│   └── DatePicker.Calendar
│       ├── DatePicker.DayView
│       ├── DatePicker.MonthView
│       └── DatePicker.YearView
├── DatePicker.Context
├── DatePicker.Control
├── DatePicker.Input
├── DatePicker.Label
├── DatePicker.MonthSelect
├── DatePicker.NextTrigger
├── DatePicker.Positioner
├── DatePicker.PresetTrigger
├── DatePicker.PrevTrigger
├── DatePicker.RangeText
├── DatePicker.ValueText
├── DatePicker.RootProvider
├── DatePicker.TableBody
├── DatePicker.TableCellTrigger
├── DatePicker.TableCell
├── DatePicker.TableHead
├── DatePicker.TableHeader
├── DatePicker.TableRow
├── DatePicker.Table
├── DatePicker.Trigger
├── DatePicker.ViewControl
├── DatePicker.ViewNav
├── DatePicker.ViewTrigger
├── DatePicker.View
├── DatePicker.WeekNumberHeaderCell
├── DatePicker.WeekNumberCell
├── DatePicker.YearSelect
```

## Examples

### Default Value

Use the `defaultValue` prop with `parseDate` to set the initial date value.

::component-preview
---
component: date-picker
name: default-value
---
::

### Controlled

Use the `value` and `onValueChange` props to control the date picker's value programmatically.

::component-preview
---
component: date-picker
name: controlled
---
::

### Root Provider

An alternative way to control the date picker is to use the `RootProvider` component and the `useDatePicker` hook. This
way you can access the state and methods from outside the component.

::component-preview
---
component: date-picker
name: root-provider
---
::

### Default View

Use the `defaultView` prop to set which view (day, month, or year) the calendar opens to initially.

::component-preview
---
component: date-picker
name: default-view
---
::

### Month and Year Select

Use `MonthSelect` and `YearSelect` components to create a header with dropdown selects for quick month/year navigation,
alongside the prev/next triggers.

::component-preview
---
component: date-picker
name: month-and-year-select
---
::

### Range

To create a date picker that allows a range selection, you need to:

- Set the `selectionMode` prop to `range`.
- Render multiple inputs with the `index` prop set to `0` and `1`.

::component-preview
---
component: date-picker
name: range
---
::

### Multiple

Use the `selectionMode="multiple"` prop to allow selecting multiple dates. This example also shows how to display
selected dates as removable tags.

::component-preview
---
component: date-picker
name: multiple
---
::

### Max Selected Dates

Use the `maxSelectedDates` prop with `selectionMode="multiple"` to limit the number of dates that can be selected. In
this example, users can select up to 3 dates.

::component-preview
---
component: date-picker
name: max-selected-dates
---
::

### Multiple Months

To create a date picker that displays multiple months side by side:

- Set the `numOfMonths` prop to the number of months you want to display.
- Use the `datePicker.getOffset({ months: 1 })` to get data for the next month.

::component-preview
---
component: date-picker
name: multiple-months
---
::

### Presets

Use the `DatePicker.PresetTrigger` component to add quick-select preset options like "Last 7 days" or "This month".

::component-preview
---
component: date-picker
name: presets
---
::

### Min and Max

Use the `min` and `max` props with `parseDate` to restrict the selectable date range. Dates outside this range will be
disabled.

::component-preview
---
component: date-picker
name: min-and-max
---
::

### Unavailable

Use the `isDateUnavailable` prop to mark specific dates as unavailable. This example disables weekends.

::component-preview
---
component: date-picker
name: unavailable
---
::

### Locale

Use the `locale` prop to set the language and formatting, and `startOfWeek` to set the first day of the week (0 =
Sunday, 1 = Monday, etc.).

::component-preview
---
component: date-picker
name: locale
---
::

### Month Picker

Create a month-only picker by setting `defaultView="month"` and `minView="month"`. Use custom `format` and `parse`
functions to handle month/year input format.

::component-preview
---
component: date-picker
name: month-picker
---
::

### Year Picker

Create a year-only picker by setting `defaultView="year"` and `minView="year"`. Use custom `format` and `parse`
functions to handle year-only input format.

::component-preview
---
component: date-picker
name: year-picker
---
::

### Inline

Use the `inline` prop to display the date picker directly on the page, without a popup.

> When using the `inline` prop, omit the `Portal`, `Positioner`, and `Content` components to render the calendar inline
> within your layout.

::component-preview
---
component: date-picker
name: inline
---
::

### Custom Parsing

Use the `parse` prop to implement custom date parsing logic. This allows users to enter dates in flexible formats like
"25/12" or "25/12/24" which are automatically converted to valid dates.

::component-preview
---
component: date-picker
name: custom-parsing
---
::

### Month Picker Range

Create a month range picker by combining `selectionMode="range"` with `defaultView="month"` and `minView="month"`. This
is useful for selecting billing periods or date ranges by month.

::component-preview
---
component: date-picker
name: month-picker-range
---
::

### Year Range

Create a year range picker by combining `selectionMode="range"` with `defaultView="year"` and `minView="year"`. This is
useful for selecting multi-year periods.

::component-preview
---
component: date-picker
name: year-range
---
::

### Select Today

Use the `selectToday` method from the date picker context to add a "Today" button that quickly selects the current date.

::component-preview
---
component: date-picker
name: select-today
---
::

### Fixed Weeks

Use the `fixedWeeks` prop to always display 6 weeks in the calendar, preventing layout shifts when navigating between
months.

::component-preview
---
component: date-picker
name: fixed-weeks
---
::

### Form

Use the `name` prop to integrate the date picker with native HTML forms. The selected date value will be submitted as
form data. This example also uses `isDateUnavailable` to disable weekends.

::component-preview
---
component: date-picker
name: form
---
::

### With Time

Integrate a time input with the date picker using `CalendarDateTime` from `@internationalized/date`. The time input
updates the hour and minute of the selected date value.

::component-preview
---
component: date-picker
name: with-time
---
::

## API

See [Ark UI Date Picker docs](https://ark-ui.com/vue/docs/components/date-picker) for full props and examples.
