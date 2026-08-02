---
title: Collapsible
description: Vue collapsible panel to show or hide content behind a trigger, ideal for progressive disclosure.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/collapsible
---

::component-preview
---
component: collapsible
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/collapsible.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Collapsible } from "@vuzeno/registry/ui/collapsible";
</script>

<template>
  <Collapsible.Root>
    <!-- … -->
  </Collapsible.Root>
</template>
```

## Composition

```
Collapsible.Root
├── Collapsible.Trigger
│   └── Collapsible.Indicator
├── Collapsible.Content
│   └── Collapsible.Body
├── Collapsible.Context
└── Collapsible.RootProvider
```

## Examples

### Disabled

Use the `disabled` prop to disable the collapsible and prevent it from being toggled.

::component-preview
---
component: collapsible
name: disabled
---
::

### Partial Collapse

Use the `collapsedHeight` or `collapsedWidth` props to create a "show more/less" pattern. When set, the content maintains the specified dimensions when collapsed instead of collapsing to 0px.

We expose the `--collapsed-height` or `--collapsed-width` variables to use in your CSS animations.

::component-preview
---
component: collapsible
name: partial-collapse
---
::

### Nested Collapsibles

You can nest collapsibles within collapsibles to create hierarchical content structures.

::component-preview
---
component: collapsible
name: nested
---
::

### Lazy Mount

Use `lazyMount` to delay mounting the content until first opened, and `unmountOnExit` to remove it from the DOM when collapsed. Combining both ensures the component is only in the DOM while expanded.

::component-preview
---
component: collapsible
name: lazy-mount
---
::

### Root Provider

An alternative way to control the collapsible is to use the `RootProvider` component and the `useCollapsible` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: collapsible
name: root-provider
---
::

## API

See [Ark UI Collapsible docs](https://ark-ui.com/vue/docs/components/collapsible) for full props and examples.
