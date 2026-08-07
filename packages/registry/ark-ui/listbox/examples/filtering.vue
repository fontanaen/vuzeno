<script setup lang="ts">
import { CheckIcon } from "@lucide/vue";
import { Listbox, useListCollection } from "@vuzeno/registry/ui/listbox";

const { collection, filter } = useListCollection({
  initialItems: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
    { label: "Next.js", value: "nextjs" },
    { label: "Nuxt.js", value: "nuxtjs" },
    { label: "Remix", value: "remix" },
    { label: "Gatsby", value: "gatsby" },
    { label: "Preact", value: "preact" },
  ],
  filter: (itemText, filterText) => itemText.toLowerCase().includes(filterText.toLowerCase()),
});
</script>

<template>
  <Listbox.Root :collection="collection">
    <Listbox.Label>Select Framework</Listbox.Label>
    <Listbox.Input
      placeholder="Search frameworks..."
      @input="(event: Event) => filter((event.target as HTMLInputElement).value)"
    />
    <Listbox.Content>
      <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
        <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
        <Listbox.ItemIndicator>
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
      <Listbox.Empty>No frameworks found</Listbox.Empty>
    </Listbox.Content>
  </Listbox.Root>
</template>
