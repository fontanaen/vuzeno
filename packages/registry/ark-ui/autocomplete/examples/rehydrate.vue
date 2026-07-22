<script setup lang="ts">
import type { UseAutocompleteProps } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useAutocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { CheckIcon } from "lucide-vue-next";
import { computed, ref, watch, watchEffect } from "vue";

type Character = {
  name: string;
  height: string;
  mass: string;
  created: string;
  edited: string;
  url: string;
};

const inputValue = ref("");
const loading = ref(false);
const error = ref<Error | null>(null);

const { collection, set } = useListCollection<Character>({
  initialItems: [],
  itemToString: (item) => item.name,
  itemToValue: (item) => item.name,
});

const autocomplete = useAutocomplete(
  computed<UseAutocompleteProps<Character>>(() => ({
    collection: collection.value,
    defaultValue: ["C-3PO"],
    placeholder: "Example: Dexter",
    inputValue: inputValue.value,
    onInputValueChange: (event) => {
      inputValue.value = event.inputValue;
    },
  })),
);

let abortController: AbortController | null = null;

watch(inputValue, async (value) => {
  abortController?.abort();
  abortController = new AbortController();
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch(`https://swapi.py4e.com/api/people/?search=${value}`, { signal: abortController.signal });
    const data = await response.json();
    set(data.results);
  } catch (fetchError) {
    if (fetchError instanceof DOMException && fetchError.name === "AbortError") {
      return;
    }
    error.value = fetchError instanceof Error ? fetchError : new Error("Request failed");
  } finally {
    loading.value = false;
  }
});

let hydrated = false;
watchEffect(() => {
  if (autocomplete.value.value.length && autocomplete.value.collection.size && !hydrated) {
    autocomplete.value.syncSelectedItems();
    hydrated = true;
  }
});
</script>

<template>
  <Autocomplete.RootProvider :value="autocomplete">
    <Autocomplete.Label>Search Star Wars Characters</Autocomplete.Label>
    <Autocomplete.Control>
      <Autocomplete.Input placeholder="e.g. Luke" />
    </Autocomplete.Control>
    <Autocomplete.Content>
      <Autocomplete.Status v-if="loading"> Loading... </Autocomplete.Status>
      <Autocomplete.Status v-else-if="error">
        {{ error.message }}
      </Autocomplete.Status>
      <template v-else>
        <Autocomplete.Item
          v-for="item in collection.items"
          :key="item.name"
          :item="item"
        >
          <Autocomplete.ItemText>
            {{ item.name }} - {{ item.height }}cm / {{ item.mass }}kg
          </Autocomplete.ItemText>
          <Autocomplete.ItemIndicator>
            <CheckIcon />
          </Autocomplete.ItemIndicator>
        </Autocomplete.Item>
      </template>
    </Autocomplete.Content>
  </Autocomplete.RootProvider>
</template>
