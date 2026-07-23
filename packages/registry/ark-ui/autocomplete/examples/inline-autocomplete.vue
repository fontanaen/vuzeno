<script setup lang="ts">
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "@lucide/vue";
import type { AutocompleteInputValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";

function startsWithFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().startsWith(filterText.toLowerCase());
}

const { collection, filter } = useListCollection({
  initialItems: [
    { label: "Whale", value: "whale" },
    { label: "Dolphin", value: "dolphin" },
    { label: "Shark", value: "shark" },
    { label: "Octopus", value: "octopus" },
    { label: "Jellyfish", value: "jellyfish" },
    { label: "Seahorse", value: "seahorse" },
  ],
  filter: startsWithFilter,
});

function handleInputChange(details: AutocompleteInputValueChangeDetails) {
  filter(details.inputValue);
}
</script>

<template>
  <Autocomplete.Root
    :collection="collection"
    input-behavior="autocomplete"
    @input-value-change="handleInputChange"
  >
    <Autocomplete.Label>Sea Creature</Autocomplete.Label>
    <Autocomplete.Control>
      <Autocomplete.Input placeholder="e.g. Dolphin" />
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
