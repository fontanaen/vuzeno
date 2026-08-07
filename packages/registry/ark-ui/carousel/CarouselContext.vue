<script setup lang="ts">
import { Carousel } from "@ark-ui/vue/carousel";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Carousel.Context
    :class="cn(props.class)"
    data-slot="carousel-context"
  >
    <slot />
  </Carousel.Context>
</template>
