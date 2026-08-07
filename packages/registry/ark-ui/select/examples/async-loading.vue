<script setup lang="ts">
import type { SelectOpenChangeDetails } from "@ark-ui/vue/select";
import { ChevronsUpDownIcon } from "@lucide/vue";
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";
import { computed, ref } from "vue";

function loadData() {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => resolve(["React", "Solid", "Vue", "Svelte", "Angular", "Ember"]), 500);
  });
}

const data = ref<string[] | null>(null);
const loading = ref(false);
const error = ref<Error | null>(null);

const collection = computed(() =>
  createListCollection({
    items: data.value ?? [],
  }),
);

async function handleOpenChange(details: SelectOpenChangeDetails) {
  if (details.open && data.value === null) {
    loading.value = true;
    error.value = null;
    try {
      data.value = await loadData();
    } catch (err) {
      error.value = err as Error;
    } finally {
      loading.value = false;
    }
  }
}
</script>

<template>
  <Field.Root>
    <Select.Root :collection="collection" @open-change="handleOpenChange">
      <Field.Label>Framework</Field.Label>
      <Select.Trigger>
        <Select.Value placeholder="Select" />
        <Select.Indicator>
          <ChevronsUpDownIcon />
        </Select.Indicator>
      </Select.Trigger>
      <Select.Content>
        <div v-if="loading" class="p-2 text-sm">Loading...</div>
        <div v-else-if="error" class="p-2 text-sm">Error: {{ error.message }}</div>
        <template v-else>
          <Select.Item v-for="item in collection.items" :key="item" :item="item">
            <Select.ItemText>{{ item }}</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        </template>
      </Select.Content>
    </Select.Root>
  </Field.Root>
</template>
