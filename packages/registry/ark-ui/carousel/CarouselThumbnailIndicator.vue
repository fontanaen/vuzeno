<script setup lang="ts">
import { Carousel, type CarouselIndicatorProps } from "@ark-ui/vue/carousel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CarouselIndicatorProps & { class?: HTMLAttributes["class"] }>();

const indicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Carousel.Indicator
    v-bind="indicatorProps"
    :class="cn(
      'h-10 w-15 cursor-pointer overflow-hidden rounded border-2 border-transparent p-0 opacity-60 transition-[border-color,opacity] duration-200',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      'data-current:border-primary data-current:opacity-100',
      '[&_img]:size-full [&_img]:object-cover',
      props.class,
    )"
    data-slot="carousel-thumbnail-indicator"
  >
    <slot />
  </Carousel.Indicator>
</template>
