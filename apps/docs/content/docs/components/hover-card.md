---
title: Hover Card
description: Hover Card component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/hover-card
---

::component-preview
---
component: hover-card
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/hover-card.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { HoverCard } from "@vuzeno/registry/ui/hover-card";
</script>

<template>
  <HoverCard.Root>
    <!-- … -->
  </HoverCard.Root>
</template>
```

## Composition

```
HoverCard.Root
├── HoverCard.ArrowTip
├── HoverCard.Arrow
├── HoverCard.Content
├── HoverCard.Context
├── HoverCard.Positioner
├── HoverCard.RootProvider
├── HoverCard.Trigger
```

## Examples

### Controlled

The controlled `HoverCard` component provides an interface for managing the state of the hover card using the `open` and `onOpenChange` props:

::component-preview
---
component: hover-card
name: controlled
---
::

### Root Provider

An alternative way to control the hover card is to use the `RootProvider` component and the `useHoverCard` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: hover-card
name: root-provider
---
::

### Delay

Control the open and close delay of the hover card using the `openDelay` and `closeDelay` props:

::component-preview
---
component: hover-card
name: delay
---
::

### Positioning

The `HoverCard` component can be customized in its placement and distance from the trigger element through the `positioning` prop:

::component-preview
---
component: hover-card
name: positioning
---
::

### Context

Access the hover card's state with `HoverCard.Context` or the `useHoverCardContext` hook:

::component-preview
---
component: hover-card
name: context
---
::

### Multiple Triggers

Share a single hover card across multiple trigger elements. Pass a `value` to each `HoverCard.Trigger` — the card repositions to the active trigger without closing.

::component-preview
---
component: hover-card
name: multiple-triggers
---
::

## API

See [Ark UI Hover Card docs](https://ark-ui.com/vue/docs/components/hover-card) for full props and examples.
