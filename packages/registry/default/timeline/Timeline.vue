<script lang="ts">
export type TimelineDirection = "vertical" | "horizontal";
export type TimelineSide = "left" | "right" | "top" | "bottom";
export type TimelineAlign = "start" | "center";

export type TimelineContext = {
  direction: Ref<TimelineDirection>;
  side: Ref<TimelineSide>;
  align: Ref<TimelineAlign>;
};

export const [injectTimelineContext, provideTimelineContext] = createContext<TimelineContext>("TimelineContext");
</script>

<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { createContext, Primitive, type PrimitiveProps } from "reka-ui";
import { computed, type HTMLAttributes, type Ref } from "vue";

const props = withDefaults(
  defineProps<
    {
      direction?: TimelineDirection;
      side?: TimelineSide;
      align?: TimelineAlign;
      class?: HTMLAttributes["class"];
    } & PrimitiveProps
  >(),
  {
    direction: "vertical",
    align: "start",
    as: "ol",
    asChild: false,
  },
);

const align = computed(() => props.align);
const direction = computed(() => props.direction);
const side = computed(() => {
  if (props.side) {
    return props.side;
  }

  return props.direction === "vertical" ? "right" : "bottom";
});

provideTimelineContext({ direction, side, align });
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    data-slot="timeline"
    :data-direction="direction"
    :data-side="side"
    :data-align="align"
    :class="
      cn(
        'flex',
        direction === 'vertical' ? 'flex-col' : 'flex-row',
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
