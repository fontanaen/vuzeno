<script setup lang="ts">
import { Carousel, type CarouselAutoplayTriggerProps } from "@ark-ui/vue/carousel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CarouselAutoplayTriggerProps & { class?: HTMLAttributes["class"] }>();

const autoplayTriggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Carousel.AutoplayTrigger
    v-bind="autoplayTriggerProps"
    :class="cn(
      'inline-flex size-9 select-none items-center justify-center rounded-md border border-border bg-transparent text-sm font-medium text-foreground transition-[background-color,border-color] duration-150',
      'hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:hover:bg-transparent',
      'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring',
      '[&_svg]:size-4',
      props.class,
    )"
    data-slot="carousel-autoplay-trigger"
  >
    <slot />
  </Carousel.AutoplayTrigger>
</template>
