---
title: Select
description: Vue select dropdown to pick a value from a searchable, keyboard-accessible list of options.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/select
---

::component-preview
---
component: select
name: basic
---
::

## Installation

Install from the Vuzeno registry:

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
component: select
name: controlled
---
::

### Root Provider

An alternative way to control the select is to use the `RootProvider` component and the `useSelect` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: select
name: root-provider
---
::

### Multiple

To enable `multiple` item selection:

::component-preview
---
component: select
name: multiple
---
::

### Grouping

Grouping related options can be useful for organizing options into categories.

- Use the `groupBy` prop to configure the grouping of the items.
- Use the `collection.group()` method to get the grouped items.
- Use the `Select.ItemGroup` and `Select.ItemGroupLabel` components to render the grouped items.

::component-preview
---
component: select
name: grouping
---
::

### Field

Use `Field` to manage form state, ARIA labels, helper text, and error text.

::component-preview
---
component: select
name: field
---
::

### Form Usage

Here's an example of integrating the `Select` component with a form.

::component-preview
---
component: select
name: form-usage
---
::

### Async Loading

Here's an example of how to load the items asynchronously when the select is opened.

::component-preview
---
component: select
name: async-loading
---
::

### Lazy Mount

Use `lazyMount` and `unmountOnExit` to control when content is mounted, improving performance.

::component-preview
---
component: select
name: lazy-mount
---
::

### Select on Highlight

Here's an example of automatically selecting items when they are highlighted (hovered or navigated to with keyboard).

::component-preview
---
component: select
name: select-on-highlight
---
::

### Max Selection

Here's an example of limiting the number of items that can be selected in a multiple select.

::component-preview
---
component: select
name: max-selection
---
::

### Select All

Use `selectAll()` from the select context to select all items at once.

::component-preview
---
component: select
name: select-all
---
::

### Overflow

For selects with many items, use `positioning.fitViewport` to ensure the dropdown fits within the viewport. Combine with a max-height on the content to enable scrolling.

::component-preview
---
component: select
name: overflow
---
::

## API

See [Ark UI Select docs](https://ark-ui.com/vue/docs/components/select) for full props and examples.
