<script setup lang="ts">
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "@lucide/vue";
import { Autocomplete, useAutocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { Button } from "@vuzeno/registry/ui/button";

const initialItems = [
  { label: "Designer", value: "designer" },
  { label: "Developer", value: "developer" },
  { label: "Product Manager", value: "pm" },
  { label: "Data Scientist", value: "data-scientist" },
  { label: "DevOps Engineer", value: "devops" },
  { label: "Marketing Lead", value: "marketing" },
];

function containsFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().includes(filterText.toLowerCase());
}

const { collection, filter } = useListCollection({
  initialItems,
  filter: containsFilter,
});

const autocomplete = useAutocomplete({
  get collection() {
    return collection.value;
  },
  onInputValueChange(details) {
    filter(details.inputValue);
  },
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button variant="outline" size="sm" @click="autocomplete.focus()">
      Focus
    </Button>

    <Autocomplete.RootProvider :value="autocomplete">
      <Autocomplete.Label>Job Title</Autocomplete.Label>
      <Autocomplete.Control>
        <Autocomplete.Input placeholder="e.g. Designer" />
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
          <Autocomplete.ItemText>{{ item.label }}</Autocomplete.ItemText>
          <Autocomplete.ItemIndicator>
            <CheckIcon />
          </Autocomplete.ItemIndicator>
        </Autocomplete.Item>
      </Autocomplete.Content>
    </Autocomplete.RootProvider>
  </div>
</template>
