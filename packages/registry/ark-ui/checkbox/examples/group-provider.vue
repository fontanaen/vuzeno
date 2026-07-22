<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Checkbox, useCheckboxGroup } from "@vuzeno/registry/ui/checkbox";

const frameworks = [
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];

const group = useCheckboxGroup({ defaultValue: ["vue"] });
</script>

<template>
  <div class="flex flex-col gap-4">
    <Checkbox.GroupProvider :value="group">
      <Checkbox.Root v-for="framework in frameworks" :key="framework.value" :value="framework.value">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label>{{ framework.label }}</Checkbox.Label>
      </Checkbox.Root>
    </Checkbox.GroupProvider>

    <div class="flex items-center gap-2">
      <Button size="sm" variant="outline" @click="group.toggleValue('svelte')">
        Toggle Svelte
      </Button>
      <Button size="sm" variant="outline" @click="group.setValue(frameworks.map((framework) => framework.value))">
        Select all
      </Button>
      <Button size="sm" variant="outline" @click="group.setValue([])">
        Clear
      </Button>
    </div>

    <p class="text-sm text-muted-foreground">
      Selected: {{ group.value.length ? group.value.join(", ") : "none" }}
    </p>
  </div>
</template>
