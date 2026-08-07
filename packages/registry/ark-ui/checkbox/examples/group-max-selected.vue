<script setup lang="ts">
import { Checkbox } from "@vuzeno/registry/ui/checkbox";

const frameworks = [
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Angular", value: "angular" },
];
</script>

<template>
  <div class="flex flex-col gap-3">
    <Checkbox.Group :max-selected-values="2">
      <Checkbox.Root v-for="framework in frameworks" :key="framework.value" :value="framework.value">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label>{{ framework.label }}</Checkbox.Label>
      </Checkbox.Root>
    </Checkbox.Group>

    <p class="text-sm text-muted-foreground">Select up to 2 frameworks.</p>
  </div>
</template>
