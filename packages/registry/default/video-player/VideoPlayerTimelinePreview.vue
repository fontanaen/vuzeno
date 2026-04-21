<script setup lang="ts">
import { useElementBounding, useEventListener } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { computed, type HTMLAttributes, ref, useTemplateRef, watch } from "vue";
import { clamp, formatTime, useVideoPreviewSeek } from "./utils";
import { injectVideoPlayerContext } from "./VideoPlayer.vue";
import { injectVideoPlayerTimelineContext } from "./VideoPlayerTimeline.vue";

const props = withDefaults(
  defineProps<{
    width?: number;
    showTimecode?: boolean;
    class?: HTMLAttributes["class"];
  }>(),
  {
    width: 144,
    showTimecode: true,
  },
);

const ctx = injectVideoPlayerContext();
const timelineCtx = injectVideoPlayerTimelineContext();

const previewVideoEl = useTemplateRef<HTMLVideoElement>("previewVideoEl");

const trackBounds = useElementBounding(timelineCtx.trackRef);

const isVisible = computed(() => timelineCtx.isActive.value && timelineCtx.previewTime.value !== null);

const lastPreviewTime = ref(0);

const positionStyle = computed(() => {
  const half = props.width / 2;
  const trackWidth = trackBounds.width.value;
  const duration = timelineCtx.duration.value || 1;
  const time = timelineCtx.previewTime.value ?? lastPreviewTime.value;

  let center = half;
  if (trackWidth > 0) {
    const ratio = clamp(time / duration, 0, 1);
    const offset = ratio * trackWidth;
    center = clamp(offset, half, Math.max(half, trackWidth - half));
  }

  return {
    left: `${center}px`,
    width: `${props.width}px`,
  };
});

const captionTime = computed(() => formatTime(timelineCtx.previewTime.value ?? lastPreviewTime.value));

function syncSource() {
  const previewEl = previewVideoEl.value;
  const mainEl = ctx.videoRef.value;
  if (!previewEl || !mainEl) {
    return;
  }

  const src = mainEl.currentSrc || mainEl.src;
  if (src && previewEl.src !== src) {
    previewEl.src = src;
  }
}

watch(() => ctx.videoRef.value?.currentSrc, syncSource, { immediate: true });

useEventListener(() => ctx.videoRef.value, "loadedmetadata", syncSource);

useVideoPreviewSeek(previewVideoEl, () => timelineCtx.previewTime.value);

watch(
  () => timelineCtx.previewTime.value,
  (time) => {
    if (time !== null) {
      lastPreviewTime.value = time;
    }
  },
  { immediate: true },
);
</script>

<template>
  <div
    data-slot="video-player-timeline-preview"
    :data-visible="isVisible"
    aria-hidden="true"
    :style="positionStyle"
    :class="
      cn(
        'pointer-events-none absolute bottom-full mb-3 -translate-x-1/2 opacity-0 transition-opacity duration-150 ease-out data-[visible=true]:opacity-100',
        props.class,
      )
    "
  >
    <div class="overflow-hidden rounded-md border border-white/50 shadow-xl">
      <div class="relative aspect-video w-full">
        <video
          ref="previewVideoEl"
          class="absolute inset-0 size-full object-cover"
          muted
          playsinline
          preload="metadata"
          tabindex="-1"
        />
      </div>
    </div>

    <div
      v-if="props.showTimecode"
      class="mt-1 text-center font-mono text-xs tabular-nums text-white drop-shadow"
    >
      {{ captionTime }}
    </div>
  </div>
</template>
