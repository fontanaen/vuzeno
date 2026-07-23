<script setup lang="ts">
import { ChevronsUpDownIcon, XIcon } from "@lucide/vue";
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";
import { ref } from "vue";

type Item = {
  label: string;
  value: string;
  disabled?: boolean;
};

const collection = createListCollection<Item>({
  items: [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte", disabled: true },
  ],
});

const value = ref<string[]>(["vue"]);
</script>

<template>
  <Field.Root>
    <Select.Root v-model="value" :collection="collection">
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
        <Select.ItemGroup>
          <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
          <Select.Item v-for="item in collection.items" :key="item.value" :item="item">
            <Select.ItemText>{{ item.label }}</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        </Select.ItemGroup>
      </Select.Content>
    </Select.Root>
  </Field.Root>
</template>
