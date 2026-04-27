<script lang="ts">
import type { ComputedRef, Ref } from "vue";

export type VideoPlayerTimelineContext = {
  hoverTime: Ref<number | null>;
  dragTime: Ref<number | null>;
  previewTime: ComputedRef<number | null>;
  pointerX: Ref<number>;
  isActive: ComputedRef<boolean>;
  trackRef: Ref<HTMLElement | null | undefined>;
  duration: Ref<number>;
};

export const [injectVideoPlayerTimelineContext, provideVideoPlayerTimelineContext] = createContext<VideoPlayerTimelineContext>("VideoPlayerTimelineContext");
</script>

<script setup lang="ts">
import { useElementBounding } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { createContext, SliderRange, SliderRoot, SliderThumb, SliderTrack } from "reka-ui";
import { computed, type HTMLAttributes, ref } from "vue";
import { injectVideoPlayerContext } from "./VideoPlayer.vue";
import { clamp } from "./utils";

const props = withDefaults(
  defineProps<{
    step?: number;
    class?: HTMLAttributes["class"];
  }>(),
  {
    step: 0.1,
  },
);

const ctx = injectVideoPlayerContext();

const trackRef = ref<HTMLElement | null | undefined>(null);
const trackBounds = useElementBounding(trackRef);

const isHovered = ref(false);
const isDragging = ref(false);
const isFocused = ref(false);

const hoverTime = ref<number | null>(null);
const dragTime = ref<number | null>(null);
const pointerX = ref(0);

const max = computed(() => (ctx.duration.value > 0 ? ctx.duration.value : 1));

const displayValue = computed(() => {
  if (dragTime.value !== null) {
    return [dragTime.value];
  }
  return [ctx.currentTime.value];
});

const previewTime = computed(() => {
  if (dragTime.value !== null) {
    return dragTime.value;
  }
  return hoverTime.value;
});

const isActive = computed(() => isHovered.value || isFocused.value || isDragging.value);

function timeFromPointer(event: PointerEvent): number {
  const rect = trackBounds;
  const width = rect.width.value;
  if (width <= 0) {
    return 0;
  }
  const ratio = clamp((event.clientX - rect.left.value) / width, 0, 1);
  return ratio * max.value;
}

function onTrackPointerEnter(event: PointerEvent) {
  isHovered.value = true;
  hoverTime.value = timeFromPointer(event);
  pointerX.value = event.clientX;
}

function onTrackPointerMove(event: PointerEvent) {
  hoverTime.value = timeFromPointer(event);
  pointerX.value = event.clientX;
}

function onTrackPointerLeave() {
  isHovered.value = false;
  hoverTime.value = null;
}

function onPointerDown(event: PointerEvent) {
  isDragging.value = true;
  dragTime.value = timeFromPointer(event);
  pointerX.value = event.clientX;
}

function onUpdate(next: number[]) {
  const [time] = next;
  if (typeof time !== "number") {
    return;
  }

  if (isDragging.value) {
    dragTime.value = time;
    return;
  }

  ctx.seek(time);
}

function onCommit(next: number[]) {
  const [time] = next;
  isDragging.value = false;

  if (typeof time === "number") {
    ctx.currentTime.value = time;
    ctx.seek(time);
  }

  dragTime.value = null;
}

function onFocusIn() {
  isFocused.value = true;
}

function onFocusOut() {
  isFocused.value = false;
}

provideVideoPlayerTimelineContext({
  hoverTime,
  dragTime,
  previewTime,
  pointerX,
  isActive,
  trackRef,
  duration: ctx.duration,
});
</script>

<template>
  <SliderRoot
    :model-value="displayValue"
    :min="0"
    :max="max"
    :step="props.step"
    aria-label="Seek"
    data-slot="video-player-timeline"
    :data-active="isActive"
    :class="
      cn(
        'group/video-player-timeline relative flex h-4 w-full touch-none select-none items-center cursor-pointer',
        props.class,
      )
    "
    @update:model-value="onUpdate($event as number[])"
    @value-commit="onCommit($event as number[])"
    @pointerdown="onPointerDown"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <SliderTrack
      ref="trackRef"
      class="relative h-[3px] w-full grow overflow-hidden rounded-full bg-white/30 transition-[height] duration-150 ease-out group-data-[active=true]/video-player-timeline:h-[6px]"
      @pointerenter="onTrackPointerEnter"
      @pointermove="onTrackPointerMove"
      @pointerleave="onTrackPointerLeave"
    >
      <SliderRange class="absolute h-full bg-white" />
    </SliderTrack>

    <SliderThumb class="pointer-events-none block h-3 w-3 transition-[width] duration-150 ease-out outline-none ring-offset-black/30 shadow-sm">
      <span
        class="block size-full scale-0 rounded-full bg-white opacity-0 shadow-sm transition-[opacity,scale] duration-150 ease-out group-data-[active=true]/video-player-timeline:scale-100 group-data-[active=true]/video-player-timeline:opacity-100"
      />
    </SliderThumb>

    <slot
      :preview-time="previewTime"
      :is-active="isActive"
      :is-dragging="isDragging"
    />
  </SliderRoot>
</template>
