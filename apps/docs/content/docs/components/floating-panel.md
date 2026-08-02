---
title: Floating Panel
description: Vue floating panel window that can be dragged, resized, and positioned over the main interface.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/floating-panel
---

::component-preview
---
component: floating-panel
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/floating-panel.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { FloatingPanel } from "@vuzeno/registry/ui/floating-panel";
</script>

<template>
  <FloatingPanel.Root>
    <!-- … -->
  </FloatingPanel.Root>
</template>
```

## Composition

```
FloatingPanel.Root
├── FloatingPanel.Body
├── FloatingPanel.CloseTrigger
├── FloatingPanel.Content
├── FloatingPanel.Context
├── FloatingPanel.DragTrigger
├── FloatingPanel.Header
├── FloatingPanel.Positioner
├── FloatingPanel.ResizeTrigger
├── FloatingPanel.StageTrigger
├── FloatingPanel.RootProvider
├── FloatingPanel.Title
├── FloatingPanel.Trigger
├── FloatingPanel.Control
```

## Examples

### Controlled size

To control the size of the floating panel programmatically, you can pass the `size` `onResize` prop to the machine.

::component-preview
---
component: floating-panel
name: controlled-size
---
::

### Controlled position

To control the position of the floating panel programmatically, you can pass the `position` and `onPositionChange` prop to the machine.

::component-preview
---
component: floating-panel
name: controlled-position
---
::

### Anchor Position

Use the `getAnchorPosition` function to compute the initial position of the floating panel. This function is called when the panel is opened and receives the `triggerRect` and `boundaryRect`.

::component-preview
---
component: floating-panel
name: anchor-position
---
::

### Open State

To control the open state of the floating panel programmatically, you can pass the `open` and `onOpenChange` prop to the machine.

::component-preview
---
component: floating-panel
name: open-state
---
::

### Lazy Mount

To lazy mount the floating panel, you can pass the `lazyMount` prop to the machine.

::component-preview
---
component: floating-panel
name: lazy-mount
---
::

### Context

To access the context of the floating panel, you can use the `useFloatingPanelContext` hook or the `FloatingPanel.Context` component.

::component-preview
---
component: floating-panel
name: context
---
::

## API

See [Ark UI Floating Panel docs](https://ark-ui.com/vue/docs/components/floating-panel) for full props and examples.
