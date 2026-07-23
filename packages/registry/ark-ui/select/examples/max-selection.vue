<script setup lang="ts">
import type { SelectValueChangeDetails } from "@ark-ui/vue/select";
import { ChevronsUpDownIcon, XIcon } from "@lucide/vue";
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";
import { computed, ref } from "vue";

const items = ["React", "Solid", "Vue", "Svelte"];
const MAX_SELECTION = 2;

const value = ref<string[]>([]);

function hasReachedMax(selected: string[]) {
  return selected.length >= MAX_SELECTION;
}

const collection = computed(() =>
  createListCollection({
    items: items.map((item) => ({
      label: item,
      value: item,
      disabled: hasReachedMax(value.value) && !value.value.includes(item),
    })),
  }),
);

function handleValueChange(details: SelectValueChangeDetails) {
  if (hasReachedMax(value.value) && details.value.length > value.value.length) {
    return;
  }
  value.value = details.value;
}
</script>

<template>
  <Field.Root>
    <Select.Root
      :collection="collection"
      multiple
      :value="value"
      @value-change="handleValueChange"
    >
      <Field.Label>Framework</Field.Label>
      
      <Select.Trigger>
        <Select.Value placeholder="Select" />
        <Select.Indicator>
          <ChevronsUpDownIcon />
        </Select.Indicator>
      </Select.Trigger>
      
      <Select.ClearTrigger>
        <XIcon />
      </Select.ClearTrigger>

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
