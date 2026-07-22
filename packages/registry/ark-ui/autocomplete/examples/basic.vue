<script setup lang="ts">
import { useFilter } from "@ark-ui/vue/locale";
import type { AutocompleteInputValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-vue-next";

const filters = useFilter({ sensitivity: "base" });

const { collection, filter } = useListCollection({
  initialItems: [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
    { label: "Elderberry", value: "elderberry" },
    { label: "Fig", value: "fig" },
  ],
  filter: filters.value.contains,
});

function handleInputChange(details: AutocompleteInputValueChangeDetails) {
  filter(details.inputValue);
}
</script>

<template>
  <Autocomplete.Root
    :collection="collection"
    @input-value-change="handleInputChange"
  >
    <Autocomplete.Label>Fruit</Autocomplete.Label>
    <Autocomplete.Control>
      <Autocomplete.Input placeholder="e.g. Apple" />
      <Autocomplete.Indicators>
        <Autocomplete.ClearTrigger>
          <XIcon />
        </Autocomplete.ClearTrigger>
        <Autocomplete.Trigger>
          <ChevronsUpDownIcon />
        </Autocomplete.Trigger>
      </Autocomplete.Indicators>
    </Autocomplete.Control>
    
    <Autocomplete.Content>
      <Autocomplete.Empty>No results found</Autocomplete.Empty>
      <Autocomplete.Item
        v-for="item in collection.items"
        :key="item.value"
        :item="item"
      >
        <Autocomplete.ItemText>{{ item.label }}</Autocomplete.ItemText>
        <Autocomplete.ItemIndicator>
          <CheckIcon />
        </Autocomplete.ItemIndicator>
      </Autocomplete.Item>
    </Autocomplete.Content>
  </Autocomplete.Root>
</template>
