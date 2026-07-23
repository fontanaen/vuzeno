<script setup lang="ts">
import { Highlight } from "@ark-ui/vue";
import { ChevronsUpDownIcon, XIcon } from "@lucide/vue";
import type { AutocompleteInputValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";

function containsFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().includes(filterText.toLowerCase());
}

const { collection, filter } = useListCollection({
  initialItems: [
    { label: "John Smith", value: "john-smith" },
    { label: "Jane Doe", value: "jane-doe" },
    { label: "Bob Johnson", value: "bob-johnson" },
    { label: "Alice Williams", value: "alice-williams" },
    { label: "Charlie Brown", value: "charlie-brown" },
    { label: "Diana Ross", value: "diana-ross" },
  ],
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
    <Autocomplete.Label>Assignee</Autocomplete.Label>
    <Autocomplete.Control>
      <Autocomplete.Input placeholder="e.g. John Smith" />
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
        :key="item.value"
        :item="item"
      >
        <Autocomplete.ItemText>
          <Autocomplete.Context v-slot="context">
            <Highlight
              :text="item.label"
              :query="context.inputValue"
              ignore-case
            />
          </Autocomplete.Context>
        </Autocomplete.ItemText>
      </Autocomplete.Item>
    </Autocomplete.Content>
  </Autocomplete.Root>
</template>
