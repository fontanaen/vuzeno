<script setup lang="ts">
import { useMouseInElement, watchThrottled, whenever } from "@vueuse/core";
import { computed, ref } from "vue";
import ImageSource from "./ImageSource.vue";
import { injectImageZoomProviderContext } from "./ImageZoomProvider.vue";
import { calculateCursorTranslate } from "./utils";

defineProps<{
  src: string;
  alt?: string;
}>();

const { scale, onZoomIn, onZoomOut, zoomOnClick, zoomDirection, zoomContainerRef, followCursor, zoomTranslate: translate, isTouching, resetOnClickOutside, useZoomImageSourceRef } = injectImageZoomProviderContext();

useZoomImageSourceRef("imageSourceRef");

const { elementX: x, elementY: y, elementWidth: width, elementHeight: height, isOutside } = useMouseInElement(zoomContainerRef, { handleOutside: false });

const isZooming = ref(false);

const cursor = computed(() => {
  if (zoomOnClick.value) {
    return zoomDirection.value === "in" ? "cursor-zoom-in" : "cursor-zoom-out";
  }

  return "cursor-default";
});

function handleClick() {
  if (!zoomOnClick.value) {
    return;
  }

  if (zoomDirection.value === "in") {
    onZoomIn();
  } else {
    onZoomOut();
  }
}

whenever(
  () => isOutside.value && resetOnClickOutside.value,
  () => {
    scale.value = 1;
  },
);

watchThrottled(
  scale,
  () => {
    isZooming.value = true;
    setTimeout(() => {
      isZooming.value = false;
    }, 100);
  },
  { throttle: 100 },
);

watchThrottled(
  [x, y, scale],
  () => {
    if (isTouching.value) return;
    if (followCursor.value === false) {
      translate.value = {
        x: (width.value * (1 - scale.value)) / 2,
        y: (height.value * (1 - scale.value)) / 2,
        z: 0,
      };
      return;
    }

    translate.value = calculateCursorTranslate({ x: x.value, y: y.value }, { width: width.value, height: height.value }, scale.value);
  },
  { throttle: () => (followCursor.value ? 16 : 0) },
);
</script>

<template>
    <ImageSource
      ref="imageSourceRef"
      :data-zooming="isZooming" 
      :class="cursor" 
      :src="src" 
      :alt="alt"
      :style="{
        transformOrigin: '0 0', 
        willChange: 'transform',
        transform: `translate3d(${translate.x}px, ${translate.y}px, ${translate.z}px) scale(${scale})` 
      }"
      class="md:data-[zooming=true]:transition-transform md:data-[zooming=true]:duration-100 md:data-[zooming=true]:ease-in-out" 
      @click="handleClick" 
    />
</template>