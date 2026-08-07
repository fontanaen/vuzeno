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
      'size-2.5 cursor-pointer rounded-full border-0 bg-muted-foreground/40 p-0',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      'data-current:bg-primary',
      props.class,
    )"
    data-slot="carousel-indicator"
  >
    <slot />
  </Carousel.Indicator>
</template>
