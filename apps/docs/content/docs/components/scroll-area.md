---
title: Scroll Area
description: Vue scroll area with custom scrollbars for overflowing content in panels and sidebars.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/scroll-area
---

::component-preview
---
component: scroll-area
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/scroll-area.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { ScrollArea } from "@/components/ui/scroll-area";
</script>

<template>
  <ScrollArea.Root>
    <ScrollArea.Viewport>
      <ScrollArea.Content>
        <!-- … -->
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar>
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
</template>
```

## Composition

```
ScrollArea.Root
├── ScrollArea.Shadow
├── ScrollArea.Viewport
│   └── ScrollArea.Content
├── ScrollArea.Scrollbar
│   └── ScrollArea.Thumb
└── ScrollArea.Corner
```

## Examples

### Horizontal

Configure the scroll area for horizontal scrolling only.

::component-preview
---
component: scroll-area
name: horizontal
---
::

### Both Directions

Enable scrolling in both horizontal and vertical directions.

::component-preview
---
component: scroll-area
name: both-directions
---
::

### Nested

Scroll areas can be nested within each other for complex layouts.

::component-preview
---
component: scroll-area
name: nested
---
::

### Shadow

Add scroll shadows to indicate hidden content. Place `ScrollArea.Shadow` inside `ScrollArea.Root` with a `side` of `top`, `bottom`, `left`, or `right`. The root needs `relative` positioning.

::component-preview
---
component: scroll-area
name: shadow
---
::

## API

See [Ark UI Scroll Area docs](https://ark-ui.com/vue/docs/components/scroll-area) for full props and examples.
