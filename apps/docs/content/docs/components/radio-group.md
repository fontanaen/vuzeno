---
title: Radio Group
description: Vue radio group for choosing a single option from a mutually exclusive set of choices.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/radio-group
---

::component-preview
---
component: radio-group
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/radio-group.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { RadioGroup } from "@/components/ui/radio-group";
</script>

<template>
  <RadioGroup.Root>
    <!-- … -->
  </RadioGroup.Root>
</template>
```

## Composition

```
RadioGroup.Root
├── RadioGroup.Label
├── RadioGroup.Indicator
└── RadioGroup.Item
    ├── RadioGroup.ItemControl
    ├── RadioGroup.ItemText
    └── RadioGroup.ItemHiddenInput
```

## Examples

### Initial Value

To set the radio group's initial value, set the `defaultValue` prop to the value of the radio item to be selected by default.

::component-preview
---
component: radio-group
name: initial-value
---
::

### Controlled

For a controlled Radio Group, the state is managed using the `value` prop, and updates when the `onValueChange` event handler is called:

::component-preview
---
component: radio-group
name: controlled
---
::

### Root Provider

An alternative way to control the radio group is to use the `RootProvider` component and the `useRadioGroup` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: radio-group
name: root-provider
---
::

### Disabled

To make a radio group disabled, set the `disabled` prop to `true`.

::component-preview
---
component: radio-group
name: disabled
---
::

## API

See [Ark UI Radio Group docs](https://ark-ui.com/vue/docs/components/radio-group) for full props and examples.
