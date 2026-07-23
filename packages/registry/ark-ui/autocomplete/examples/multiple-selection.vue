<script setup lang="ts">
import { CheckIcon, ChevronsUpDownIcon } from "@lucide/vue";
import type { AutocompleteInputValueChangeDetails, AutocompleteValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { ref } from "vue";

function containsFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().includes(filterText.toLowerCase());
}

const selectedItems = ref<{ label: string; value: string }[]>([]);

const { collection, filter, remove } = useListCollection({
  initialItems: [
    { label: "JavaScript", value: "js" },
    { label: "TypeScript", value: "ts" },
    { label: "Python", value: "python" },
    { label: "Go", value: "go" },
    { label: "Rust", value: "rust" },
    { label: "Java", value: "java" },
  ],
  filter: containsFilter,
});

function handleInputChange(details: AutocompleteInputValueChangeDetails) {
  filter(details.inputValue);
}

function handleValueChange(details: AutocompleteValueChangeDetails) {
  selectedItems.value = details.items;
  remove(...details.value);
}
</script>

<template>
  <Autocomplete.Root
    :collection="collection"
    multiple
    @input-value-change="handleInputChange"
    @value-change="handleValueChange"
  >
    <Autocomplete.Label>Skills</Autocomplete.Label>
    <Autocomplete.Tags>
      <Autocomplete.TagPlaceholder v-if="selectedItems.length === 0">
        None selected
      </Autocomplete.TagPlaceholder>
      <Autocomplete.Tag v-for="item in selectedItems" :key="item.value">
        {{ item.label }}
      </Autocomplete.Tag>
    </Autocomplete.Tags>
    <Autocomplete.Control>
      <Autocomplete.Input placeholder="e.g. JavaScript" />
      <Autocomplete.Indicators>
        <Autocomplete.Trigger>
          <ChevronsUpDownIcon />
        </Autocomplete.Trigger>
      </Autocomplete.Indicators>
    </Autocomplete.Control>
    <Autocomplete.Content>
      <Autocomplete.Empty>No skills found</Autocomplete.Empty>
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
