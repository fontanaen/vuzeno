---
title: Drawer
description: Drawer component built on Ark UI.
tag: beta
links:
  api: https://ark-ui.com/vue/docs/components/drawer
---

::component-preview
---
component: drawer
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/drawer.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Drawer } from "@vuzeno/registry/ui/drawer";
</script>

<template>
  <Drawer.Root>
    <!-- … -->
  </Drawer.Root>
</template>
```

## Composition

```
Drawer.Root
├── Drawer.CloseTrigger
├── Drawer.Content
├── Drawer.Description
├── Drawer.Context
├── Drawer.Grabber
├── Drawer.GrabberIndicator
├── Drawer.Indent
├── Drawer.IndentBackground
├── Drawer.RootProvider
├── Drawer.Stack
├── Drawer.SwipeArea
├── Drawer.Title
├── Drawer.Trigger
```

## Examples

### Swipe Direction

Use the `swipeDirection` prop to control which edge the drawer slides in from.

::component-preview
---
component: drawer
name: swipe-direction
---
::

### Snap Points

Use the `snapPoints` prop to define intermediate positions the drawer can snap to.

::component-preview
---
component: drawer
name: snap-points
---
::

### Modal

Set `modal` to `false` to allow interaction with the rest of the page while the drawer is open.

::component-preview
---
component: drawer
name: modal
---
::

### Controlled

Use the `open` and `onOpenChange` props to control the drawer state.

::component-preview
---
component: drawer
name: controlled
---
::

### Scrollable

::component-preview
---
component: drawer
name: scrollable
---
::

### No Drag Area

Apply the `data-no-drag` attribute to any element inside the drawer to prevent dragging from starting on it.

::component-preview
---
component: drawer
name: no-drag-area
---
::

### Non Draggable

Set `draggable` to `false` to disable drag-to-dismiss entirely.

::component-preview
---
component: drawer
name: non-draggable
---
::

### Indent Background

Use `Drawer.IndentBackground` to create a visual indent effect on the page behind the drawer.

::component-preview
---
component: drawer
name: indent-background
---
::

### Multiple Triggers

Use the `value` prop on `Drawer.Trigger` to share a single drawer across multiple trigger elements. The `onTriggerValueChange` callback fires when a different trigger is activated.

::component-preview
---
component: drawer
name: multiple-triggers
---
::

### Using the Root Provider

Use the `useDrawer` hook and `Drawer.RootProvider` to control the drawer from outside the component tree.

::component-preview
---
component: drawer
name: root-provider
---
::

## API

See [Ark UI Drawer docs](https://ark-ui.com/vue/docs/components/drawer) for full props and examples.
