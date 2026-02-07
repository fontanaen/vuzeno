<script setup lang="ts">
import { ComboboxGroup } from "@vuetella/ui/components/combobox";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ComboboxGroup :class="props.class">
    <slot />
  </ComboboxGroup>
</template>