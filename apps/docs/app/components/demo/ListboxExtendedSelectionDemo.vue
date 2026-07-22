<script setup lang="ts">
import { createListCollection, Listbox } from "@vuzeno/registry/ui/listbox";
import { CheckIcon } from "lucide-vue-next";

const collection = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
    { label: "Preact", value: "preact" },
  ],
});
</script>

<template>
  <Listbox.Root :collection="collection" selection-mode="extended">
    <Listbox.Label>
      Hold
      <kbd class="rounded border border-border bg-muted px-1 py-0.5 font-mono text-xs">⌘</kbd>
      or
      <kbd class="rounded border border-border bg-muted px-1 py-0.5 font-mono text-xs">Ctrl</kbd>
      to select multiple
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
