<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.Backdrop
    :class="cn(
      '[--z-index:2] z-(--z-index) bg-black/50',
      props.class,
    )"
    data-slot="tour-backdrop"
  >
    <slot />
  </Tour.Backdrop>
</template>
