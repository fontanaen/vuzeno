---
title: Toggle
description: Styled toggle component with variant and size options.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/toggle
---

::component-preview
---
name: ToggleDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/toggle.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Toggle } from "@vuzeno/registry/ui/toggle";
</script>

<template>
  <Toggle.Root variant="outline" size="sm">
    <!-- … -->
  </Toggle.Root>
</template>
```

## Composition

```
Toggle.Root
├── Toggle.Indicator
├── Toggle.Context
```

## Examples

### Variants

Use the `variant` prop to change the visual style of the toggle.

::component-preview
---
name: ToggleVariantsDemo
---
::

### Sizes

Use the `size` prop to change the size of the toggle.

::component-preview
---
name: ToggleSizesDemo
---
::

### Controlled

Use the `pressed` and `onPressedChange` props to control the toggle's state.

::component-preview
---
name: ToggleControlledDemo
---
::

### Disabled

Use the `disabled` prop to disable the toggle.

::component-preview
---
name: ToggleDisabledDemo
---
::

### Indicator

Use the `Toggle.Indicator` component to render different indicators based on the state of the toggle.

::component-preview
---
name: ToggleIndicatorDemo
---
::

## API

See [Ark UI Toggle docs](https://ark-ui.com/vue/docs/components/toggle) for full props and examples.
