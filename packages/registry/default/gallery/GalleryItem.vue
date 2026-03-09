<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ImageViewerProvider } from "../image-viewer";
import { injectCarouselViewerContext } from "./Gallery.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  itemIndex: number;
}>();

const { selectedIndex, zoomScale, zoomMaxScale, zoomStep, zoomFollowCursor, zoomOnClick, zoomResetOnClickOutside, zoomDisabled } = injectCarouselViewerContext();

const isActive = computed(() => selectedIndex.value === props.itemIndex);
const disabled = computed(() => !isActive.value || zoomDisabled.value);
</script>

<template>
  <ImageViewerProvider
    :scale="isActive ? zoomScale : 1"
    :max-scale="zoomMaxScale"
    :step="zoomStep"
    :follow-cursor="isActive ? zoomFollowCursor : false"
    :zoom-on-click="isActive ? zoomOnClick : false"
    :reset-on-click-outside="isActive ? zoomResetOnClickOutside : false"
    :disabled="disabled"
    @update:scale="zoomScale = $event"
  >
    <CarouselItem :class="cn(isActive && 'z-10', props.class)">
      <slot />
    </CarouselItem>
  </ImageViewerProvider>
</template>