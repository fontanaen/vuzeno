<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { CarouselPrevious } from "@/components/ui/carousel";
import { injectCarouselViewerContext } from "./Gallery.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { hideNavigation } = injectCarouselViewerContext();
</script>

<template>
  <CarouselPrevious v-if="!hideNavigation" v-bind="props" class="left-0">
    <slot />
  </CarouselPrevious>
</template>