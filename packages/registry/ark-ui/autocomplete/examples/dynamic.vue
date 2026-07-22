<script setup lang="ts">
import type { AutocompleteInputValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-vue-next";

const suggestList = ["gmail.com", "yahoo.com", "ark-ui.com"];

const { collection, set } = useListCollection<string>({
  initialItems: [],
});

function handleInputChange(details: AutocompleteInputValueChangeDetails) {
  if (details.reason === "input-change") {
    const items = suggestList.map((domain) => `${details.inputValue}@${domain}`);
    set(items);
  }
}
</script>

<template>
  <Autocomplete.Root
    :collection="collection"
    @input-value-change="handleInputChange"
  >
    <Autocomplete.Label>Email</Autocomplete.Label>
    <Autocomplete.Control>
      <Autocomplete.Input placeholder="e.g. john" />
      <Autocomplete.Indicators>
        <Autocomplete.Trigger>
          <ChevronsUpDownIcon />
        </Autocomplete.Trigger>
      </Autocomplete.Indicators>
    </Autocomplete.Control>
    <Autocomplete.Content>
      <Autocomplete.Item v-for="item in collection.items" :key="item" :item="item">
        <Autocomplete.ItemText>{{ item }}</Autocomplete.ItemText>
        <Autocomplete.ItemIndicator>
          <CheckIcon />
        </Autocomplete.ItemIndicator>
      </Autocomplete.Item>
    </Autocomplete.Content>
  </Autocomplete.Root>
</template>
