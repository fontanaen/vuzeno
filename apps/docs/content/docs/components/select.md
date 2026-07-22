---
title: Select
description: Select component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/select
---

::component-preview
---
name: SelectDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/select.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Select } from "@vuzeno/registry/ui/select";
</script>

<template>
  <Select.Root>
    <Select.Label>Label</Select.Label>

    <Select.Trigger>
      <Select.Value />
    </Select.Trigger>

    <Select.Content>
      <Select.Item value="option-1">Option 1</Select.Item>
      <Select.Item value="option-2">Option 2</Select.Item>
      <Select.Item value="option-3">Option 3</Select.Item>
    </Select.Content>
  </Select.Root>
</template>
```

## Composition

```
Select.Root
├── Select.Label
├── Select.Trigger
│   └── Select.Value
├── Select.Indicators
│   ├── Select.ClearTrigger
│   └── Select.Indicator
├── Select.Content
│   └── Select.ItemGroup
│       ├── Select.ItemGroupLabel
│       └── Select.Item
│           ├── Select.ItemText
│           └── Select.ItemIndicator
├── Select.Context
└── Select.RootProvider
```

## Examples

### Controlled

Use the `value` and `onValueChange` props to control the selected items.

::component-preview
---
name: SelectControlledDemo
---
::

### Root Provider

An alternative way to control the select is to use the `RootProvider` component and the `useSelect` hook. This way you can access the state and methods from outside the component.

::component-preview
---
name: SelectRootProviderDemo
---
::

### Multiple

To enable `multiple` item selection:

::component-preview
---
name: SelectMultipleDemo
---
::

### Grouping

Grouping related options can be useful for organizing options into categories.

- Use the `groupBy` prop to configure the grouping of the items.
- Use the `collection.group()` method to get the grouped items.
- Use the `Select.ItemGroup` and `Select.ItemGroupLabel` components to render the grouped items.

::component-preview
---
name: SelectGroupingDemo
---
::

### Field

Use `Field` to manage form state, ARIA labels, helper text, and error text.

::component-preview
---
name: SelectFieldDemo
---
::

### Form Usage

Here's an example of integrating the `Select` component with a form.

::component-preview
---
name: SelectFormUsageDemo
---
::

### Async Loading

Here's an example of how to load the items asynchronously when the select is opened.

::component-preview
---
name: SelectAsyncLoadingDemo
---
::

### Lazy Mount

Use `lazyMount` and `unmountOnExit` to control when content is mounted, improving performance.

::component-preview
---
name: SelectLazyMountDemo
---
::

### Select on Highlight

Here's an example of automatically selecting items when they are highlighted (hovered or navigated to with keyboard).

::component-preview
---
name: SelectSelectOnHighlightDemo
---
::

### Max Selection

Here's an example of limiting the number of items that can be selected in a multiple select.

::component-preview
---
name: SelectMaxSelectionDemo
---
::

### Select All

Use `selectAll()` from the select context to select all items at once.

::component-preview
---
name: SelectSelectAllDemo
---
::

### Overflow

For selects with many items, use `positioning.fitViewport` to ensure the dropdown fits within the viewport. Combine with a max-height on the content to enable scrolling.

::component-preview
---
name: SelectOverflowDemo
---
::

## API

See [Ark UI Select docs](https://ark-ui.com/vue/docs/components/select) for full props and examples.
