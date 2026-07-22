---
title: Tooltip
description: Tooltip component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/tooltip
---

::component-preview
---
component: tooltip
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/tooltip.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
</script>

<template>
  <Tooltip.Root>
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Teleport to="body">
      <Tooltip.Positioner>
        <Tooltip.Content>I am a tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Teleport>
  </Tooltip.Root>
</template>
```

## Composition

```
Tooltip.Root
├── Tooltip.Trigger
└── Tooltip.Positioner
    ├── Tooltip.Arrow
    │   └── Tooltip.ArrowTip
    └── Tooltip.Content
```

## Examples

### Controlled

To create a controlled Tooltip component, manage the state of whether the tooltip is open using the `open` prop:

::component-preview
---
component: tooltip
name: controlled
---
::

### Root Provider

An alternative way to control the tooltip is to use the `RootProvider` component and the `useTooltip` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: tooltip
name: root-provider
---
::

### Arrow

To display an arrow pointing to the trigger from the tooltip, use the `Tooltip.Arrow` and `Tooltip.ArrowTip` components:

::component-preview
---
component: tooltip
name: arrow
---
::

### Delay

To configure the open and close delay for the Tooltip, use the `closeDelay` and `openDelay` props:

::component-preview
---
component: tooltip
name: delay
---
::

### Positioning

To customize the position of the Tooltip relative to the trigger, use the `positioning` prop:

::component-preview
---
component: tooltip
name: positioning
---
::

### Context

Access the tooltip's state and methods with `Tooltip.Context` or the `useTooltipContext` hook:

::component-preview
---
component: tooltip
name: context
---
::

### Within Fixed Containers

When rendering a tooltip inside a fixed-position container, set `positioning.strategy` to `"fixed"` to ensure proper positioning.

::component-preview
---
component: tooltip
name: within-fixed
---
::

### Multiple Triggers

Share a single tooltip across multiple trigger elements. Pass a `value` to each `Tooltip.Trigger` — the tooltip repositions to whichever trigger is hovered without closing.

::component-preview
---
component: tooltip
name: multiple-triggers
---
::

## API

See [Ark UI Tooltip docs](https://ark-ui.com/vue/docs/components/tooltip) for full props and examples.
