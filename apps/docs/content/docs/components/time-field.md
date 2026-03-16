---
title: TimeField
description: A composable time input component with segment-based editing, built on Reka UI. Supports hour, minute, second, and 12/24-hour formats.
name: time-field
---

::component-preview 
---
name: TimeFieldDemo
---
::

## Features

- **Segment-based editing** — Edit hour, minute, and second segments independently
- **12/24-hour formats** — Control display with `hour-cycle` prop
- **Configurable granularity** — Show hour only, hour+minute, or include seconds
- **Day period** — AM/PM display when using 12-hour format
- **Composable** — Flexible slot-based architecture with `TimeFieldInput` and `TimeFieldSeparator`
- **Internationalized** — Built on `@internationalized/date` for locale-aware formatting

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/time-field.json
exec: true
---
::

## Dependencies

This component requires `@internationalized/date` for date/time values. Install manually if needed:

::installation-tabs
---
command: @internationalized/date
exec: false
---
::

## Usage

The TimeField uses `CalendarDateTime`, `ZonedDateTime`, or `Time` from `@internationalized/date` as its model value:

```vue showLineNumbers
<script setup lang="ts">
import { CalendarDateTime } from "@internationalized/date";
import { TimeField, TimeFieldInput, TimeFieldSeparator } from "@/components/ui/time-field";
import { ref } from "vue";

const date = ref(new CalendarDateTime(2026, 3, 16, 12, 30, 0));
</script>

<template>
  <TimeField v-model="date" granularity="minute" :hour-cycle="12" v-slot="{ hour, minute, dayPeriod }">
    <TimeFieldInput :segment="hour" />
    <TimeFieldSeparator />
    <TimeFieldInput :segment="minute" />
    <TimeFieldInput :segment="dayPeriod" />
  </TimeField>
</template>
```

## Components

- **TimeField** — Root component that provides segment data via scoped slots
- **TimeFieldInput** — Renders a single segment (hour, minute, second, or dayPeriod)
- **TimeFieldSeparator** — Renders a separator between segments (default: `:`)

## Combining with Calendar

Use TimeField alongside Calendar for date and time selection:

```vue showLineNumbers
<template>
  <FieldGroup class="grid grid-cols-2 gap-4">
    <Field>
      <FieldLabel>Date</FieldLabel>
      <Calendar v-model="date" />
    </Field>
    <Field>
      <FieldLabel>Time</FieldLabel>
      <TimeField v-model="date" granularity="second" :hour-cycle="12" v-slot="{ hour, minute, second, dayPeriod }">
        <TimeFieldInput :segment="hour" />
        <TimeFieldSeparator />
        <TimeFieldInput :segment="minute" />
        <TimeFieldSeparator />
        <TimeFieldInput :segment="second" />
        <TimeFieldInput :segment="dayPeriod" />
      </TimeField>
    </Field>
  </FieldGroup>
</template>
```
