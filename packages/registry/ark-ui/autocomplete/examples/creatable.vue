<script setup lang="ts">
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "@lucide/vue";
import type { AutocompleteInputValueChangeDetails, AutocompleteOpenChangeDetails, AutocompleteValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { nextTick, ref } from "vue";

type Item = {
  label: string;
  value: string;
  __new__?: boolean;
};

const NEW_OPTION_VALUE = "[[new]]";

function createNewOption(value: string): Item {
  return { label: value, value: NEW_OPTION_VALUE };
}

function isNewOptionValue(value: string) {
  return value === NEW_OPTION_VALUE;
}

function replaceNewOptionValue(values: string[], value: string) {
  return values.map((entry) => (entry === NEW_OPTION_VALUE ? value : entry));
}

function getNewOptionData(value: string): Item {
  return { label: value, value, __new__: true };
}

function containsFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().includes(filterText.toLowerCase());
}

const { collection, filter, upsert, update, remove } = useListCollection<Item>({
  initialItems: [
    { label: "Bug", value: "bug" },
    { label: "Feature", value: "feature" },
    { label: "Enhancement", value: "enhancement" },
    { label: "Documentation", value: "docs" },
  ],
  filter: containsFilter,
});

function isValidNewOption(value: string) {
  const exactOptionMatch = collection.value.items.filter((item) => item.label.toLowerCase() === value.toLowerCase()).length > 0;
  return !exactOptionMatch && value.trim().length > 0;
}

const selectedValue = ref<string[]>([]);
const inputValue = ref("");

function handleInputChange({ inputValue: newInputValue, reason }: AutocompleteInputValueChangeDetails) {
  if (reason === "input-change" || reason === "item-select") {
    if (isValidNewOption(newInputValue)) {
      upsert(NEW_OPTION_VALUE, createNewOption(newInputValue));
    } else if (newInputValue.trim().length === 0) {
      remove(NEW_OPTION_VALUE);
    }
    filter(newInputValue);
  }
  inputValue.value = newInputValue;
}

function handleOpenChange({ reason }: AutocompleteOpenChangeDetails) {
  if (reason === "trigger-click") {
    filter("");
  }
}

async function handleValueChange({ value }: AutocompleteValueChangeDetails) {
  await nextTick();
  selectedValue.value = replaceNewOptionValue(value, inputValue.value);
  if (value.includes(NEW_OPTION_VALUE)) {
    update(NEW_OPTION_VALUE, getNewOptionData(inputValue.value));
  }
}
</script>

<template>
  <Autocomplete.Root
    v-model="selectedValue"
    :collection="collection"
    allow-custom-value
    @input-value-change="handleInputChange"
    @open-change="handleOpenChange"
    @value-change="handleValueChange"
  >
    <Autocomplete.Label>Label</Autocomplete.Label>
    <Autocomplete.Control>
      <Autocomplete.Input placeholder="e.g. Bug" />
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
        <Autocomplete.ItemText v-if="isNewOptionValue(item.value)">
          + Create "{{ item.label }}"
        </Autocomplete.ItemText>
        <Autocomplete.ItemText v-else>
          {{ item.label }} {{ item.__new__ ? "(new)" : "" }}
        </Autocomplete.ItemText>
        <Autocomplete.ItemIndicator>
          <CheckIcon />
        </Autocomplete.ItemIndicator>
      </Autocomplete.Item>
    </Autocomplete.Content>
  </Autocomplete.Root>
</template>
