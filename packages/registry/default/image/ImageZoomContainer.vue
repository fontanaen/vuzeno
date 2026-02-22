<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import { type HTMLAttributes, onMounted, useTemplateRef } from "vue";
import { cn } from "@/lib/utils";
import Image from "./Image.vue";
import { injectImageZoomProviderContext } from "./ImageZoomProvider.vue";
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

const { scale, maxScale, zoomContainerRef, zoomTranslate, isTouching } = injectImageZoomProviderContext();

const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchZoom({ scale, maxScale, zoomContainerRef, zoomTranslate, isTouching, enabled: true });

const imageRef = useTemplateRef<typeof Image>("zoomContainerRef");

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
    @touchmove.stop.prevent="handleTouchMove"
    @touchstart.stop.prevent="handleTouchStart"
    @touchend.stop.prevent="handleTouchEnd"
  >
    <slot />
  </Image>
</template>