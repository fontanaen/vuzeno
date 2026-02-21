<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import { type HTMLAttributes, onMounted, useTemplateRef } from "vue";
import { cn } from "@/lib/utils";
import Image from "./Image.vue";
import { injectImageZoomProviderContext } from "./ImageZoomProvider.vue";
import { usePinchZoom } from "./utils";

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

const { scale, maxScale, zoomContainerRef, zoomTranslate } = injectImageZoomProviderContext();

const { handlePinchStart, handlePinchZoom, handlePinchEnd } = usePinchZoom({ scale, maxScale, zoomContainerRef, zoomTranslate, enabled: true });

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
    @touchmove.stop.prevent="handlePinchZoom"
    @touchstart.stop.prevent="handlePinchStart"
    @touchend.stop.prevent="handlePinchEnd"
  >
    <slot />
  </Image>
</template>