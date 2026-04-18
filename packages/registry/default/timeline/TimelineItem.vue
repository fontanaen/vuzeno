<script lang="ts">
export type TimelineItemContext = {
  direction: Ref<TimelineDirection>;
  side: Ref<TimelineSide>;
  align: Ref<TimelineAlign>;
};

export const [injectTimelineItemContext, provideTimelineItemContext] = createContext<TimelineItemContext>("TimelineItemContext");
</script>

<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { createContext, Primitive, type PrimitiveProps } from "reka-ui";
import { computed, type HTMLAttributes, type Ref } from "vue";
import { injectTimelineContext, type TimelineAlign, type TimelineDirection, type TimelineSide } from "./Timeline.vue";

const props = withDefaults(
  defineProps<
    {
      side?: TimelineSide;
      class?: HTMLAttributes["class"];
    } & PrimitiveProps
  >(),
  {
    as: "li",
    asChild: false,
  },
);

const timeline = injectTimelineContext();

const direction = computed(() => timeline.direction.value);
const align = computed(() => timeline.align.value);
const side = computed<TimelineSide>(() => props.side ?? timeline.side.value);

provideTimelineItemContext({ direction, side, align });
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    data-slot="timeline-item"
    :data-direction="direction"
    :data-side="side"
    :data-align="align"
    :class="
      cn(
        'group/timeline-item relative grid grid-flow-dense',
        direction === 'vertical' && 'gap-x-4',
        direction === 'horizontal' && 'gap-y-2',
        direction === 'vertical' && align === 'center' && 'grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]',
        direction === 'vertical' && align === 'start' && side === 'left' && 'grid-cols-[minmax(0,1fr)_auto]',
        direction === 'vertical' && align === 'start' && side === 'right' && 'grid-cols-[auto_minmax(0,1fr)]',
        direction === 'horizontal' && align === 'center' && 'grid-rows-[minmax(0,1fr)_auto_minmax(0,1fr)]',
        direction === 'horizontal' && align === 'start' && side === 'top' && 'grid-rows-[minmax(0,1fr)_auto]',
        direction === 'horizontal' && align === 'start' && side === 'bottom' && 'grid-rows-[auto_minmax(0,1fr)]',
        'last:**:data-[slot=timeline-connector]:hidden',
        direction === 'vertical' && 'last:**:data-[slot=timeline-content]:pb-0',
        direction === 'horizontal' && 'last:**:data-[slot=timeline-content]:pr-0',
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
