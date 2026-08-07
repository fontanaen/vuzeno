<script setup lang="ts">
import { FloatingPanel } from "@ark-ui/vue/floating-panel";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <FloatingPanel.Context
    
    :class="cn(props.class)"
    data-slot="floating-panel-context"
  >
    <slot />
  </FloatingPanel.Context>
</template>
