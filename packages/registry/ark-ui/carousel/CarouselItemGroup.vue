<script setup lang="ts">
import { Carousel, type CarouselItemGroupProps } from "@ark-ui/vue/carousel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CarouselItemGroupProps & { class?: HTMLAttributes["class"] }>();

const itemGroupProps = reactiveOmit(props, "class");
</script>

<template>
  <Carousel.ItemGroup
    v-bind="itemGroupProps"
    :class="cn(
      'flex min-w-0 flex-1 overflow-hidden rounded-lg scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
      props.class,
    )"
    data-slot="carousel-item-group"
  >
    <slot />
  </Carousel.ItemGroup>
</template>
