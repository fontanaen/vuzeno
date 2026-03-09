<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import { type HTMLAttributes, onMounted, useTemplateRef } from "vue";
import { cn } from "@/lib/utils";
import Image from "../image/Image.vue";
import { injectImageViewerProviderContext } from "./ImageViewerProvider.vue";
import { useTouchZoom } from "./utils";

const props = withDefaults(
  defineProps<
    {
      class?: HTMLAttributes["class"];
    } & PrimitiveProps
  >(),
  {
    as: "div",
    asChild: false,
  },
);

const { scale, maxScale, zoomContainerRef, zoomTranslate, isTouching } = injectImageViewerProviderContext();

const imageRef = useTemplateRef<typeof Image>("zoomContainerRef");

const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchZoom({
  scale,
  maxScale,
  zoomContainerRef() {
    return imageRef.value?.$el;
  },
  zoomTranslate,
  isTouching,
  enabled: true,
});

onMounted(() => {
  zoomContainerRef.value = imageRef.value?.$el;
});
</script>

<template>
  <Image 
    ref="zoomContainerRef" 
    data-slot="image-zoom-container" 
    :class="cn('overflow-hidden relative w-fit', props.class)" 
    @wheel.stop.prevent 
    @touchmove="handleTouchMove"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <slot />
  </Image>
</template>