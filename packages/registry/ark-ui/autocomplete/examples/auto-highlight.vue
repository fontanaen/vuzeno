<script setup lang="ts">
import type { AutocompleteInputValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-vue-next";

function containsFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().includes(filterText.toLowerCase());
}

const { collection, filter } = useListCollection({
  initialItems: [
    { label: "Engineering", value: "engineering" },
    { label: "Marketing", value: "marketing" },
    { label: "Sales", value: "sales" },
    { label: "Finance", value: "finance" },
    { label: "Human Resources", value: "hr" },
    { label: "Operations", value: "operations" },
    { label: "Product", value: "product" },
    { label: "Customer Success", value: "customer-success" },
    { label: "Legal", value: "legal" },
    { label: "Information Technology", value: "information-technology" },
    { label: "Design", value: "design" },
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
    input-behavior="autohighlight"
    @input-value-change="handleInputChange"
  >
    <Autocomplete.Label>Department</Autocomplete.Label>
    <Autocomplete.Control>
      <Autocomplete.Input placeholder="e.g. Engineering" />
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
