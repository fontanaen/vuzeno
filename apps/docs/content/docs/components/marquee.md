---
title: Marquee
description: Marquee component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/marquee
---

::component-preview
---
name: MarqueeDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/marquee.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Marquee } from "@vuzeno/registry/ui/marquee";
</script>

<template>
  <Marquee.Root>
    <!-- … -->
  </Marquee.Root>
</template>
```

## Composition

```
Marquee.Root
├── Marquee.Edge
├── Marquee.Viewport
│   └── Marquee.Content
│       └── Marquee.Item
├── Marquee.Context
└── Marquee.RootProvider
```

## Examples

### Auto Fill

Use the `autoFill` prop to automatically duplicate content to fill the viewport. The `spacing` prop controls the gap between duplicated content instances:

::component-preview
---
name: MarqueeAutoFillDemo
---
::

### Reverse

Set the `reverse` prop to reverse the scroll direction:

::component-preview
---
name: MarqueeReverseDemo
---
::

### Vertical

Set `side="bottom"` (or `side="top"`) to create a vertical marquee:

::component-preview
---
name: MarqueeVerticalDemo
---
::

### Speed

Control the animation speed using the `speed` prop, which accepts values in pixels per second:

::component-preview
---
name: MarqueeSpeedDemo
---
::

### Pause on Interaction

Enable `pauseOnInteraction` to pause the marquee when users hover or focus on it, improving accessibility:

::component-preview
---
name: MarqueePauseOnInteractionDemo
---
::

### Programmatic Control

Use the `useMarquee` hook with `Marquee.RootProvider` to access the marquee API and control playback programmatically:

::component-preview
---
name: MarqueeProgrammaticControlDemo
---
::

> If you're using the `Marquee.RootProvider` component, you don't need to use the `Marquee.Root` component.

### Loops

Set the `loopCount` prop to run the marquee a specific number of times. Use `onLoopComplete` to track each loop iteration and `onComplete` to know when all loops finish:

::component-preview
---
name: MarqueeFiniteLoopsDemo
---
::

### Edges

Add `Marquee.Edge` components to create fade effects at the start and end of the scrolling area:

::component-preview
---
name: MarqueeWithEdgesDemo
---
::

## API

See [Ark UI Marquee docs](https://ark-ui.com/vue/docs/components/marquee) for full props and examples.
