<script setup lang="ts">
import { CheckIcon } from "@lucide/vue";
import { createListCollection, Listbox } from "@vuzeno/registry/ui/listbox";

const collection = createListCollection({
  items: [
    { label: "United States", value: "us" },
    { label: "United Kingdom", value: "uk" },
    { label: "Canada", value: "ca" },
    { label: "Australia", value: "au" },
    { label: "Germany", value: "de" },
    { label: "France", value: "fr" },
    { label: "Japan", value: "jp" },
  ],
});
</script>

<template>
  <Listbox.Root :collection="collection">
    <Listbox.Label>Select Country</Listbox.Label>
    <Listbox.Content>
      <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
        <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
        <Listbox.ItemIndicator>
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
