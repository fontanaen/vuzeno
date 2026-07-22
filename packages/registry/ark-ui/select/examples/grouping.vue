<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";
import { ChevronsUpDownIcon, XIcon } from "lucide-vue-next";

const collection = createListCollection({
  items: [
    { label: "React", value: "react", type: "JS" },
    { label: "Solid", value: "solid", type: "JS" },
    { label: "Vue", value: "vue", type: "JS" },
    { label: "Panda", value: "panda", type: "CSS" },
    { label: "Tailwind", value: "tailwind", type: "CSS" },
  ],
  groupBy: (item) => item.type,
});
</script>

<template>
  <Field.Root>
    <Select.Root :collection="collection">
      <Field.Label>Framework</Field.Label>
      
      <Select.Trigger>
        <Select.Value placeholder="Select a Framework" />
      </Select.Trigger>

      <Select.Indicators>
        <Select.ClearTrigger>
          <XIcon />
        </Select.ClearTrigger>
        <Select.Indicator>
          <ChevronsUpDownIcon />
        </Select.Indicator>
      </Select.Indicators>

      <Select.Content>
        <Select.ItemGroup v-for="[type, group] in collection.group()" :key="type">
          <Select.ItemGroupLabel>{{ type }}</Select.ItemGroupLabel>
          <Select.Item v-for="item in group" :key="item.value" :item="item">
            <Select.ItemText>{{ item.label }}</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        </Select.ItemGroup>
        </Select.Content>
      </Select.Root>
  </Field.Root>
</template>
