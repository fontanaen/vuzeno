<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select, useSelect } from "@vuzeno/registry/ui/select";
import { ChevronsUpDownIcon, XIcon } from "lucide-vue-next";

const frameworks = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
  ],
});

const select = useSelect({ collection: frameworks });
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="mb-4 block text-sm text-muted-foreground">
      selected: {{ JSON.stringify(select.value) }}
    </output>

    <Field.Root>
      <Select.RootProvider :value="select">
        <Field.Label>Framework</Field.Label>
        <Select.Trigger class="w-80">
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
            <Select.Item v-for="item in frameworks.items" :key="item.value" :item="item">
              <Select.ItemText>{{ item.label }}</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          </Select.ItemGroup>
        </Select.Content>
      </Select.RootProvider>
    </Field.Root>
  </div>
</template>
