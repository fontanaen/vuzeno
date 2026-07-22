<script setup lang="ts">
import { createListCollection, Listbox } from "@vuzeno/registry/ui/listbox";
import { CheckIcon } from "lucide-vue-next";
import { ref } from "vue";

const collection = createListCollection({
  items: [
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" },
    { label: "Extra Large", value: "xl" },
  ],
});

const value = ref(["md"]);
</script>

<template>
  <Listbox.Root v-model="value" :collection="collection">
    <Listbox.Label>Select Size</Listbox.Label>
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
