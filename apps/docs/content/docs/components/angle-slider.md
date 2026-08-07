---
title: Angle Slider
description: Vue angle slider to pick a rotation or direction value on a circular control with keyboard support.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/angle-slider
---

::component-preview
---
component: angle-slider
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/angle-slider.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { AngleSlider } from "@/components/ui/angle-slider";
</script>

<template>
  <AngleSlider.Root>
    <!-- … -->
  </AngleSlider.Root>
</template>
```

## Composition

```
AngleSlider.Root
├── AngleSlider.Context
├── AngleSlider.Control
├── AngleSlider.HiddenInput
├── AngleSlider.Label
├── AngleSlider.MarkerGroup
├── AngleSlider.Marker
├── AngleSlider.RootProvider
├── AngleSlider.Thumb
├── AngleSlider.ValueText
```

## Examples

### Controlled

Use the `value` and `onValueChange` props to control the value of the Angle Slider.

::component-preview
---
component: angle-slider
name: controlled
---
::

### Steps

Use the `step` prop to set the discrete steps of the Angle Slider.

::component-preview
---
component: angle-slider
name: steps
---
::

## API

See [Ark UI Angle Slider docs](https://ark-ui.com/vue/docs/components/angle-slider) for full props and examples.
