---
title: Color Picker
description: Vue color picker to choose colors with swatches, channels, and hex or RGB values in forms and editors.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/color-picker
---

::component-preview
---
component: color-picker
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/color-picker.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";
</script>

<template>
  <ColorPicker.Root>
    <!-- … -->
  </ColorPicker.Root>
</template>
```

## Composition

```
ColorPicker.Root
├── ColorPicker.AreaBackground
├── ColorPicker.AreaThumb
├── ColorPicker.Area
├── ColorPicker.ChannelInput
├── ColorPicker.ChannelSliderLabel
├── ColorPicker.ChannelSliderThumb
├── ColorPicker.ChannelSliderTrack
├── ColorPicker.ChannelSliderValueText
├── ColorPicker.ChannelSlider
├── ColorPicker.Content
├── ColorPicker.Context
├── ColorPicker.Control
├── ColorPicker.EyeDropperTrigger
├── ColorPicker.FormatSelect
├── ColorPicker.FormatTrigger
├── ColorPicker.HiddenInput
├── ColorPicker.Label
├── ColorPicker.Positioner
├── ColorPicker.RootProvider
├── ColorPicker.SwatchGroup
├── ColorPicker.SwatchIndicator
├── ColorPicker.SwatchTrigger
├── ColorPicker.Swatch
├── ColorPicker.TransparencyGrid
├── ColorPicker.Trigger
├── ColorPicker.ValueSwatch
├── ColorPicker.ValueText
├── ColorPicker.View
```

## Examples

### Controlled

Use the `value` and `onValueChange` props to programatically control the color picker's state.

::component-preview
---
component: color-picker
name: controlled
---
::

### Open Controlled

Control the open state of the color picker popover programmatically using the `open` and `onOpenChange` props.

::component-preview
---
component: color-picker
name: open-controlled
---
::

### Root Provider

An alternative way to control the color picker is to use the `RootProvider` component and the `useColorPicker` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: color-picker
name: root-provider
---
::

### Disabled

Use the `disabled` prop to disable the color picker.

::component-preview
---
component: color-picker
name: disabled
---
::

### Inline

Render the color picker inline without a popover by using the `inline` prop.

::component-preview
---
component: color-picker
name: inline
---
::

### Input Only

A minimal color picker with just an input field, value swatch, and eye dropper trigger.

::component-preview
---
component: color-picker
name: input-only
---
::

### Slider Only

Display only the channel sliders for RGB color selection.

::component-preview
---
component: color-picker
name: slider-only
---
::

### Swatch Only

A simple color picker with only preset color swatches.

::component-preview
---
component: color-picker
name: swatch-only
---
::

### Swatches

Include preset color swatches in the color picker content for quick color selection.

::component-preview
---
component: color-picker
name: swatches
---
::

### Value Swatch

Display the current color value as a swatch alongside the color area and sliders.

::component-preview
---
component: color-picker
name: value-swatch
---
::

### Field

The `Field` component helps manage form-related state and accessibility attributes of a color picker. It includes handling ARIA labels, helper text, and error text to ensure proper accessibility.

::component-preview
---
component: color-picker
name: field
---
::

### Form Usage

Integrate the color picker with form libraries like React Hook Form using the `HiddenInput` component.

::component-preview
---
component: color-picker
name: form-usage
---
::

### Inside Dialog

Here's an example of how to use the color picker inside a dialog.

::component-preview
---
component: color-picker
name: inside-dialog
---
::

## API

See [Ark UI Color Picker docs](https://ark-ui.com/vue/docs/components/color-picker) for full props and examples.
