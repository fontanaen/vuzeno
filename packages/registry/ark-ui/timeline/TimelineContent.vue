<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { injectTimelineItemContext } from "./TimelineItem.vue";

const props = withDefaults(
  defineProps<
    {
      class?: HTMLAttributes["class"];
    } & PolymorphicProps
  >(),
  {
    asChild: false,
  },
);

const { direction, side, align } = injectTimelineItemContext();
</script>

<template>
  <ark.div
    :as-child="asChild"
    data-slot="timeline-content"
    :data-direction="direction"
    :data-side="side"
    :class="
      cn(
        'flex flex-col gap-1 min-w-0',
        direction === 'vertical' && 'pb-6',
        direction === 'horizontal' && 'pr-6',
        side === 'left' && 'items-end text-right',
        side === 'top' && 'items-start',
        direction === 'vertical' && side === 'left' && 'col-start-1',
        direction === 'vertical' && side === 'right' && align === 'center' && 'col-start-3',
        direction === 'vertical' && side === 'right' && align === 'start' && 'col-start-2',
        direction === 'horizontal' && side === 'top' && 'row-start-1',
        direction === 'horizontal' && side === 'bottom' && align === 'center' && 'row-start-3',
        direction === 'horizontal' && side === 'bottom' && align === 'start' && 'row-start-2',
        props.class,
      )
    "
  >
    <slot />
  </ark.div>
</template>
