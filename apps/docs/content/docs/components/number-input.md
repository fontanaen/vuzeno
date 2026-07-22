---
title: Number Input
description: Number Input component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/number-input
---

::component-preview
---
component: number-input
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/number-input.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { NumberInput } from "@vuzeno/registry/ui/number-input";
</script>

<template>
  <NumberInput.Root>
    <!-- … -->
  </NumberInput.Root>
</template>
```

## Composition

```
NumberInput.Root
├── NumberInput.Label
├── NumberInput.Control          layout="inset" | "segmented"
│   ├── NumberInput.Scrubber     optional
│   ├── NumberInput.Input
│   ├── NumberInput.TriggerGroup optional — stacked steppers (inset only)
│   │   ├── NumberInput.IncrementTrigger
│   │   └── NumberInput.DecrementTrigger
│   ├── NumberInput.IncrementTrigger  split steppers — left (+)
│   └── NumberInput.DecrementTrigger  split steppers — right (−)
├── NumberInput.Context
├── NumberInput.RootProvider
└── NumberInput.ValueText
```

### Layout

`NumberInput.Control` accepts a `layout` prop to coordinate styles across parts:

- **`inset`** (default) — bordered input with steppers overlaid inside the field. Use `TriggerGroup` to stack increment/decrement on the right.
- **`segmented`** — flex row with a shared border on `Control`. Order: optional `Scrubber`, `IncrementTrigger` (+), `Input`, `DecrementTrigger` (−). The value is centered between the two triggers.

Padding and focus rings are derived from the chosen layout and child parts — no manual attributes on `Input` are required.

## Examples

### Split Controls

Use `layout="segmented"` on `Control`. Place `IncrementTrigger` on the left, `DecrementTrigger` on the right, and optionally add a `Scrubber` before the increment trigger.

::component-preview
---
component: number-input
name: split
---
::

### Min and Max

Pass the `min` prop or `max` prop to set an upper and lower limit for the input. By default, the input will restrict the value to stay within the specified range.

::component-preview
---
component: number-input
name: min-max
---
::

### Precision

In some cases, you might need the value to be rounded to specific decimal points. Set the `formatOptions` and provide `Intl.NumberFormatOptions` such as `maximumFractionDigits` or `minimumFractionDigits`.

::component-preview
---
component: number-input
name: precision
---
::

### Scrubbing

The NumberInput supports the scrubber interaction pattern. To use this pattern, render the `NumberInput.Scrubber` component. It uses the Pointer lock API and tracks the pointer movement. It also renders a virtual cursor which mimics the real cursor's pointer.

::component-preview
---
component: number-input
name: scrubbing
---
::

### Mouse Wheel

The NumberInput exposes a way to increment/decrement the value using the mouse wheel event. To activate this, set the `allowMouseWheel` prop to `true`.

::component-preview
---
component: number-input
name: mouse-wheel
---
::

### Formatting

To apply custom formatting to the input's value, set the `formatOptions` and provide `Intl.NumberFormatOptions` such as `style` and `currency`.

::component-preview
---
component: number-input
name: formatting
---
::

### Field

The `Field` component helps manage form-related state and accessibility attributes of a number input. It includes handling ARIA labels, helper text, and error text to ensure proper accessibility.

::component-preview
---
component: number-input
name: field
---
::

### Root Provider

An alternative way to control the number input is to use the `RootProvider` component and the `useNumberInput` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: number-input
name: root-provider
---
::

## API

See [Ark UI Number Input docs](https://ark-ui.com/vue/docs/components/number-input) for full props and examples.
