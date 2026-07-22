<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.ArrowTip
    :class="cn('border-t border-l border-border', props.class)"
    data-slot="tour-arrow-tip"
  >
    <slot />
  </Tour.ArrowTip>
</template>
