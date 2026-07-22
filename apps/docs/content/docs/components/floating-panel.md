---
title: Floating Panel
description: Floating Panel component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/floating-panel
---

::component-preview
---
name: FloatingPanelDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

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
name: FloatingPanelControlledSizeDemo
---
::

### Controlled position

To control the position of the floating panel programmatically, you can pass the `position` and `onPositionChange` prop to the machine.

::component-preview
---
name: FloatingPanelControlledPositionDemo
---
::

### Anchor Position

Use the `getAnchorPosition` function to compute the initial position of the floating panel. This function is called when the panel is opened and receives the `triggerRect` and `boundaryRect`.

::component-preview
---
name: FloatingPanelAnchorPositionDemo
---
::

### Open State

To control the open state of the floating panel programmatically, you can pass the `open` and `onOpenChange` prop to the machine.

::component-preview
---
name: FloatingPanelOpenStateDemo
---
::

### Lazy Mount

To lazy mount the floating panel, you can pass the `lazyMount` prop to the machine.

::component-preview
---
name: FloatingPanelLazyMountDemo
---
::

### Context

To access the context of the floating panel, you can use the `useFloatingPanelContext` hook or the `FloatingPanel.Context` component.

::component-preview
---
name: FloatingPanelContextDemo
---
::

## API

See [Ark UI Floating Panel docs](https://ark-ui.com/vue/docs/components/floating-panel) for full props and examples.
