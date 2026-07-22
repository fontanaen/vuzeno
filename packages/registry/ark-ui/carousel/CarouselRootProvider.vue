<script setup lang="ts">
import { Carousel, type CarouselRootProviderProps } from "@ark-ui/vue/carousel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CarouselRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Carousel.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'relative flex w-full max-w-lg flex-col gap-4 text-foreground',
      'data-[orientation=vertical]:h-80 data-[orientation=vertical]:max-w-max data-[orientation=vertical]:flex-row',
      props.class,
    )"
    data-slot="carousel-root-provider"
  >
    <slot />
  </Carousel.RootProvider>
</template>
