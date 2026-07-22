---
title: Splitter
description: Splitter component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/splitter
---

::component-preview
---
name: SplitterDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/splitter.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Splitter } from "@vuzeno/registry/ui/splitter";
</script>

<template>
  <Splitter.Root>
    <!-- … -->
  </Splitter.Root>
</template>
```

## Composition

```
Splitter.Root
├── Splitter.Context
├── Splitter.Panel
├── Splitter.ResizeTrigger
├── Splitter.ResizeTriggerIndicator
├── Splitter.RootProvider
```

## Examples

### Context

Access the splitter's API with `Splitter.Context` or the `useSplitterContext` hook. This lets you resize panels programmatically:

::component-preview
---
name: SplitterContextDemo
---
::

### Vertical

By default, the Splitter component is horizontal. If you need a vertical splitter, use the `orientation` prop:

::component-preview
---
name: SplitterVerticalDemo
---
::

### Collapsible Panels

To make a panel collapsible, set the `collapsible` prop to `true` on the panel you want to make collapsible. Additionally, you can use the `collapsedSize` prop to set the size of the panel when it's collapsed.

> This can be useful for building sidebar layouts.

::component-preview
---
name: SplitterCollapsibleDemo
---
::

### Multiple Panels

Here's an example of how to use the `Splitter` component with multiple panels.

::component-preview
---
name: SplitterMultiplePanelsDemo
---
::

### Root Provider

An alternative way to control the splitter is to use the `RootProvider` component and the `useSplitter` hook. This way you can access the state and methods from outside the component.

::component-preview
---
name: SplitterRootProviderDemo
---
::

### Resize Indicator

Use the `Splitter.ResizeTriggerIndicator` component to show a visual indicator on the resize handle.

::component-preview
---
name: SplitterResizeIndicatorDemo
---
::

### Dynamic Collapsible

Use the `collapsePanel()` and `expandPanel()` methods to programmatically control panel collapse based on viewport size. This is useful for responsive sidebar layouts that collapse on smaller screens.

::component-preview
---
name: SplitterDynamicCollapsibleDemo
---
::

### Nested

Nest splitters to build grid-like layouts. Use `createSplitterRegistry()` to create a shared registry between splitter instances — this enables multi-drag at intersection points where horizontal and vertical splitters meet.

::component-preview
---
name: SplitterNestedDemo
---
::

## API

See [Ark UI Splitter docs](https://ark-ui.com/vue/docs/components/splitter) for full props and examples.
