<script setup lang="ts">
import { createListCollection, Listbox } from "@vuzeno/registry/ui/listbox";
import { CheckIcon } from "lucide-vue-next";

const collection = createListCollection({
  items: [
    { label: "New York", value: "nyc", region: "North America" },
    { label: "Los Angeles", value: "lax", region: "North America" },
    { label: "Toronto", value: "yyz", region: "North America" },
    { label: "London", value: "lhr", region: "Europe" },
    { label: "Paris", value: "cdg", region: "Europe" },
    { label: "Berlin", value: "ber", region: "Europe" },
    { label: "Tokyo", value: "nrt", region: "Asia Pacific" },
    { label: "Singapore", value: "sin", region: "Asia Pacific" },
    { label: "Sydney", value: "syd", region: "Asia Pacific" },
  ],
  groupBy: (item) => item.region,
});
</script>

<template>
  <Listbox.Root :collection="collection">
    <Listbox.Label>Select Region</Listbox.Label>
    <Listbox.Content>
      <Listbox.ItemGroup v-for="[region, items] in collection.group()" :key="region">
        <Listbox.ItemGroupLabel>{{ region }}</Listbox.ItemGroupLabel>
        <Listbox.Item v-for="item in items" :key="item.value" :item="item">
          <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
          <Listbox.ItemIndicator>
            <CheckIcon />
          </Listbox.ItemIndicator>
        </Listbox.Item>
      </Listbox.ItemGroup>
    </Listbox.Content>
  </Listbox.Root>
</template>
