<script setup lang="ts">
import { ChevronsUpDownIcon, XIcon } from "@lucide/vue";
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";

const collection = createListCollection({
  items: ["React", "Solid", "Vue", "Svelte", "Angular", "Alpine"],
});
</script>

<template>
  <Field.Root>
    <Select.Root :collection="collection" lazy-mount unmount-on-exit>
      <Field.Label>Framework</Field.Label>
      <Select.Trigger>
        <Select.Value placeholder="Select a Framework" />
        <Select.Indicator class="flex items-center gap-2">
          <Select.ClearTrigger @click.stop>
            <XIcon />
          </Select.ClearTrigger>
          <ChevronsUpDownIcon />
        </Select.Indicator>
      </Select.Trigger>
      <Select.Content>
        <Select.ItemGroup>
          <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
          <Select.Item v-for="item in collection.items" :key="item" :item="item">
            <Select.ItemText>{{ item }}</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        </Select.ItemGroup>
      </Select.Content>
    </Select.Root>
  </Field.Root>
</template>
