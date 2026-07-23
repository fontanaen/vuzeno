<script setup lang="ts">
import { CheckIcon } from "@lucide/vue";
import { createListCollection, Listbox } from "@vuzeno/registry/ui/listbox";

const collection = createListCollection({
  items: [
    { label: "Free", value: "free" },
    { label: "Pro", value: "pro" },
    { label: "Enterprise", value: "enterprise", disabled: true },
    { label: "Custom", value: "custom" },
  ],
});
</script>

<template>
  <Listbox.Root :collection="collection">
    <Listbox.Label>Select Plan</Listbox.Label>
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
