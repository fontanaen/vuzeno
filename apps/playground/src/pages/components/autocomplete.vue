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
import { LoaderIcon, SearchIcon } from "lucide-vue-next";
import { ref, watch } from "vue";

definePage({
  name: "components.autocomplete",
});

const items = ref([
  { value: "item-1", label: "Item 1" },
  { value: "item-2", label: "Item 2" },
  { value: "item-3", label: "Item 3" },
]);

const filteredItems = ref(items.value);

const searchTerm = ref("");
const searchTerm2 = ref("");
const value = ref();
const value2 = ref();

const isLoading = ref(false);

function fetchItems() {
  isLoading.value = true;
  return new Promise((resolve) => {
    setTimeout(() => {
      isLoading.value = false;
      filteredItems.value = items.value.filter((item) => item.label.toLowerCase().includes(searchTerm2.value.toLowerCase()));
      resolve(items.value);
    }, 1000);
  });
}

watch(searchTerm2, () => {
  fetchItems();
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4 w-96">
      <Autocomplete v-model="value" v-model:search-term="searchTerm" :items="items" :is-loading="isLoading">
        <AutocompleteControl>
          <AutocompleteInput placeholder="Search" />

          <InputGroupAddon>
            <AutocompleteTrigger as-child>
              <SearchIcon class="size-4" />
            </AutocompleteTrigger>
          </InputGroupAddon>
        </AutocompleteControl>

        <AutocompleteContent class="w-96">
          <AutocompleteStatus v-if="filteredItems.length === 0">
            <span>No results found</span>
          </AutocompleteStatus>

          <AutocompleteGroup>
            <AutocompleteLabel>Items</AutocompleteLabel>
            <AutocompleteItem v-for="item in items" :key="item.value" :text-value="item.label" :value="item.value">
              <span>{{ item.value }}</span>
            </AutocompleteItem>
          </AutocompleteGroup>
        </AutocompleteContent>
      </Autocomplete>

      <Autocomplete disabled>
        <AutocompleteControl>
          <AutocompleteInput placeholder="Disabled" />

          <InputGroupAddon>
            <SearchIcon class="size-4" />
          </InputGroupAddon>
        </AutocompleteControl>

        <AutocompleteContent class="w-96">
          <AutocompleteStatus v-if="filteredItems.length === 0">
            <span>No results found</span>
          </AutocompleteStatus>

          <AutocompleteGroup>
            <AutocompleteLabel>Items</AutocompleteLabel>
            <AutocompleteItem v-for="item in items" :key="item.value" :text-value="item.label" :value="item.value">
              <span>{{ item.value }}</span>
            </AutocompleteItem>
          </AutocompleteGroup>
        </AutocompleteContent>
      </Autocomplete>

      <Autocomplete v-model="value2" v-model:search-term="searchTerm2" :items="filteredItems" :is-loading="isLoading" ignore-filter>
        <AutocompleteControl>
          <AutocompleteInput :display-value="(v) => v?.label" placeholder="Async Search" />

          <InputGroupAddon>
            <SearchIcon class="size-4" />
          </InputGroupAddon>
        </AutocompleteControl>

        <AutocompleteContent class="w-96">
          <AutocompleteStatus v-if="isLoading" class="flex items-center gap-2">
            <LoaderIcon class="size-4 animate-spin" />
            <span>Loading...</span>
          </AutocompleteStatus>

          <AutocompleteStatus v-else-if="filteredItems.length === 0">
            <span>No results found</span>
          </AutocompleteStatus>

          <AutocompleteStatus v-else>
            {{ filteredItems.length }} results
          </AutocompleteStatus>

          <AutocompleteGroup v-if="filteredItems.length > 0">
            <AutocompleteLabel>Items</AutocompleteLabel>
            <AutocompleteItem v-for="item in filteredItems" :key="item.value" :value="item">
              <span>{{ item.label }}</span>
            </AutocompleteItem>
          </AutocompleteGroup>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  </div>
</template>