---
title: TimeField
description: A composable time input component with segment-based editing, built on Reka UI. Supports hour, minute, second, and 12/24-hour formats.
tag: new
---

::component-preview 
---
name: TimeFieldDemo
---
::

## Features

- **12/24-hour formats** — Control display with `hour-cycle` prop
- **Configurable granularity** — Show hour only, hour+minute, or include seconds
- **Day period** — AM/PM display when using 12-hour format
- **Composable** — Flexible slot-based architecture with `TimeFieldInput` and `TimeFieldSeparator`

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/time-field.json
exec: true
---
::

## Dependencies

This component requires `@internationalized/date` for date/time values.

::installation-tabs
---
command: @internationalized/date
exec: false
---
::

## Anatomy

- **TimeField** — Root component that provides segment data via scoped slots
- **TimeFieldInput** — Renders a single segment (hour, minute, second, or dayPeriod)
- **TimeFieldSeparator** — Renders a separator between segments (default: `:`)

## Examples

### Combining with Calendar

::component-preview
---
name: TimeFieldWithCalendarDemo
---
::
