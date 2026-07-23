<script setup lang="ts">
import { ChevronsUpDownIcon, XIcon } from "@lucide/vue";
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";

const frameworks = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte", disabled: true },
  ],
});
</script>

<template>
  <Field.Root>
    <Select.Root :collection="frameworks" multiple>
      <Field.Label>Framework</Field.Label>
      
      <Select.Trigger>
        <Select.Value placeholder="Select" />
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
          <Select.Item v-for="item in frameworks.items" :key="item.value" :item="item">
            <Select.ItemText>{{ item.label }}</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        </Select.ItemGroup>
      </Select.Content>
    </Select.Root>
  </Field.Root>
</template>
