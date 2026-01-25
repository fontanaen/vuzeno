<script setup lang="ts">
import { Autocomplete, AutocompleteContent, AutocompleteControl, AutocompleteGroup, AutocompleteInput, AutocompleteItem, AutocompleteLabel, AutocompleteStatus } from "@vuetella/registry/ui/autocomplete";
import { InputGroupAddon } from "@vuetella/ui/components/input-group";
import { useDebounceFn } from "@vueuse/core";
import { LoaderIcon, SearchIcon } from "lucide-vue-next";
import { ref, watch } from "vue";

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
const filteredItems = ref<typeof allUsers>([]);
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
    filteredItems.value = allUsers.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()) || user.email.toLowerCase().includes(query.toLowerCase()));
  }

  isLoading.value = false;
}, 300);

// Watch search term and fetch results
watch(
  searchTerm,
  (newValue) => {
    fetchUsers(newValue);
  },
  { immediate: false },
);
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
