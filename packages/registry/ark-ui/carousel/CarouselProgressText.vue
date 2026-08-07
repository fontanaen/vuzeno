<script setup lang="ts">
import { Carousel } from "@ark-ui/vue/carousel";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Carousel.ProgressText
    :class="cn('text-sm font-medium tabular-nums text-foreground', props.class)"
    data-slot="carousel-progress-text"
  >
    <slot />
  </Carousel.ProgressText>
</template>
