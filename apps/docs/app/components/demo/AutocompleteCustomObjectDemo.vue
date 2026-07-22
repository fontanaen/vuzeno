<script setup lang="ts">
import type { AutocompleteInputValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-vue-next";

function containsFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().includes(filterText.toLowerCase());
}

const { collection, filter } = useListCollection({
  initialItems: [
    { country: "United States", code: "US", flag: "🇺🇸" },
    { country: "Canada", code: "CA", flag: "🇨🇦" },
    { country: "Australia", code: "AU", flag: "🇦🇺" },
  ],
  itemToString: (item) => item.country,
  itemToValue: (item) => item.code,
  filter: containsFilter,
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
    <Autocomplete.Label>Country</Autocomplete.Label>
    <Autocomplete.Control>
      <Autocomplete.Input placeholder="e.g. Canada" />
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
      <Autocomplete.Item
        v-for="item in collection.items"
        :key="item.code"
        :item="item"
      >
        <Autocomplete.ItemText
          >{{ item.flag }} {{ item.country }}</Autocomplete.ItemText
        >
        <Autocomplete.ItemIndicator>
          <CheckIcon />
        </Autocomplete.ItemIndicator>
      </Autocomplete.Item>
    </Autocomplete.Content>
  </Autocomplete.Root>
</template>
