---
title: Switch
description: Switch component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/switch
---

::component-preview
---
name: SwitchDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/switch.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Switch } from "@vuzeno/registry/ui/switch";
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
name: SwitchSizesDemo
---
::

### Controlled

For a controlled Switch component, the state of the toggle is managed using the checked prop, and updates when the `onCheckedChange` event handler is called:

::component-preview
---
name: SwitchControlledDemo
---
::

### Root Provider

An alternative way to control the switch is to use the `RootProvider` component and the `useSwitch` hook. This way you can access the state and methods from outside the component.

::component-preview
---
name: SwitchRootProviderDemo
---
::

### Field

The `Field` component helps manage form-related state and accessibility attributes of a switch. It includes handling ARIA labels, helper text, and error text to ensure proper accessibility.

::component-preview
---
name: SwitchFieldDemo
---
::

### Context

Access the switch's state with `Switch.Context` or the `useSwitchContext` hook. This lets you customize the component based on its current state:

::component-preview
---
name: SwitchContextDemo
---
::

## API

See [Ark UI Switch docs](https://ark-ui.com/vue/docs/components/switch) for full props and examples.
