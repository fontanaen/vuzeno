<script setup lang="ts">
import { CarouselPrevious } from "@vuzeno/ui/components/carousel";
import type { HTMLAttributes } from "vue";
import { injectGalleryContext } from "./Gallery.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { hideNavigation } = injectGalleryContext();
</script>

<template>
  <CarouselPrevious v-if="!hideNavigation" v-bind="props" class="left-0">
    <slot />
  </CarouselPrevious>
</template>