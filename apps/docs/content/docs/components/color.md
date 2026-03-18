---
title: Color
description: A composable set of color components with area picker, sliders, fields, swatches, and eye dropper support.
component: true
---

::alert
---
title: Alpha
description: These components are built on top of Reka UI Color components, which are still in alpha. APIs may change in future releases.
variant: warning
---
::

::component-preview
---
name: ColorDemo
---
::

## Features

- **Color Area** — 2D saturation/lightness picker with customizable channels
- **Color Slider** — Single-channel slider for hue, alpha, or other channels
- **Color Fields** — HSL, HSB, RGB, and Hex input fields with size variants
- **Color Space Select** — Switch between color formats (HSL, HSB, RGB, Hex)
- **Color Swatch Picker** — Preset color selection with swatch items
- **Eye Dropper** — Native browser color picker support (when available)
- **Composable** — Combine components to build custom color pickers

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/color.json
exec: true
---
::

## Dependencies

This component is built on top of Reka UI color primitives. For manual installation:

::installation-tabs
---
command: reka-ui @vueuse/core class-variance-authority lucide-vue-next
exec: false
---
::

## Examples

### Color Area

Standalone color area with hue slider:

::component-preview
---
name: ColorAreaDemo
---
::

### Color Fields

HSL, HSB, RGB, and Hex fields with `ColorSpaceSelect`. All field components support `sm`, `default`, and `lg` size variants:

::component-preview
---
name: ColorFieldsDemo
---
::

### Color Swatch Picker

Preset color selection with `ColorSwatchPicker` and `ColorSwatchPickerItem`:

::component-preview
---
name: ColorSwatchPickerDemo
---
::