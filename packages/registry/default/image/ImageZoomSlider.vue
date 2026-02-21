<script setup lang="ts">
import { useElementBounding, usePointerSwipe, useThrottleFn, watchThrottled } from "@vueuse/core";
import { type HTMLAttributes, onMounted, ref, useTemplateRef } from "vue";
import { cn } from "@/lib/utils";
import { injectImageZoomProviderContext } from "./ImageZoomProvider.vue";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    orientation?: "horizontal" | "vertical";
  }>(),
  {
    orientation: "horizontal",
  },
);

const { scale, maxScale, onUpdateScale, followCursor } = injectImageZoomProviderContext();

const sliderRef = useTemplateRef<HTMLElement>("sliderRef");
const thumbRef = useTemplateRef<HTMLElement>("thumbRef");

const sliderBounding = useElementBounding(sliderRef);
const thumbBounding = useElementBounding(thumbRef);

const thumbPosition = ref(0);

const onSwipeThrottled = useThrottleFn((e: PointerEvent) => {
  calculateScale(
    { x: e.clientX, y: e.clientY },
    {
      height: sliderBounding.height.value,
      x: sliderBounding.x.value,
      y: sliderBounding.y.value,
      width: sliderBounding.width.value,
    },
  );
}, 10);

function getPadding(element: HTMLElement | null | undefined) {
  if (!element) return { left: 0, right: 0, top: 0, bottom: 0 };

  const styles = window.getComputedStyle(element);
  return {
    top: Number.parseFloat(styles.paddingTop) || 0,
    bottom: Number.parseFloat(styles.paddingBottom) || 0,
    left: Number.parseFloat(styles.paddingLeft) || 0,
    right: Number.parseFloat(styles.paddingRight) || 0,
  };
}

function handleThumbMove(event: MouseEvent) {
  const target = event.target as HTMLElement;

  const { width, x, height, y } = target.getBoundingClientRect();
  calculateScale({ x: event.clientX, y: event.clientY }, { width, x, height, y });
}

function calculateScale(mouse: { x: number; y: number }, container: { width: number; x: number; height: number; y: number }) {
  if (props.orientation === "horizontal") {
    const ratio = Math.round(((mouse.x - container.x) / container.width) * 100);
    const newScale = ((maxScale.value - 1) * ratio) / 100 + 1;

    onUpdateScale(Number.parseFloat(newScale.toFixed(2)));
  }

  if (props.orientation === "vertical") {
    const ratio = Math.round(((container.y + container.height - mouse.y) / container.height) * 100);
    const newScale = ((maxScale.value - 1) * ratio) / 100 + 1;

    onUpdateScale(Number.parseFloat(newScale.toFixed(2)));
  }
}

function getThumbPosition() {
  if (!sliderRef.value || !thumbRef.value) {
    return 0;
  }

  const ratio = Math.max(0, Math.min(100, ((scale.value - 1) / (maxScale.value - 1)) * 100));

  if (props.orientation === "horizontal") {
    const containerWidth = sliderBounding.width.value;
    const padding = getPadding(sliderRef.value);
    const thumbWidth = thumbBounding.width.value;

    const availableWidth = containerWidth - padding.left - padding.right - thumbWidth;

    const position = padding.left + (ratio / 100) * availableWidth;

    return position;
  }

  if (props.orientation === "vertical") {
    const containerHeight = sliderBounding.height.value;
    const padding = getPadding(sliderRef.value);
    const thumbHeight = thumbBounding.height.value;

    const availableHeight = containerHeight - padding.top - padding.bottom - thumbHeight;

    const position = padding.top + thumbHeight / 2 + (availableHeight - (ratio / 100) * availableHeight);

    return position;
  }

  return 0;
}

usePointerSwipe(thumbRef, {
  onSwipeStart() {
    followCursor.value = false;
  },
  onSwipe: onSwipeThrottled,
  onSwipeEnd() {
    followCursor.value = true;
  },
  threshold: 10,
});

watchThrottled(
  [scale, maxScale, sliderBounding.height, sliderBounding.width],
  () => {
    thumbPosition.value = getThumbPosition();
  },
  { throttle: 10 },
);

onMounted(() => {
  thumbPosition.value = getThumbPosition();
});
</script>

<template>
    <div 
        ref="sliderRef" 
        :data-orientation="props.orientation" 
        :class="cn('data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-8 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-8 bg-muted rounded-md relative p-1 overflow-hidden', props.class)" 
        @mousedown.self="handleThumbMove"
    >
        <div 
            ref="thumbRef" 
            :data-orientation="props.orientation" 
            :data-grabbing="!followCursor" 
            class="cursor-grab data-[grabbing=true]:cursor-grabbing data-[orientation=horizontal]:h-6 data-[orientation=horizontal]:w-4 data-[orientation=vertical]:w-6 data-[orientation=vertical]:h-4 bg-white rounded-sm absolute top-1/2 -translate-y-1/2 z-10 shadow-sm" 
            :style="{ left: props.orientation === 'horizontal' ? `${thumbPosition}px` : undefined, top: props.orientation === 'vertical' ? `${thumbPosition}px` : undefined }" 
        />
    </div>
</template>