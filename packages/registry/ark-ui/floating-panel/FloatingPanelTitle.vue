<script setup lang="ts">
import { FloatingPanel } from "@ark-ui/vue/floating-panel";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <FloatingPanel.Title
    :class="cn(
      'flex items-center gap-2 text-sm font-medium text-foreground',
      '[&_svg]:size-4 [&_svg]:text-muted-foreground',
      props.class,
    )"
    data-slot="floating-panel-title"
  >
    <slot />
  </FloatingPanel.Title>
</template>
