---
title: Tabs
description: Tabs component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/tabs
---

::component-preview
---
component: tabs
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/tabs.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Tabs } from "@vuzeno/registry/ui/tabs";
</script>

<template>
  <Tabs.Root>
    <!-- … -->
  </Tabs.Root>
</template>
```

## Composition

```
Tabs.Root
├── Tabs.TabList
│   ├── Tabs.TabTrigger
│   ├── Tabs.TabTriggerIndicator
│   └── Tabs.TabIndicator
├── Tabs.TabContent
├── Tabs.Context
└── Tabs.RootProvider
```

## Examples

### Controlled

To create a controlled Tabs component, manage the current selected tab using the `value` prop and update it when the `onValueChange` event handler is called.

::component-preview
---
component: tabs
name: controlled
---
::

### Root Provider

An alternative way to control the tabs is to use the `RootProvider` component and the `useTabs` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: tabs
name: root-provider
---
::

### Indicator

To provide a visual cue for the selected tab, use the `Tabs.TabIndicator` component with `Tabs.TabTriggerIndicator` triggers.

::component-preview
---
component: tabs
name: indicator
---
::

### Disabled

To disable a tab, pass the `disabled` prop to the `Tabs.TabTrigger` component.

::component-preview
---
component: tabs
name: disabled
---
::

### Vertical

The default orientation of the tabs is `horizontal`. To change the orientation, set the `orientation` prop to `vertical`.

::component-preview
---
component: tabs
name: vertical
---
::

### Lazy Mount

Lazy mounting renders tab content only when the tab is first activated. Use `lazy-mount` and `unmount-on-exit` on `Tabs.Root` to free resources when a tab is deactivated.

::component-preview
---
component: tabs
name: lazy-mount
---
::

### Manual Activation

By default, the tab can be selected when it receives focus from either the keyboard or pointer interaction. With `activation-mode="manual"`, the tab is selected with the Enter key or by clicking on the tab.

::component-preview
---
component: tabs
name: manual-activation
---
::

### Links

Use the `as-child` prop to render tab triggers as anchor links. This is useful for SEO and allows tabs to work with browser navigation.

::component-preview
---
component: tabs
name: links
---
::

## API

See [Ark UI Tabs docs](https://ark-ui.com/vue/docs/components/tabs) for full props and examples.
