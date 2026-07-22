<script setup lang="ts">
import type { AutocompleteInputValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-vue-next";

const initialItems = [
  { label: "Canada", value: "ca", continent: "North America" },
  { label: "United States", value: "us", continent: "North America" },
  { label: "Mexico", value: "mx", continent: "North America" },
  { label: "Germany", value: "de", continent: "Europe" },
  { label: "France", value: "fr", continent: "Europe" },
  { label: "United Kingdom", value: "uk", continent: "Europe" },
  { label: "Japan", value: "jp", continent: "Asia" },
  { label: "China", value: "cn", continent: "Asia" },
  { label: "India", value: "in", continent: "Asia" },
];

function containsFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().includes(filterText.toLowerCase());
}

const { collection, filter } = useListCollection({
  initialItems,
  groupBy: (item) => item.continent,
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
      <Autocomplete.ItemGroup
        v-for="[continent, group] in collection.group()"
        :key="continent"
      >
        <Autocomplete.ItemGroupLabel>{{ continent }}</Autocomplete.ItemGroupLabel>
        <Autocomplete.Item v-for="item in group" :key="item.value" :item="item">
          <Autocomplete.ItemText>{{ item.label }}</Autocomplete.ItemText>
          <Autocomplete.ItemIndicator>
            <CheckIcon />
          </Autocomplete.ItemIndicator>
        </Autocomplete.Item>
      </Autocomplete.ItemGroup>
    </Autocomplete.Content>
  </Autocomplete.Root>
</template>
