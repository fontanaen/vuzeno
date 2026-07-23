<script setup lang="ts">
import { CheckIcon } from "@lucide/vue";
import { createListCollection, Listbox } from "@vuzeno/registry/ui/listbox";

const collection = createListCollection({
  items: [
    { label: "Monday", value: "mon" },
    { label: "Tuesday", value: "tue" },
    { label: "Wednesday", value: "wed" },
    { label: "Thursday", value: "thu" },
    { label: "Friday", value: "fri" },
    { label: "Saturday", value: "sat" },
    { label: "Sunday", value: "sun" },
  ],
});
</script>

<template>
  <Listbox.Root :collection="collection" selection-mode="multiple">
    <Listbox.Label>Select Days</Listbox.Label>
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
