<script setup lang="ts">
import { useMediaQuery, useMouseInElement, watchThrottled, whenever } from "@vueuse/core";
import { computed, nextTick, ref, watch } from "vue";
import ImageSource from "../image/ImageSource.vue";
import { injectImageViewerProviderContext } from "./ImageViewerProvider.vue";
import { calculateCursorTranslate } from "./utils";

defineProps<{
  src: string;
  alt?: string;
}>();

const { scale, onZoomIn, onZoomOut, zoomOnClick, zoomDirection, zoomContainerRef, followCursor, zoomTranslate: translate, isTouching, resetOnClickOutside, useZoomImageSourceRef } = injectImageViewerProviderContext();

useZoomImageSourceRef("imageSourceRef");

const { elementX: x, elementY: y, elementWidth: width, elementHeight: height, isOutside } = useMouseInElement(zoomContainerRef, { handleOutside: false });

const isMobile = useMediaQuery("(max-width: 768px)"); // Prevent ios pointer event pointerType treated as "mouse" instead of "touch"

const currentScale = ref(scale.value);
const isTransitioning = ref(false);

const cursor = computed(() => {
  if (zoomOnClick.value) {
    return zoomDirection.value === "in" ? "cursor-zoom-in" : "cursor-zoom-out";
  }

  return "cursor-default";
});

function handleClick() {
  if (!zoomOnClick.value || isMobile.value) {
    return;
  }

  if (zoomDirection.value === "in") {
    onZoomIn();
  } else {
    onZoomOut();
  }
}

watch(scale, async (value) => {
  isTransitioning.value = true;

  await nextTick();
  currentScale.value = value;

  setTimeout(() => {
    isTransitioning.value = false;
  }, 200);
});

whenever(
  () => isOutside.value && resetOnClickOutside.value,
  () => {
    scale.value = 1;
  },
);

watchThrottled(
  [x, y, scale],
  () => {
    if (isTouching.value) return;
    if (followCursor.value === false || scale.value === 1) {
      translate.value = {
        x: (width.value * (1 - scale.value)) / 2,
        y: (height.value * (1 - scale.value)) / 2,
        z: 0,
      };
      return;
    }

    translate.value = calculateCursorTranslate({ x: x.value, y: y.value }, { width: width.value, height: height.value }, scale.value);
  },
  { throttle: () => (followCursor.value ? 8 : 0) },
);
</script>

<template>
  <ImageSource
    ref="imageSourceRef"
    :data-transition="isTouching === false && isTransitioning"
    :class="cursor"
    :src="src"
    :alt="alt"
    :style="{
      transformOrigin: '0 0',
      willChange: 'transform',
      transform: `translate3d(${translate.x}px, ${translate.y}px, ${translate.z}px) scale(${scale})`
    }"
    class="touch-pinch-zoom data-[transition=true]:transition-[transform] data-[transition=true]:duration-200 md:data-[transition=true]:duration-100 data-[transition=true]:ease-in-out" 
    @click="handleClick"
    @dragstart.stop.prevent
  />
</template>