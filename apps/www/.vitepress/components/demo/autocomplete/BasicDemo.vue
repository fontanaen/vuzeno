<script setup lang="ts">
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteControl,
  AutocompleteGroup,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteLabel,
  AutocompleteStatus,
  AutocompleteTrigger,
} from "@vuetella/registry/ui/autocomplete";
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
            <AutocompleteTrigger as-child>
                <InputGroupAddon>
                    <SearchIcon class="size-4" />
                </InputGroupAddon>
            </AutocompleteTrigger>
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
