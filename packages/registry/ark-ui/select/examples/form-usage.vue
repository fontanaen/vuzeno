<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Field } from "@vuzeno/registry/ui/field";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";
import { ref } from "vue";

const frameworks = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
  ],
});

const framework = ref("vue");

function onSubmit(event: Event) {
  event.preventDefault();
  window.alert(JSON.stringify({ framework: framework.value }));
}
</script>

<template>
  <div>
    <p class="mb-4 text-sm text-muted-foreground">Value is {{ framework }}</p>
    <form class="flex flex-col gap-4" @submit="onSubmit">
      <Field.Root>
        <Select.Root
          :collection="frameworks"
          :model-value="framework ? [framework] : []"
          @value-change="(details) => { framework = details.value[0] ?? '' }"
        >
          <Field.Label>Framework</Field.Label>
          <Select.Trigger class="w-80">
            <Select.Value placeholder="Select a Framework" />
          </Select.Trigger>
          <Select.Indicators>
            <Select.ClearTrigger />
            <Select.Indicator />
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
      <Button type="submit">Submit</Button>
    </form>
  </div>
</template>
