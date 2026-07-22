<script setup lang="ts">
import type { AutocompleteInputValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-vue-next";

const cities = [
  { label: "New York", value: "new-york" },
  { label: "Los Angeles", value: "los-angeles" },
  { label: "Chicago", value: "chicago" },
  { label: "Houston", value: "houston" },
  { label: "Phoenix", value: "phoenix" },
  { label: "Philadelphia", value: "philadelphia" },
  { label: "San Antonio", value: "san-antonio" },
  { label: "San Diego", value: "san-diego" },
  { label: "Dallas", value: "dallas" },
  { label: "San Jose", value: "san-jose" },
  { label: "Austin", value: "austin" },
  { label: "Jacksonville", value: "jacksonville" },
  { label: "Fort Worth", value: "fort-worth" },
  { label: "Columbus", value: "columbus" },
  { label: "Charlotte", value: "charlotte" },
  { label: "San Francisco", value: "san-francisco" },
  { label: "Indianapolis", value: "indianapolis" },
  { label: "Seattle", value: "seattle" },
  { label: "Denver", value: "denver" },
  { label: "Boston", value: "boston" },
];

function containsFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().includes(filterText.toLowerCase());
}

const { collection, filter } = useListCollection({
  initialItems: cities,
  limit: 5,
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
    <Autocomplete.Label>City</Autocomplete.Label>
    <Autocomplete.Control>
      <Autocomplete.Input placeholder="e.g. New York" />
      <Autocomplete.Indicators>
        <Autocomplete.Trigger>
          <ChevronsUpDownIcon />
        </Autocomplete.Trigger>
      </Autocomplete.Indicators>
    </Autocomplete.Control>
    <Autocomplete.Content>
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
