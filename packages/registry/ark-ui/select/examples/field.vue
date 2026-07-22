<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";
import { ChevronsUpDownIcon } from "lucide-vue-next";

const collection = createListCollection({
  items: ["React", "Solid", "Vue", "Svelte"],
});
</script>

<template>
  <Field.Root>
    <Select.Root :collection="collection">
      <Field.Label>Label</Field.Label>
      <Select.Trigger>
        <Select.Value placeholder="Select a Framework" />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Content>
        <Select.Item v-for="item in collection.items" :key="item" :item="item">
          <Select.ItemText>{{ item }}</Select.ItemText>
          <Select.ItemIndicator />
        </Select.Item>
      </Select.Content>
    </Select.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
</template>
