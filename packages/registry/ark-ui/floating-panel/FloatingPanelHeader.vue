<script setup lang="ts">
import { FloatingPanel } from "@ark-ui/vue/floating-panel";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <FloatingPanel.Header
    :class="cn(
      'flex cursor-grab items-center justify-between rounded-t-lg border-b border-border bg-muted px-4 py-2',
      'active:cursor-grabbing',
      props.class,
    )"
    data-slot="floating-panel-header"
  >
    <slot />
  </FloatingPanel.Header>
</template>
