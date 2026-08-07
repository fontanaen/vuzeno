<script setup lang="ts">
import { Carousel, type CarouselNextTriggerProps } from "@ark-ui/vue/carousel";
import { ArrowRightIcon } from "@lucide/vue";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CarouselNextTriggerProps & { class?: HTMLAttributes["class"] }>();

const nextTriggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Carousel.NextTrigger
    v-bind="nextTriggerProps"
    :class="cn(
      'inline-flex size-9 select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-border bg-transparent text-sm font-medium text-foreground',
      'hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:hover:bg-transparent',
      'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring',
      '[&_svg]:size-4',
      props.class,
    )"
    data-slot="carousel-next-trigger"
  >
    <slot>
      <ArrowRightIcon />
    </slot>
  </Carousel.NextTrigger>
</template>
