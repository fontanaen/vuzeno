<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";

const collection = createListCollection({
  items: ["Option 1", "Option 2", "Option 3"],
});
</script>

<template>
  <Field.Root>
    <Field.Label>Label</Field.Label>

    <Select.Root :collection="collection">
      <Select.Trigger>
        <Select.Value placeholder="Select an option" />
        <Select.Indicator />
      </Select.Trigger>

      <Select.Content>
        <Select.Item v-for="item in collection.items" :key="item" :item="item">
          <Select.ItemText>{{ item }}</Select.ItemText>
        </Select.Item>
      </Select.Content>
    </Select.Root>
    <Field.HelperText>Some additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
</template>
