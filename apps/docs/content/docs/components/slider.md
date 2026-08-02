---
title: Slider
description: Vue slider to select a numeric value or range along a track with keyboard and pointer input.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/slider
---

::component-preview
---
component: slider
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/slider.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Slider } from "@/components/ui/slider";
</script>

<template>
  <Slider.Root>
    <!-- … -->
  </Slider.Root>
</template>
```

## Composition

```
Slider.Root
├── Slider.Context
├── Slider.Control
├── Slider.DraggingIndicator
├── Slider.HiddenInput
├── Slider.Label
├── Slider.MarkerGroup
├── Slider.Marker
├── Slider.Range
├── Slider.RootProvider
├── Slider.Thumb
├── Slider.Track
├── Slider.ValueText
```

## Examples

### Range

You can add multiple thumbs to the slider by adding multiple `Slider.Thumb`

::component-preview
---
component: slider
name: range
---
::

### Marks

You can add marks to the slider track by using the `Slider.MarkerGroup` and `Slider.Marker` components.

Position the `Slider.Marker` components relative to the track by providing the `value` prop.

::component-preview
---
component: slider
name: marks
---
::

### Min and Max

By default, the minimum is `0` and the maximum is `100`. If that's not what you want, you can easily specify different bounds by changing the values of the `min` and/or `max` props.

For example, to ask the user for a value between `-10` and `10`, you can use:

::component-preview
---
component: slider
name: min-max
---
::

### Granularity

By default, the granularity, is `1`, meaning that the value is always an integer. You can change the step attribute to control the granularity.

For example, If you need a value between `5` and `10`, accurate to two decimal places, you should set the value of step to `0.01`:

::component-preview
---
component: slider
name: granularity
---
::

### Change Events

When the slider value changes, the `onValueChange` and `onValueChangeEnd` callbacks are invoked. You can use this to set up custom behaviors in your app.

::component-preview
---
component: slider
name: change-events
---
::

### Orientation

By default, the slider is assumed to be horizontal. To change the orientation to vertical, set the orientation property in the machine's context to vertical.

In this mode, the slider will use the arrow up and down keys to increment/decrement its value.

> Don't forget to change the styles of the vertical slider by specifying its height

::component-preview
---
component: slider
name: orientation
---
::

### Origin

By default, the slider's origin is at the start of the track. To change the origin to the center of the track, set the `origin` prop to `center`.

::component-preview
---
component: slider
name: origin
---
::

### Root Provider

An alternative way to control the slider is to use the `RootProvider` component and the `useSlider` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: slider
name: root-provider
---
::

### Dragging Indicator

Use the `Slider.DraggingIndicator` component inside `Slider.Thumb` to show a visual indicator while the thumb is being dragged.

::component-preview
---
component: slider
name: dragging-indicator
---
::

### Thumb Overlap

Use the `minStepsBetweenThumbs` prop to prevent range slider thumbs from overlapping. This ensures a minimum gap between thumbs, which is useful for price range filters and similar use cases.

::component-preview
---
component: slider
name: thumb-overlap
---
::

### Thumb Collision

Use the `thumbCollisionBehavior` prop to control how thumbs behave when they collide during pointer interactions. Supported values are `push` (default), `swap`, and `none`.

::component-preview
---
component: slider
name: thumb-collision
---
::

## API

See [Ark UI Slider docs](https://ark-ui.com/vue/docs/components/slider) for full props and examples.
