<script setup lang="ts">
import { Carousel, type CarouselControlProps } from "@ark-ui/vue/carousel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CarouselControlProps & { class?: HTMLAttributes["class"] }>();

const controlProps = reactiveOmit(props, "class");
</script>

<template>
  <Carousel.Control
    v-bind="controlProps"
    :class="cn(
      'flex items-center justify-between gap-2',
      'data-[orientation=vertical]:flex-col',
      'data-[justify=center]:justify-center',
      props.class,
    )"
    data-slot="carousel-control"
  >
    <slot />
  </Carousel.Control>
</template>
