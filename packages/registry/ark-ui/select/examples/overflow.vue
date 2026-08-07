<script setup lang="ts">
import { ChevronsUpDownIcon } from "@lucide/vue";
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";

const collection = createListCollection({
  items: ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5", "Name 6", "Name 7", "Name 8", "Name 9", "Name 10", "Name 11", "Name 12", "Name 13", "Name 14"],
});
</script>

<template>
  <Field.Root>
    <Select.Root
      :collection="collection"
      :positioning="{
        fitViewport: true,
        placement: 'bottom-start',
        sameWidth: true,
      }"
    >
      <Field.Label>Framework</Field.Label>
      <Select.Trigger>
        <Select.Value placeholder="Select a Framework" />
        <Select.Indicator>
          <ChevronsUpDownIcon />
        </Select.Indicator>
      </Select.Trigger>
      <Select.ClearTrigger>Clear</Select.ClearTrigger>
      <Select.Content :style="{ maxHeight: '200px' }">
        <Select.ItemGroup>
          <Select.ItemGroupLabel>Names</Select.ItemGroupLabel>
          <Select.Item v-for="item in collection.items" :key="item" :item="item">
            <Select.ItemText>{{ item }}</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        </Select.ItemGroup>
      </Select.Content>
    </Select.Root>
  </Field.Root>
</template>
