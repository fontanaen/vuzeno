---
title: Autocomplete
description: A composable autocomplete component with search functionality, built on top of Combobox
name: autocomplete
---

<script setup lang="ts">
import BasicDemo from "../../.vitepress/components/demo/autocomplete/BasicDemo.vue"
import AsyncDemo from "../../.vitepress/components/demo/autocomplete/AsyncDemo.vue"
</script>

# Autocomplete

A fully-featured autocomplete component built on top of the Combobox primitive. It provides search-as-you-type functionality with customizable filtering, loading states, and flexible item rendering.

<ComponentPreview :component="BasicDemo">

```vue
<script setup lang="ts">
import { Autocomplete, AutocompleteContent, AutocompleteControl, AutocompleteGroup, AutocompleteInput, AutocompleteItem, AutocompleteLabel, AutocompleteStatus } from "@vuetella/registry/ui/autocomplete";
import { InputGroupAddon } from "@vuetella/ui/components/input-group";
import { SearchIcon } from "lucide-vue-next";
import { useFilter } from "reka-ui";
import { computed, ref } from "vue";

const items = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
  { value: "fig", label: "Fig" },
  { value: "grape", label: "Grape" },
];

const searchTerm = ref("");
const value = ref();

const { startsWith } = useFilter({ sensitivity: "base" });

const filteredItems = computed(() => {
  if (!searchTerm.value) return items;
  return items.filter((item) => startsWith(item.label, searchTerm.value));
});
</script>

<template>
    <Autocomplete v-model="value" v-model:search-term="searchTerm" class="w-96">
        <AutocompleteControl>
            <AutocompleteInput placeholder="Search fruits..." />
            <InputGroupAddon>
                <SearchIcon class="size-4" />
            </InputGroupAddon>
        </AutocompleteControl>

        <AutocompleteContent class="w-96">
            <AutocompleteStatus v-if="filteredItems.length === 0">
                <span>No results found</span>
            </AutocompleteStatus>

            <AutocompleteGroup v-else>
                <AutocompleteLabel>Fruits</AutocompleteLabel>
                <AutocompleteItem 
                    v-for="item in filteredItems" 
                    :key="item.value" 
                    :text-value="item.label" 
                    :value="item.value"
                >
                    {{ item.label }}
                </AutocompleteItem>
            </AutocompleteGroup>
        </AutocompleteContent>
    </Autocomplete>
</template>
```

</ComponentPreview>

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

<!-- @todo: Add installation instructions -->

## Components

### Autocomplete

The root component that provides context to all child components. Manages the selected value and search term state.

<PropsTable 
    :data="[
        { name: 'modelValue', type: 'AcceptableValue | AcceptableValue[]', default: null, description: 'The selected value(s)' },
        { name: 'searchTerm', type: 'string', default: '', description: 'The current search term (v-model)' },
        { name: 'highlightOnHover', type: 'boolean', default: 'true', description: 'Highlight items on hover' },
        { name: 'ignoreFilter', type: 'boolean', default: null, description: 'Disable built-in filtering (useful for server-side filtering)' },
        { name: 'by', type: 'string | function', default: 'label', description: 'Property or function to use for value comparison' },
        { name: 'items', type: 'Array', default: null, description: 'Array of items to display' },
        { name: 'isLoading', type: 'boolean', default: null, description: 'Loading state indicator' }
    ]"
/>

<EventsTable 
    :data="[
        { name: 'update:modelValue', type: 'AcceptableValue | AcceptableValue[]', description: 'Emitted when selection changes' },
        { name: 'update:searchTerm', type: 'string', description: 'Emitted when search term changes' }
    ]"
/>

### AutocompleteControl

A wrapper component that contains the input field and optional addons. Uses `InputGroup` internally for consistent styling.

<PropsTable 
    :data="[
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### AutocompleteInput

The search input field that binds to the search term. Automatically syncs with the parent `Autocomplete` context.

<PropsTable 
    :data="[
        { name: 'placeholder', type: 'string', default: null, description: 'Input placeholder text' },
        { name: 'disabled', type: 'boolean', default: null, description: 'Disable the input' },
        { name: 'displayValue', type: 'function', default: null, description: 'Function to format the displayed value' },
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### AutocompleteContent

The dropdown container that displays the list of items. Positioned relative to the control.

<PropsTable 
    :data="[
        { name: 'align', type: 'start | center | end', default: 'start', description: 'Alignment relative to the control' },
        { name: 'sideOffset', type: 'number', default: '8', description: 'Distance from the control in pixels' },
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### AutocompleteItem

An individual selectable item in the list. Displays a checkmark icon when selected.

<PropsTable 
    :data="[
        { name: 'value', type: 'any', default: null, description: 'The item value (required)' },
        { name: 'textValue', type: 'string', default: null, description: 'Text value used for filtering' },
        { name: 'disabled', type: 'boolean', default: null, description: 'Disable this item' },
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### AutocompleteGroup

