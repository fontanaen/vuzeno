<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.Arrow
    :class="cn(
      '[--arrow-background:var(--popover)] [--arrow-shadow-color:var(--border)]',
      props.class,
    )"
    data-slot="tour-arrow"
  >
    <slot />
  </Tour.Arrow>
</template>
