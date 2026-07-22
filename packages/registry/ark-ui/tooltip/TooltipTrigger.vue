<script setup lang="ts">
import { Tooltip, type TooltipTriggerProps } from "@ark-ui/vue/tooltip";
import type { HTMLAttributes } from "vue";

const props = defineProps<TooltipTriggerProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tooltip.Trigger
    v-bind="props"
    data-slot="tooltip-trigger"
  >
    <slot />
  </Tooltip.Trigger>
</template>
