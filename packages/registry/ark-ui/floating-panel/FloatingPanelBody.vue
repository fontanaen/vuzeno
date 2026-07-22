<script setup lang="ts">
import { FloatingPanel } from "@ark-ui/vue/floating-panel";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <FloatingPanel.Body
    :class="cn(
      'flex flex-1 flex-col gap-4 overflow-auto p-4 text-sm text-foreground',
      props.class,
    )"
    data-slot="floating-panel-body"
  >
    <slot />
  </FloatingPanel.Body>
</template>
