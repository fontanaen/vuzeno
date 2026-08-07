---
title: Marquee
description: Vue marquee for continuously scrolling text or content, useful for tickers and highlight strips.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/marquee
---

::component-preview
---
component: marquee
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/marquee.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Marquee } from "@/components/ui/marquee";
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
component: marquee
name: auto-fill
---
::

### Reverse

Set the `reverse` prop to reverse the scroll direction:

::component-preview
---
component: marquee
name: reverse
---
::

### Vertical

Set `side="bottom"` (or `side="top"`) to create a vertical marquee:

::component-preview
---
component: marquee
name: vertical
---
::

### Speed

Control the animation speed using the `speed` prop, which accepts values in pixels per second:

::component-preview
---
component: marquee
name: speed
---
::

### Pause on Interaction

Enable `pauseOnInteraction` to pause the marquee when users hover or focus on it, improving accessibility:

::component-preview
---
component: marquee
name: pause-on-interaction
---
::

### Programmatic Control

Use the `useMarquee` hook with `Marquee.RootProvider` to access the marquee API and control playback programmatically:

::component-preview
---
component: marquee
name: programmatic-control
---
::

> If you're using the `Marquee.RootProvider` component, you don't need to use the `Marquee.Root` component.

### Loops

Set the `loopCount` prop to run the marquee a specific number of times. Use `onLoopComplete` to track each loop iteration and `onComplete` to know when all loops finish:

::component-preview
---
component: marquee
name: finite-loops
---
::

### Edges

Add `Marquee.Edge` components to create fade effects at the start and end of the scrolling area:

::component-preview
---
component: marquee
name: with-edges
---
::

## API

See [Ark UI Marquee docs](https://ark-ui.com/vue/docs/components/marquee) for full props and examples.
