<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { ComboboxLabel } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ComboboxLabel :class="cn('px-2 py-1.5 text-xs font-medium text-muted-foreground', props.class)">
    <slot />
  </ComboboxLabel>
</template>