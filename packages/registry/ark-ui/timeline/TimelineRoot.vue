<script lang="ts">
import { createContext } from "@ark-ui/vue";
import type { Ref } from "vue";

export type TimelineDirection = "vertical" | "horizontal";
export type TimelineSide = "left" | "right" | "top" | "bottom";
export type TimelineAlign = "start" | "center";

export type TimelineContext = {
  direction: Ref<TimelineDirection>;
  side: Ref<TimelineSide>;
  align: Ref<TimelineAlign>;
};

export const [provideTimelineContext, injectTimelineContext] = createContext<TimelineContext>("TimelineContext");
</script>

<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<
    {
      direction?: TimelineDirection;
      side?: TimelineSide;
      align?: TimelineAlign;
      class?: HTMLAttributes["class"];
    } & PolymorphicProps
  >(),
  {
    direction: "vertical",
    align: "start",
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
  <ark.ol
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
  </ark.ol>
</template>
