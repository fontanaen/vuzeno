<script setup lang="ts">
import { CheckIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { createListCollection, Listbox, useListbox } from "@vuzeno/registry/ui/listbox";

const collection = createListCollection({
  items: [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
    { label: "Critical", value: "critical" },
  ],
});

const listbox = useListbox({ collection });
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button variant="outline" @click="listbox.setValue(['high'])">
      Set to High
    </Button>

    <Listbox.RootProvider :value="listbox">
      <Listbox.Label>Select Priority</Listbox.Label>
      <Listbox.Content>
        <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
          <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
          <Listbox.ItemIndicator>
            <CheckIcon />
          </Listbox.ItemIndicator>
        </Listbox.Item>
      </Listbox.Content>
    </Listbox.RootProvider>
  </div>
</template>
