---
title: Toggle Group
description: Styled toggle group component with variant and size options.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/toggle-group
---

::component-preview
---
name: ToggleGroupDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/toggle-group.json
exec: true
---
::

## Composition

```
ToggleGroup.Root
├── ToggleGroup.Context
├── ToggleGroup.Item
└── ToggleGroup.RootProvider
```

## Usage

```vue
<script setup lang="ts">
import { ToggleGroup } from "@vuzeno/registry/ui/toggle-group";
</script>

<template>
  <ToggleGroup.Root variant="outline" size="md">
    <ToggleGroup.Item value="left">
      <!-- … -->
    </ToggleGroup.Item>
  </ToggleGroup.Root>
</template>
```

## Examples

### Variants

Use the `variant` prop on `ToggleGroup.Root` to change the visual style of the group. Items inherit the variant from the root.

::component-preview
---
name: ToggleGroupVariantsDemo
---
::

### Sizes

Use the `size` prop on `ToggleGroup.Root` to change the size of the group and its items.

::component-preview
---
name: ToggleGroupSizesDemo
---
::

### Controlled

Use the `value` and `onValueChange` props to control the toggle group state.

::component-preview
---
name: ToggleGroupControlledDemo
---
::

### Root Provider

An alternative way to control the toggle group is to use the `RootProvider` component and the `useToggleGroup` hook. This way you can access the state and methods from outside the component.

::component-preview
---
name: ToggleGroupRootProviderDemo
---
::

### Multiple

Demonstrates how to enable `multiple` selection within the group.

::component-preview
---
name: ToggleGroupMultipleDemo
---
::

## API

See [Ark UI Toggle Group docs](https://ark-ui.com/vue/docs/components/toggle-group) for full props and examples.
