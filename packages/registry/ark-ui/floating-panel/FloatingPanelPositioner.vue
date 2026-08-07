<script setup lang="ts">
import { FloatingPanel } from "@ark-ui/vue/floating-panel";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <FloatingPanel.Positioner
    :class="cn('z-10', props.class)"
    data-slot="floating-panel-positioner"
  >
    <slot />
  </FloatingPanel.Positioner>
</template>
