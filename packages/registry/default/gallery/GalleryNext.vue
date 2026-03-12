<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { CarouselNext } from "@/components/ui/carousel";
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