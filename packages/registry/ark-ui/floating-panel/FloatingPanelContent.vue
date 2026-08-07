<script setup lang="ts">
import { FloatingPanel } from "@ark-ui/vue/floating-panel";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <FloatingPanel.Content
    :class="cn(
      'flex w-full flex-col rounded-lg border border-border bg-popover shadow-lg outline-none',
      'data-topmost:z-999999 data-behind:opacity-40',
      props.class,
    )"
    data-slot="floating-panel-content"
  >
    <slot />
  </FloatingPanel.Content>
</template>
