<script setup lang="ts">
import { CheckIcon, ChevronsUpDownIcon } from "@lucide/vue";
import type { AutocompleteInputValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";

const initialItems = [
  { label: "GitHub", href: "https://github.com", value: "github" },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com",
    value: "stackoverflow",
  },
  {
    label: "MDN Web Docs",
    href: "https://developer.mozilla.org",
    value: "mdn",
  },
  { label: "Dev.to", href: "https://dev.to", value: "devto" },
  {
    label: "Hacker News",
    href: "https://news.ycombinator.com",
    value: "hackernews",
  },
  {
    label: "Reddit Programming",
    href: "https://reddit.com/r/programming",
    value: "reddit",
  },
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
  <Autocomplete.Root
    :collection="collection"
    selection-behavior="preserve"
    @input-value-change="handleInputChange"
  >
    <Autocomplete.Label>Developer Resources</Autocomplete.Label>
    <Autocomplete.Control>
      <Autocomplete.Input placeholder="e.g. GitHub" />
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
        as-child
      >
        <a :href="item.href">
          <Autocomplete.ItemText>{{ item.label }}</Autocomplete.ItemText>
          <Autocomplete.ItemIndicator>
            <CheckIcon />
          </Autocomplete.ItemIndicator>
        </a>
      </Autocomplete.Item>
    </Autocomplete.Content>
  </Autocomplete.Root>
</template>
