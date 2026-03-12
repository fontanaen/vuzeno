<script setup lang="ts">
import { useElementBounding, usePointerSwipe, useThrottleFn, watchThrottled } from "@vueuse/core";
import { computed, type HTMLAttributes, ref, useTemplateRef } from "vue";
import { cn } from "@/lib/utils";
import { injectImageViewerProviderContext } from "./ImageViewerProvider.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { scale, zoomContainerRef, zoomTranslate, zoomImageSourceRef } = injectImageViewerProviderContext();

const mapThumbPositionOffset = ref({ x: 0, y: 0, z: 0 });

const mapContainerRef = useTemplateRef<HTMLDivElement>("mapContainerRef");
const mapThumbRef = useTemplateRef<HTMLDivElement>("mapThumbRef");

const { width: zoomContainerWidth, height: zoomContainerHeight } = useElementBounding(zoomContainerRef);
const { width: mapContainerWidth, height: mapContainerHeight, x: mapContainerX, y: mapContainerY } = useElementBounding(mapContainerRef);

const mapContainerRectRatio = computed(() => (1 / (zoomContainerWidth.value / mapContainerWidth.value)) * (1 / scale.value));
const mapContainerAspectRatio = computed(() => `${zoomContainerWidth.value}/${zoomContainerHeight.value}`);

const mapThumbSize = computed(() => {
  const padding = 1;
  return {
    width: (mapContainerWidth.value - padding * 8) * (1 / scale.value),
    height: (mapContainerHeight.value - padding * 8) * (1 / scale.value),
  };
});

function getMapThumbPositionOffset() {
  const minX = mapContainerWidth.value - mapThumbSize.value.width - 8;
  const minY = mapContainerHeight.value - mapThumbSize.value.height - 8;

  return {
    x: Math.max(0, Math.min(minX, -zoomTranslate.value.x * mapContainerRectRatio.value)),
    y: Math.max(0, Math.min(minY, -zoomTranslate.value.y * mapContainerRectRatio.value)),
    z: zoomTranslate.value.z,
  };
}

function convertMapPositionToZoomTranslate(x: number, y: number) {
  const minX = mapContainerWidth.value - mapThumbSize.value.width - 8;
  const minY = mapContainerHeight.value - mapThumbSize.value.height - 8;
  const ratio = 1 / mapContainerRectRatio.value;

  return {
    x: Math.max(-minX * ratio, Math.min(0, -x * ratio)),
    y: Math.max(-minY * ratio, Math.min(0, -y * ratio)),
    z: zoomTranslate.value.z,
  };
}

function handleClick(e: MouseEvent) {
  zoomTranslate.value = convertMapPositionToZoomTranslate(e.clientX - mapContainerX.value - mapThumbSize.value.width / 2, e.clientY - mapContainerY.value - mapThumbSize.value.height / 2);
}

const onMoveThrottled = useThrottleFn((e: PointerEvent) => {
  zoomTranslate.value = convertMapPositionToZoomTranslate(e.clientX - mapContainerX.value - mapThumbSize.value.width / 2, e.clientY - mapContainerY.value - mapThumbSize.value.height / 2);
}, 10);

const { isSwiping } = usePointerSwipe(mapThumbRef, {
  onSwipe: onMoveThrottled,
  threshold: 10,
});

watchThrottled(
  [zoomTranslate],
  () => {
    mapThumbPositionOffset.value = getMapThumbPositionOffset();
  },
  { throttle: 10 },
);
</script>

<template>
    <div 
        ref="mapContainerRef" 
        :class="cn('relative w-32 bg-muted rounded-md bg-contain', props.class)" 
        :style="{'aspect-ratio': mapContainerAspectRatio, backgroundImage: `url(${zoomImageSourceRef?.$el.src})` }" 
        @click="handleClick"
    > 
        <div
            v-if="scale > 1"
            ref="mapThumbRef"
            class="absolute inset-1 bg-primary/25 border border-primary rounded-sm shadow-sm" 
            :class="{'cursor-grabbing': isSwiping, 'cursor-grab': !isSwiping }"
            :style="{ width:`${mapThumbSize.width}px`, height:`${mapThumbSize.height}px`, transformOrigin: '0 0', transform: `translate3D(${mapThumbPositionOffset.x}px, ${mapThumbPositionOffset.y}px, ${mapThumbPositionOffset.z}px)` }"
        />
    </div>
</template>