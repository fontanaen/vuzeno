<script setup lang="ts">
import { createListCollection, Listbox } from "@vuzeno/registry/ui/listbox";
import { CheckIcon } from "lucide-vue-next";

const collection = createListCollection({
  items: [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
    { label: "Purple", value: "purple" },
  ],
});
</script>

<template>
  <Listbox.Root :collection="collection" selection-mode="multiple" :default-value="['red', 'blue']">
    <Listbox.Label>
      Colors:
      <Listbox.ValueText />
    </Listbox.Label>
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
