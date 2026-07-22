---
title: Accordion
description: Accordion component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/accordion
---

::component-preview
---
component: accordion
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/accordion.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Accordion } from "@vuzeno/registry/ui/accordion";
</script>

<template>
  <Accordion.Root>
    <!-- … -->
  </Accordion.Root>
</template>
```

## Composition

```
Accordion.Root
├── Accordion.Context
├── Accordion.ItemContent
├── Accordion.ItemContext
├── Accordion.ItemIndicator
├── Accordion.ItemTrigger
├── Accordion.Item
├── Accordion.RootProvider
```

## Examples

### Default Value

Set the `defaultValue` prop to specify which item should be expanded by default.

::component-preview
---
component: accordion
name: default-value
---
::

### Controlled

Use the `value` and `onValueChange` props to control the expanded items.

::component-preview
---
component: accordion
name: controlled
---
::

### Root Provider

An alternative way to control the accordion is to use the `RootProvider` component and the `useAccordion` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: accordion
name: root-provider
---
::

### Collapsible

Use the `collapsible` prop to allow the user to collapse all panels.

::component-preview
---
component: accordion
name: collapsible
---
::

### Multiple

Use the `multiple` prop to allow multiple panels to be expanded simultaneously.

::component-preview
---
component: accordion
name: multiple
---
::

### Horizontal

By default, the Accordion is oriented vertically. Use the `orientation` prop to switch to a horizontal layout.

::component-preview
---
component: accordion
name: horizontal
---
::

### Lazy Mount

Use the `lazyMount` prop to defer rendering of accordion content until the item is expanded. Combine with `unmountOnExit` to unmount content when collapsed, freeing up resources.

::component-preview
---
component: accordion
name: lazy-mount
---
::

### Context

Use `Accordion.Context` or `useAccordionContext` to access the accordion state.

::component-preview
---
component: accordion
name: context
---
::

### Item State

Use `Accordion.ItemContext` or `useAccordionItemContext` to access the state of an accordion item.

::component-preview
---
component: accordion
name: item-context
---
::

## API

See [Ark UI Accordion docs](https://ark-ui.com/vue/docs/components/accordion) for full props and examples.
