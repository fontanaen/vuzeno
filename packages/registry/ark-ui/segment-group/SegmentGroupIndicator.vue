<script setup lang="ts">
import { SegmentGroup, type SegmentGroupIndicatorProps } from "@ark-ui/vue/segment-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SegmentGroupIndicatorProps & { class?: HTMLAttributes["class"] }>();

const indicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <SegmentGroup.Indicator
    v-bind="indicatorProps"
    :class="cn(
      'absolute z-0 rounded-md bg-background dark:bg-primary shadow-sm',
      'top-(--top) left-(--left) h-(--height) w-(--width)',
      'transition-[width,height,left,top] duration-150 ease-out',
      props.class,
    )"
    data-slot="segment-group-indicator"
  >
    <slot />
  </SegmentGroup.Indicator>
</template>
