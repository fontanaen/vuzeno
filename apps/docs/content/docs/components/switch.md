---
title: Switch
description: Vue switch toggle for binary on and off settings with an accessible, thumb-style control.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/switch
---

::component-preview
---
component: switch
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/switch.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Switch } from "@/components/ui/switch";
</script>

<template>
  <Switch.Root>
    <!-- … -->
  </Switch.Root>
</template>
```

## Composition

```
Switch.Root
├── Switch.Context
├── Switch.Control
├── Switch.HiddenInput
├── Switch.Label
├── Switch.RootProvider
├── Switch.Thumb
```

## Examples

### Sizes

Use the `size` prop on `Switch.Root` to change the size of the switch.

::component-preview
---
component: switch
name: sizes
---
::

### Controlled

For a controlled Switch component, the state of the toggle is managed using the checked prop, and updates when the `onCheckedChange` event handler is called:

::component-preview
---
component: switch
name: controlled
---
::

### Root Provider

An alternative way to control the switch is to use the `RootProvider` component and the `useSwitch` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: switch
name: root-provider
---
::

### Field

The `Field` component helps manage form-related state and accessibility attributes of a switch. It includes handling ARIA labels, helper text, and error text to ensure proper accessibility.

::component-preview
---
component: switch
name: field
---
::

### Context

Access the switch's state with `Switch.Context` or the `useSwitchContext` hook. This lets you customize the component based on its current state:

::component-preview
---
component: switch
name: context
---
::

## API

See [Ark UI Switch docs](https://ark-ui.com/vue/docs/components/switch) for full props and examples.
