---
title: Autocomplete
description: A composable autocomplete component with search functionality, built on top of Combobox
name: autocomplete
---

<script setup lang="ts">
import BasicDemo from "../../../.vitepress/components/demo/autocomplete/BasicDemo.vue"
import AsyncDemo from "../../../.vitepress/components/demo/autocomplete/AsyncDemo.vue"
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
            <AutocompleteTrigger>
                <InputGroupAddon>
                    <SearchIcon class="size-4" />
                </InputGroupAddon>
            </AutocompleteControl>
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

Install from the Vuetella registry with the shadcn-vue CLI (requires an existing shadcn-vue project with `components.json`):

<InstallationTabs exec value="shadcn-vue@latest add https://vuetella.dev/r/autocomplete.json" />

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

const users = [
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

const fetchUsers = useDebounceFn(async (query: string) => {
  isLoading.value = true;
  
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  if (!query.trim()) {
    filteredItems.value = [];
  } else {
    filteredItems.value = users.filter((user) =>
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
            <AutocompleteTrigger as-child>
                <InputGroupAddon>
                    <SearchIcon class="size-4" />
                </InputGroupAddon>
            </AutocompleteTrigger>
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

```vue{6-8}
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

