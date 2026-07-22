<script setup lang="ts">
import { Carousel } from "@ark-ui/vue/carousel";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Carousel.IndicatorGroup
    :class="cn(
      'flex justify-center gap-2',
      'data-[orientation=vertical]:flex-col',
      props.class,
    )"
    data-slot="carousel-indicator-group"
  >
    <slot />
  </Carousel.IndicatorGroup>
</template>
