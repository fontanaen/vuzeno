<script setup lang="ts">
import { ChevronsUpDownIcon } from "@lucide/vue";
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select, useSelect } from "@vuzeno/registry/ui/select";

const collection = createListCollection({
  items: ["React", "Solid", "Vue", "Svelte"],
});

const select = useSelect({
  collection,
  onHighlightChange({ highlightedValue }) {
    if (highlightedValue) {
      select.value.selectValue(highlightedValue);
    }
  },
});
</script>

<template>
  <Field.Root>
    <Select.RootProvider :value="select">
      <Field.Label>Framework</Field.Label>
      
      <Select.Trigger class="w-80">
        <Select.Value placeholder="Select a Framework" />
        <Select.Indicator>
          <ChevronsUpDownIcon />
        </Select.Indicator>
      </Select.Trigger>

      <Select.Content>
        <Select.Item v-for="item in collection.items" :key="item" :item="item">
          <Select.ItemText>{{ item }}</Select.ItemText>
          <Select.ItemIndicator />
        </Select.Item>
      </Select.Content>
    </Select.RootProvider>
  </Field.Root>
</template>
