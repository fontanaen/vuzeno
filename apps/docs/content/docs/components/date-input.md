---
title: Date Input
description: Vue date input for typing and parsing calendar dates with accessible, localized field behavior.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/date-input
---

::component-preview
---
component: date-input
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/date-input.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { DateInput } from "@vuzeno/registry/ui/date-input";
</script>

<template>
  <DateInput.Root>
    <!-- … -->
  </DateInput.Root>
</template>
```

## Composition

```
DateInput.Root
├── DateInput.Label
├── DateInput.Control
│   └── DateInput.SegmentGroup
│       └── DateInput.Segment
├── DateInput.HiddenInput
├── DateInput.Context
├── DateInput.SegmentContext
└── DateInput.RootProvider
```

## Examples

### Default Value

Use the `defaultValue` prop with `parseDate` to set the initial date value.

::component-preview
---
component: date-input
name: default-value
---
::

### Controlled

Use the `value` and `onValueChange` props to control the date input's value programmatically.

::component-preview
---
component: date-input
name: controlled
---
::

### Root Provider

An alternative way to control the date input is to use the `RootProvider` component and the `useDateInput` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: date-input
name: root-provider
---
::

### Granularity

Use the `granularity` prop to control which date fields are displayed. Supported values are `day`, `hour`, `minute`, and `second`.

::component-preview
---
component: date-input
name: granularity
---
::

### Time Only

To create a time-only input, set `granularity` to `minute` (or `second`) and provide a `formatter` that only includes time fields. Use the `hourCycle` prop to switch between 12 and 24 hour formats.

::component-preview
---
component: date-input
name: time-only
---
::

### Range

To create a date input that allows a range selection, set the `selectionMode` prop to `range` and render two `SegmentGroup` components with `index` props set to `0` and `1`.

::component-preview
---
component: date-input
name: range
---
::

### Min and Max

Use the `min` and `max` props with `parseDate` to restrict the selectable date range. Dates outside this range will be marked as invalid.

::component-preview
---
component: date-input
name: min-max
---
::

### Disabled

Use the `disabled` prop to prevent user interaction with the date input.

::component-preview
---
component: date-input
name: disabled
---
::

### Read Only

Use the `readOnly` prop to make the date input non-editable while still being focusable.

::component-preview
---
component: date-input
name: read-only
---
::

### Invalid

Use the `invalid` prop to indicate an error state on the date input.

::component-preview
---
component: date-input
name: invalid
---
::

### Leading Zeros

Use the `shouldForceLeadingZeros` prop to toggle whether numeric segments are padded with a leading zero.

::component-preview
---
component: date-input
name: leading-zeros
---
::

### Localized

Use the `locale` prop to set the language and regional formatting of the date segments.

::component-preview
---
component: date-input
name: localized
---
::

### RTL

Set the `dir` prop to `rtl` for right-to-left language support.

::component-preview
---
component: date-input
name: rtl
---
::

### With Clear Button

Use `useDateInput` via `RootProvider` to access the `clearValue` method and render a clear button alongside the input.

::component-preview
---
component: date-input
name: with-clear-button
---
::

### With Date Picker

Combine `DateInput` with `DatePicker` by syncing their values using `onValueChange` to provide both typed and calendar-based date selection.

::component-preview
---
component: date-input
name: with-date-picker
---
::

## API

See [Ark UI Date Input docs](https://ark-ui.com/vue/docs/components/date-input) for full props and examples.
