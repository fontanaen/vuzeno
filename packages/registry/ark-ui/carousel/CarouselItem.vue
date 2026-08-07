<script setup lang="ts">
import { Carousel, type CarouselItemProps } from "@ark-ui/vue/carousel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CarouselItemProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <Carousel.Item
    v-bind="itemProps"
    :class="cn(
      'min-w-0 shrink-0 grow-0 basis-full',
      '[&_img]:size-full [&_img]:rounded-lg [&_img]:bg-muted [&_img]:object-cover',
      props.class,
    )"
    data-slot="carousel-item"
  >
    <slot />
  </Carousel.Item>
</template>
