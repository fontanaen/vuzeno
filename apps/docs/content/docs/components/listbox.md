---
title: Listbox
description: Listbox component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/listbox
---

::component-preview
---
component: listbox
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/listbox.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Listbox } from "@vuzeno/registry/ui/listbox";
</script>

<template>
  <Listbox.Root>
    <!-- … -->
  </Listbox.Root>
</template>
```

## Examples

### Controlled

The Listbox component can be controlled by using the `value` and `onValueChange` props. This allows you to manage the selected value externally.

::component-preview
---
component: listbox
name: controlled
---
::

### Root Provider

An alternative way to control the listbox is to use the `RootProvider` component and the `useListbox` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: listbox
name: root-provider
---
::

### Disabled Item

Listbox items can be disabled using the `disabled` prop on the collection item.

::component-preview
---
component: listbox
name: disabled-item
---
::

### Multiple

You can set the `selectionMode` property as `multiple` to allow the user to select multiple items at a time.

::component-preview
---
component: listbox
name: multiple
---
::

### Grouping

The Listbox component supports grouping items. You can use the `groupBy` function to group items based on a specific property.

::component-preview
---
component: listbox
name: grouping
---
::

### Extended Selection

The extended selection mode allows users to select multiple items using keyboard modifiers like `Cmd` (Mac) or `Ctrl` (Windows/Linux).

::component-preview
---
component: listbox
name: extended-selection
---
::

### Horizontal

Use the `orientation` prop to display the listbox items horizontally.

::component-preview
---
component: listbox
name: horizontal
---
::

### Grid Layout

Use `createGridCollection` to display items in a grid layout with keyboard navigation support.

::component-preview
---
component: listbox
name: grid-layout
---
::

### Filtering

Use `useListCollection` with the `filter` function to enable filtering of items.

::component-preview
---
component: listbox
name: filtering
---
::

### Select All

Use `useListboxContext` to implement a "Select All" functionality that allows users to select or deselect all items at once.

::component-preview
---
component: listbox
name: select-all
---
::

### Value Text

Use `Listbox.ValueText` to display the selected values as a comma-separated string.

::component-preview
---
component: listbox
name: value-text
---
::

## Composition

```
Listbox.Root
├── Listbox.Context
├── Listbox.Content
├── Listbox.Empty
├── Listbox.Input
├── Listbox.Item
├── Listbox.ItemContext
├── Listbox.ItemGroup
├── Listbox.ItemGroupLabel
├── Listbox.ItemIndicator
├── Listbox.ItemText
├── Listbox.Label
├── Listbox.RootProvider
├── Listbox.ValueText
```

## API

See [Ark UI Listbox docs](https://ark-ui.com/vue/docs/components/listbox) for full props and examples.
