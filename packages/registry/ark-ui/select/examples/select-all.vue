<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";
import { ChevronsUpDownIcon } from "lucide-vue-next";

const collection = createListCollection({
  items: ["React", "Solid", "Vue", "Svelte"],
});
</script>

<template>
  <Field.Root>
    <Select.Root :collection="collection" multiple>
      <Field.Label>Framework</Field.Label>
      
      <Select.Trigger>
        <Select.Value placeholder="Select a Framework" />
        <Select.Indicator>
          <ChevronsUpDownIcon />
        </Select.Indicator>
      </Select.Trigger>

      <Select.Content>
        <Select.Context v-slot="api">
          <Button
            type="button"
            variant="outline"
            size="sm"
            class="mb-2 w-full"
            @click="() => { api.selectAll(); api.setOpen(false) }"
          >
            Select All
          </Button>
        </Select.Context>
        <Select.Item v-for="item in collection.items" :key="item" :item="item">
          <Select.ItemText>{{ item }}</Select.ItemText>
          <Select.ItemIndicator />
        </Select.Item>
      </Select.Content>
    </Select.Root>
  </Field.Root>
</template>
