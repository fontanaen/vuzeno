<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { type HTMLAttributes } from "vue";
import { injectTimelineItemContext } from "./TimelineItem.vue";

const props = withDefaults(
  defineProps<
    {
      variant?: "dot" | "icon";
      class?: HTMLAttributes["class"];
    } & PrimitiveProps
  >(),
  {
    variant: "dot",
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
    data-slot="timeline-media"
    :data-variant="variant"
    :class="
      cn(
        'relative flex items-center',
        direction === 'vertical' ? 'flex-col' : 'flex-row',
        direction === 'vertical' && (align === 'center' || side === 'left') && 'col-start-2',
        direction === 'vertical' && align === 'start' && side === 'right' && 'col-start-1',
        direction === 'horizontal' && (align === 'center' || side === 'top') && 'row-start-2',
        direction === 'horizontal' && align === 'start' && side === 'bottom' && 'row-start-1',
        props.class,
      )
    "
  >
    <div
      data-slot="timeline-marker"
      :class="
        cn(
          'shrink-0 flex items-center justify-center',
          variant === 'dot'
            ? 'size-3 rounded-full bg-border'
            : 'size-8 rounded-full border bg-background text-muted-foreground',
        )
      "
    >
      <slot />
    </div>

    <div
      data-slot="timeline-connector"
      aria-hidden="true"
      :class="
        cn(
          'bg-border',
          direction === 'vertical' ? 'w-px flex-1 mt-1' : 'h-px flex-1 ml-1',
        )
      "
    />
  </Primitive>
</template>
