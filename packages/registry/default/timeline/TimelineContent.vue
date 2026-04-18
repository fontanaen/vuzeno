<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { type HTMLAttributes } from "vue";
import { injectTimelineItemContext } from "./TimelineItem.vue";

const props = withDefaults(
  defineProps<
    {
      class?: HTMLAttributes["class"];
    } & PrimitiveProps
  >(),
  {
    as: "div",
    asChild: false,
  },
);

const { direction, side, align } = injectTimelineItemContext();
</script>

<template>
  <Primitive
    :as="as"
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
  </Primitive>
</template>
