<script setup lang="ts">
import { Carousel, type CarouselAutoplayIndicatorProps } from "@ark-ui/vue/carousel";
import { PauseIcon, PlayIcon } from "@lucide/vue";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CarouselAutoplayIndicatorProps & { class?: HTMLAttributes["class"] }>();

const autoplayIndicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Carousel.AutoplayIndicator
    v-bind="autoplayIndicatorProps"
    :class="cn('text-sm text-foreground', props.class)"
    data-slot="carousel-autoplay-indicator"
  >
    <template #fallback><PlayIcon /></template>
    <PauseIcon />
  </Carousel.AutoplayIndicator>
</template>
