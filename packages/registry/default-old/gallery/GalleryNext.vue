<script setup lang="ts">
import { CarouselNext } from "@vuzeno/ui/components/carousel";
import type { HTMLAttributes } from "vue";
import { injectGalleryContext } from "./Gallery.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { hideNavigation } = injectGalleryContext();
</script>

<template>
  <CarouselNext v-if="!hideNavigation" v-bind="props" class="right-0">
    <slot />
  </CarouselNext>
</template>