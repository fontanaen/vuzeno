---
title: Drawer
description: Drawer component built on Ark UI.
tag: beta
links:
  api: https://ark-ui.com/vue/docs/components/drawer
---

::component-preview
---
name: DrawerDemo
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
name: DrawerSwipeDirectionDemo
---
::

### Snap Points

Use the `snapPoints` prop to define intermediate positions the drawer can snap to.

::component-preview
---
name: DrawerSnapPointsDemo
---
::

### Modal

Set `modal` to `false` to allow interaction with the rest of the page while the drawer is open.

::component-preview
---
name: DrawerModalDemo
---
::

### Controlled

Use the `open` and `onOpenChange` props to control the drawer state.

::component-preview
---
name: DrawerControlledDemo
---
::

### Scrollable

::component-preview
---
name: DrawerScrollableDemo
---
::

### No Drag Area

Apply the `data-no-drag` attribute to any element inside the drawer to prevent dragging from starting on it.

::component-preview
---
name: DrawerNoDragAreaDemo
---
::

### Non Draggable

Set `draggable` to `false` to disable drag-to-dismiss entirely.

::component-preview
---
name: DrawerNonDraggableDemo
---
::

### Indent Background

Use `Drawer.IndentBackground` to create a visual indent effect on the page behind the drawer.

::component-preview
---
name: DrawerIndentBackgroundDemo
---
::

### Multiple Triggers

Use the `value` prop on `Drawer.Trigger` to share a single drawer across multiple trigger elements. The `onTriggerValueChange` callback fires when a different trigger is activated.

::component-preview
---
name: DrawerMultipleTriggersDemo
---
::

### Using the Root Provider

Use the `useDrawer` hook and `Drawer.RootProvider` to control the drawer from outside the component tree.

::component-preview
---
name: DrawerRootProviderDemo
---
::

## API

See [Ark UI Drawer docs](https://ark-ui.com/vue/docs/components/drawer) for full props and examples.
