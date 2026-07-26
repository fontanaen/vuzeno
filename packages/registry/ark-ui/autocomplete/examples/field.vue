<script setup lang="ts">
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "@lucide/vue";
import type { AutocompleteInputValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { Field } from "@vuzeno/registry/ui/field";

const initialItems = [
  { label: "Engineering", value: "engineering" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" },
  { label: "Sales", value: "sales" },
  { label: "Human Resources", value: "hr" },
  { label: "Finance", value: "finance" },
];

function containsFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().includes(filterText.toLowerCase());
}

const { collection, filter } = useListCollection({
  initialItems,
  filter: containsFilter,
});

function handleInputChange(details: AutocompleteInputValueChangeDetails) {
  filter(details.inputValue);
}
</script>

<template>
  <Field.Root>
    <Autocomplete.Root
      :collection="collection"
      @input-value-change="handleInputChange"
    >
      <Autocomplete.Label>Department</Autocomplete.Label>

      <Autocomplete.Control>
        <Autocomplete.Input placeholder="e.g. Engineering" />
        <Autocomplete.Indicators align="inline-end">
          <Autocomplete.ClearTrigger>
            <XIcon class="size-4 text-muted-foreground" />
          </Autocomplete.ClearTrigger>
          <Autocomplete.Trigger>
            <ChevronsUpDownIcon class="size-4 text-muted-foreground" />
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
    <Field.HelperText>Select your primary department</Field.HelperText>
    <Field.ErrorText>Department is required</Field.ErrorText>
  </Field.Root>
</template>
