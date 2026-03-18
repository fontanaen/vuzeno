---
title: Autocomplete
description: A composable autocomplete component with search functionality, built on top of Combobox
tag: new
---

A fully-featured autocomplete component built on top of the Combobox primitive. It provides search-as-you-type functionality with customizable filtering, loading states, and flexible item rendering.

::component-preview 
---
name: AutocompleteDemo
---
::

## Features

- **Search-as-you-type** — Real-time filtering as the user types
- **Custom filtering** — Control filtering behavior with `ignoreFilter` prop
- **Loading states** — Built-in support for async data fetching
- **Flexible rendering** — Customizable item display with slots
- **Keyboard navigation** — Full keyboard support for navigation and selection
- **Grouped items** — Organize items into labeled groups
- **Status messages** — Display loading, empty, or custom status messages
- **Composable** — Flexible slot-based architecture

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/autocomplete.json
exec: true
---
::

<!-- <InstallationTabs exec value="shadcn-vue@latest add https://vuzeno.com/r/autocomplete.json" /> -->

## Examples

### Async Options

Fetch options from an API with debouncing, loading states, and custom filtering. Use `ignoreFilter` to disable built-in filtering and implement server-side search.

::component-preview 
---
name: AutocompleteAsyncDemo
---
::

### Custom Filtering

Use `ignoreFilter` to implement server-side filtering or custom filtering logic.

### Grouped Items

Organize items into labeled groups for better organization and navigation.

### Input Group Addons

Add icons or buttons to the input field using `InputGroupAddon` within `AutocompleteControl`.

```vue{6-8} showLineNumbers
<template>
    <Autocomplete>
        <AutocompleteControl>
            <AutocompleteInput />
            <AutocompleteTrigger>
                <InputGroupAddon>
                    <SearchIcon class="size-4" />
                </InputGroupAddon>
            </AutocompleteTrigger>
        </AutocompleteControl>

        <AutocompleteContent class="w-96">
            ...
        </AutocompleteContent>
    </Autocomplete>
</template>
```

## Search and Filtering

The autocomplete component supports two filtering modes:

### Client-side Filtering (Default)

By default, the component filters items automatically based on the `searchTerm`. Items are matched using the `by` prop (defaults to `"label"`).

### Server-side Filtering

Set `ignoreFilter` to `true` to disable built-in filtering. This allows you to:
- Fetch filtered results from an API
- Implement custom filtering logic
- Control the filtering behavior completely

Watch the `searchTerm` model to trigger your own filtering or API calls.
