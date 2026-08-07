<script setup lang="ts">
import { FloatingPanel } from "@ark-ui/vue/floating-panel";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <FloatingPanel.Control
    :class="cn('flex items-center gap-1', props.class)"
    data-slot="floating-panel-control"
  >
    <slot />
  </FloatingPanel.Control>
</template>
