<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { ComboboxGroup } from "@/components/ui/combobox";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ComboboxGroup :class="props.class">
    <slot />
  </ComboboxGroup>
</template>