Groups related items together. Use with `AutocompleteLabel` to create labeled sections.

<PropsTable 
    :data="[
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### AutocompleteLabel

A label for a group of items. Styled with muted text and smaller font size.

<PropsTable 
    :data="[
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### AutocompleteStatus

A container for displaying status messages like loading indicators, empty states, or result counts.

<PropsTable 
    :data="[
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

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

## Examples

### Async Options

Fetch options from an API with debouncing, loading states, and custom filtering. Use `ignoreFilter` to disable built-in filtering and implement server-side search.

<ComponentPreview :component="AsyncDemo">

```vue
<script setup lang="ts">
import { Autocomplete, AutocompleteContent, AutocompleteControl, AutocompleteGroup, AutocompleteInput, AutocompleteItem, AutocompleteLabel, AutocompleteStatus } from "@vuetella/registry/ui/autocomplete";
import { InputGroupAddon } from "@vuetella/ui/components/input-group";
import { LoaderIcon, SearchIcon } from "lucide-vue-next";
import { ref, watch } from "vue";
import { useDebounceFn } from "@vueuse/core";

// Mock API data - in a real app, this would come from an API
const allUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
  { id: 4, name: "Diana Prince", email: "diana@example.com" },
  { id: 5, name: "Eve Adams", email: "eve@example.com" },
  { id: 6, name: "Frank Miller", email: "frank@example.com" },
  { id: 7, name: "Grace Lee", email: "grace@example.com" },
  { id: 8, name: "Henry Wilson", email: "henry@example.com" },
];

const searchTerm = ref("");
const value = ref();
const filteredItems = ref([]);
const isLoading = ref(false);

// Simulate API call with debouncing
const fetchUsers = useDebounceFn(async (query: string) => {
  isLoading.value = true;
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  if (!query.trim()) {
    filteredItems.value = [];
  } else {
    // Simulate server-side filtering
    filteredItems.value = allUsers.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  isLoading.value = false;
}, 300);

// Watch search term and fetch results
watch(searchTerm, (newValue) => {
  fetchUsers(newValue);
});
</script>

<template>
    <Autocomplete 
        v-model="value" 
        v-model:search-term="searchTerm" 
        ignore-filter 
        class="w-96"
    >
        <AutocompleteControl>
            <AutocompleteInput 
                placeholder="Search users..." 
                :display-value="(v) => v?.name || ''"
            />
            <InputGroupAddon>
                <SearchIcon class="size-4" />
            </InputGroupAddon>
        </AutocompleteControl>

        <AutocompleteContent class="w-96">
            <AutocompleteStatus v-if="isLoading" class="flex items-center gap-2">
                <LoaderIcon class="size-4 animate-spin" />
                <span>Searching...</span>
            </AutocompleteStatus>

            <AutocompleteStatus v-else-if="!isLoading && searchTerm && filteredItems.length === 0">
                <span>No users found</span>
            </AutocompleteStatus>

            <AutocompleteStatus v-else-if="!isLoading && filteredItems.length > 0">
                {{ filteredItems.length }} {{ filteredItems.length === 1 ? 'user' : 'users' }} found
            </AutocompleteStatus>

            <AutocompleteGroup v-if="!isLoading && filteredItems.length > 0">
                <AutocompleteLabel>Users</AutocompleteLabel>
                <AutocompleteItem 
                    v-for="user in filteredItems" 
                    :key="user.id" 
                    :value="user"
                >
                    <div class="flex flex-col">
                        <span class="font-medium">{{ user.name }}</span>
                        <span class="text-xs text-muted-foreground">{{ user.email }}</span>
                    </div>
                </AutocompleteItem>
            </AutocompleteGroup>
        </AutocompleteContent>
    </Autocomplete>
</template>
```

</ComponentPreview>

### Custom Filtering

Use `ignoreFilter` to implement server-side filtering or custom filtering logic.

### Grouped Items

Organize items into labeled groups for better organization and navigation.

### Input Group Addons

Add icons or buttons to the input field using `InputGroupAddon` within `AutocompleteControl`.

## Accessibility

<!-- @todo: Document accessibility features -->

## API Reference

### Exports

<ExportsTable 
    :data="[
        { name: 'Autocomplete', description: 'Root provider component' },
        { name: 'AutocompleteControl', description: 'Input control wrapper' },
        { name: 'AutocompleteInput', description: 'Search input field' },
        { name: 'AutocompleteContent', description: 'Dropdown content container' },
        { name: 'AutocompleteItem', description: 'Selectable item' },
        { name: 'AutocompleteGroup', description: 'Item group container' },
        { name: 'AutocompleteLabel', description: 'Group label' },
        { name: 'AutocompleteStatus', description: 'Status message container' },
        { name: 'useAutocompleteContext', description: 'Composable to access autocomplete context' }
    ]"
/>
