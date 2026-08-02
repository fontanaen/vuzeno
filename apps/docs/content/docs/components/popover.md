---
title: Popover
description: Vue popover to show contextual content anchored to a trigger without blocking the page.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/popover
---

::component-preview
---
component: popover
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/popover.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Popover } from "@vuzeno/registry/ui/popover";
</script>

<template>
  <Popover.Root>
    <!-- … -->
  </Popover.Root>
</template>
```

## Composition

```
Popover.Root
├── Popover.Anchor
├── Popover.ArrowTip
├── Popover.Arrow
├── Popover.CloseTrigger
├── Popover.Content
├── Popover.Context
├── Popover.Description
├── Popover.Indicator
├── Popover.RootProvider
├── Popover.Title
├── Popover.Trigger
```

## Examples

### Controlled

Use the `open` and `onOpenChange` props to control the open state of the popover.

::component-preview
---
component: popover
name: controlled
---
::

### Root Provider

An alternative way to control the popover is to use the `RootProvider` component and the `usePopover` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: popover
name: root-provider
---
::

### Arrow

Use `Popover.Arrow` and `Popover.ArrowTip` to render an arrow pointing to the trigger.

::component-preview
---
component: popover
name: arrow
---
::

### Placement

To change the placement of the popover, set the `positioning` prop.

::component-preview
---
component: popover
name: placement
---
::

### Close Behavior

The popover is designed to close on blur and when the esc key is pressed.

- To prevent it from closing on blur (clicking or focusing outside), pass the `closeOnInteractOutside` prop and set it to `false`.
- To prevent it from closing when the esc key is pressed, pass the `closeOnEsc` prop and set it to `false`.

::component-preview
---
component: popover
name: close-behavior
---
::

### Modality

In some cases, you might want the popover to be modal. This means that it'll trap focus within its content, block scrolling on the body, disable pointer interactions outside the popover, and hide content behind the popover from screen readers.

::component-preview
---
component: popover
name: modality
---
::

### Anchor

Use `Popover.Anchor` to position the popover relative to a different element than the trigger.

::component-preview
---
component: popover
name: anchor
---
::

### Same Width

Use `positioning.sameWidth` to make the popover match the width of its trigger element.

::component-preview
---
component: popover
name: same-width
---
::

### Dialog Integration

When rendering a popover inside a dialog, use `lazyMount` and `unmountOnExit` on the popover root so it is properly unmounted when the dialog closes.

::component-preview
---
component: popover
name: dialog-integration
---
::

### Nested

Popovers can be nested within each other. Each nested popover maintains its own open state and positioning.

::component-preview
---
component: popover
name: nested
---
::

### Multiple Triggers

Share a single popover across multiple trigger elements. Pass a `value` to each `Popover.Trigger` — the popover repositions to whichever trigger is activated without closing.

::component-preview
---
component: popover
name: multiple-triggers
---
::

## API

See [Ark UI Popover docs](https://ark-ui.com/vue/docs/components/popover) for full props and examples.
