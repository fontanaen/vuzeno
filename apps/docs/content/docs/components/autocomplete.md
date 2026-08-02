---
title: Autocomplete
description: Vue autocomplete combobox to search and select from a filtered list of suggestions as you type.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/combobox
---

::component-preview
---
component: autocomplete
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/autocomplete.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Autocomplete } from "@vuzeno/registry/ui/autocomplete";
</script>

<template>
  <Autocomplete.Root>
    <!-- … -->
  </Autocomplete.Root>
</template>
```

## Composition

```
Autocomplete.Root
├── Autocomplete.Label
├── Autocomplete.Control
│   ├── Autocomplete.Input
│   ├── Autocomplete.Indicators
│   │   ├── Autocomplete.ClearTrigger
│   │   └── Autocomplete.Trigger
│   └── Autocomplete.Tags
├── Autocomplete.Content
│   ├── Autocomplete.Empty
│   ├── Autocomplete.Status
│   ├── Autocomplete.ItemGroup
│   │   ├── Autocomplete.ItemGroupLabel
│   │   └── Autocomplete.Item
│   └── Autocomplete.Scroller
├── Autocomplete.Context
└── Autocomplete.RootProvider
```

## Examples

### Auto Highlight

Automatically highlight the first matching item as the user types by setting `inputBehavior="autohighlight"`.

::component-preview
---
component: autocomplete
name: auto-highlight
---
::

### Inline Autocomplete

Complete the input value with the first matching item by setting `inputBehavior="autocomplete"`. Use with `startsWith` filter for best results.

::component-preview
---
component: autocomplete
name: inline-autocomplete
---
::

### Grouping

To group related autocomplete items, use the `groupBy` prop on the collection and `collection.group()` to iterate the groups.

::component-preview
---
component: autocomplete
name: grouping
---
::

### Field

The `Field` component helps manage form-related state and accessibility attributes of an autocomplete. It includes handling ARIA labels, helper text, and error text to ensure proper accessibility.

::component-preview
---
component: autocomplete
name: field
---
::

### Context

Access the autocomplete's state with `Autocomplete.Context` or the `useAutocompleteContext` hook—useful for displaying the selected value or building custom UI.

::component-preview
---
component: autocomplete
name: context
---
::

### Root Provider

An alternative way to control the autocomplete is to use the `RootProvider` component and the `useAutocomplete` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: autocomplete
name: root-provider
---
::

### Links

Use the `asChild` prop to render the autocomplete items as links.

::component-preview
---
component: autocomplete
name: links
---
::

### Rehydrate

When an autocomplete has a `defaultValue` or `value` but the `collection` is not loaded yet, you can rehydrate the value to populate the input.

::component-preview
---
component: autocomplete
name: rehydrate
---
::

### Highlight Text

Highlight the matching search text in autocomplete items based on the user's input.

::component-preview
---
component: autocomplete
name: highlight-text
---
::

### Dynamic

Generate autocomplete items dynamically based on user input. This is useful for creating suggestions or autocomplete functionality.

::component-preview
---
component: autocomplete
name: dynamic
---
::

### Creatable

Allow users to create new options when their search doesn't match any existing items. This is useful for tags, categories, or other custom values.

::component-preview
---
component: autocomplete
name: creatable
---
::

### Multiple Selection

Enable multiple selection by setting the `multiple` prop. Selected items can be displayed as tags above the input.

::component-preview
---
component: autocomplete
name: multiple-selection
---
::

### Async Search

Load options asynchronously based on user input using the `useAsyncList` hook. This is useful for searching large datasets or fetching data from an API.

::component-preview
---
component: autocomplete
name: async-search
---
::

### Virtualized

For very large lists, use virtualization with `@tanstack/virtual` to render only the visible items. Pass the `scrollToIndexFn` prop to enable keyboard navigation within the virtualized list.

::component-preview
---
component: autocomplete
name: virtualized
---
::

### Custom Object

Use the `itemToString` and `itemToValue` props to map custom objects to the required interface.

::component-preview
---
component: autocomplete
name: custom-object
---
::

### Limit Results

Use the `limit` property on `useListCollection` to limit the number of rendered items in the DOM.

::component-preview
---
component: autocomplete
name: limit-results
---
::

## API

See [Ark UI Combobox docs](https://ark-ui.com/vue/docs/components/combobox) for full props and examples.
