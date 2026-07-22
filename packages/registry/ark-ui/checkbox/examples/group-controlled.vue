<script setup lang="ts">
import { Checkbox } from "@vuzeno/registry/ui/checkbox";
import { ref } from "vue";

const frameworks = [
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];

const value = ref<string[]>(["vue"]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <Checkbox.Group v-model="value">
      <Checkbox.Root v-for="framework in frameworks" :key="framework.value" :value="framework.value">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label>{{ framework.label }}</Checkbox.Label>
      </Checkbox.Root>
    </Checkbox.Group>

    <p class="text-sm text-muted-foreground">
      Selected: {{ value.length ? value.join(", ") : "none" }}
    </p>
  </div>
</template>
