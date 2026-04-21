<script setup lang="ts">
import { useEventListener } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { type HTMLAttributes, onMounted, useTemplateRef } from "vue";
import { injectVideoPlayerContext } from "./VideoPlayer.vue";

const props = defineProps<{
  src?: string;
  poster?: string;
  loop?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  playsinline?: boolean;
  preload?: "none" | "metadata" | "auto";
  crossorigin?: "anonymous" | "use-credentials";
  class?: HTMLAttributes["class"];
}>();

const ctx = injectVideoPlayerContext();

const videoEl = useTemplateRef<HTMLVideoElement>("videoEl");

function syncFromElement() {
  const el = videoEl.value;
  if (!el) {
    return;
  }

  ctx.isPlaying.value = !el.paused;
  ctx.currentTime.value = el.currentTime;
  ctx.duration.value = Number.isFinite(el.duration) ? el.duration : 0;
  ctx.volume.value = el.volume;
  ctx.muted.value = el.muted;
  ctx.playbackRate.value = el.playbackRate;
}

function updateBuffered() {
  const el = videoEl.value;
  if (!el || el.buffered.length === 0) {
    return;
  }

  ctx.buffered.value = el.buffered.end(el.buffered.length - 1);
}

useEventListener(videoEl, "loadedmetadata", () => {
  syncFromElement();
});

useEventListener(videoEl, "durationchange", () => {
  const el = videoEl.value;
  if (!el) return;
  ctx.duration.value = Number.isFinite(el.duration) ? el.duration : 0;
});

useEventListener(videoEl, "timeupdate", () => {
  const el = videoEl.value;
  if (!el) return;
  ctx.currentTime.value = el.currentTime;
});

useEventListener(videoEl, "progress", updateBuffered);

useEventListener(videoEl, "play", () => {
  ctx.isPlaying.value = true;
});

useEventListener(videoEl, "pause", () => {
  ctx.isPlaying.value = false;
});

useEventListener(videoEl, "ended", () => {
  ctx.isPlaying.value = false;
});

useEventListener(videoEl, "volumechange", () => {
  const el = videoEl.value;
  if (!el) return;
  ctx.volume.value = el.volume;
  ctx.muted.value = el.muted;
});

useEventListener(videoEl, "ratechange", () => {
  const el = videoEl.value;
  if (!el) return;
  ctx.playbackRate.value = el.playbackRate;
});

useEventListener(videoEl, "enterpictureinpicture", () => {
  ctx.isPictureInPicture.value = true;
});

useEventListener(videoEl, "leavepictureinpicture", () => {
  ctx.isPictureInPicture.value = false;
});

onMounted(() => {
  ctx.videoRef.value = videoEl.value;
  syncFromElement();
});
</script>

<template>
  <video
    ref="videoEl"
    data-slot="video-player-video"
    :class="cn('block h-full w-full', props.class)"
    :src="props.src"
    :poster="props.poster"
    :loop="props.loop"
    :autoplay="props.autoplay"
    :muted="props.muted"
    :playsinline="props.playsinline"
    :preload="props.preload"
    :crossorigin="props.crossorigin"
    @click="ctx.toggle()"
  >
    <slot />
  </video>
</template>
