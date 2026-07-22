<script setup lang="ts">
import { Checkbox } from "@vuzeno/registry/ui/checkbox";

const frameworks = [
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];
</script>

<template>
  <Checkbox.Group :default-value="['vue']" name="framework">
    <Checkbox.Root v-for="framework in frameworks" :key="framework.value" :value="framework.value">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>{{ framework.label }}</Checkbox.Label>
    </Checkbox.Root>
  </Checkbox.Group>
</template>
