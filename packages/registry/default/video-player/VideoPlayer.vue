<script lang="ts">
import type { Ref } from "vue";

export type VideoPlayerContext = {
  rootRef: Ref<HTMLElement | null | undefined>;
  videoRef: Ref<HTMLVideoElement | null | undefined>;
  isPlaying: Ref<boolean>;
  currentTime: Ref<number>;
  duration: Ref<number>;
  buffered: Ref<number>;
  volume: Ref<number>;
  muted: Ref<boolean>;
  playbackRate: Ref<number>;
  isPictureInPicture: Ref<boolean>;
  pictureInPictureSupported: Ref<boolean>;
  isFullscreen: Ref<boolean>;
  fullscreenSupported: Ref<boolean>;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  seek: (time: number) => void;
  setVolume: (value: number) => void;
  toggleMute: () => void;
  setPlaybackRate: (rate: number) => void;
  requestPictureInPicture: () => Promise<void>;
  exitPictureInPicture: () => Promise<void>;
  togglePictureInPicture: () => Promise<void>;
  enterFullscreen: () => Promise<void>;
  exitFullscreen: () => Promise<void>;
  toggleFullscreen: () => Promise<void>;
};

export const [injectVideoPlayerContext, provideVideoPlayerContext] = createContext<VideoPlayerContext>("VideoPlayerContext");
</script>

<script setup lang="ts">
import { useFullscreen, useThrottleFn } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { createContext, Primitive, type PrimitiveProps } from "reka-ui";
import { computed, type HTMLAttributes, nextTick, onMounted, ref, useTemplateRef, watch } from "vue";
import { clamp } from "./utils";

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

const rootRef = ref<HTMLElement | null | undefined>(null);
const root = useTemplateRef<{ $el: HTMLElement } | null>("root");

const videoRef = ref<HTMLVideoElement | null | undefined>(null);

const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const buffered = ref(0);
const volume = ref(1);
const muted = ref(false);
const playbackRate = ref(1);
const isPictureInPicture = ref(false);

const pictureInPictureSupported = computed(() => document !== null && document.pictureInPictureEnabled === true);

const { isFullscreen, isSupported: fullscreenSupported, enter, exit, toggle: toggleFullscreenInternal } = useFullscreen(rootRef);

function play() {
  videoRef.value?.play();
}

function pause() {
  videoRef.value?.pause();
}

function toggle() {
  if (!videoRef.value) {
    return;
  }

  if (videoRef.value.paused) {
    play();
  } else {
    pause();
  }
}

function seek(time: number) {
  if (!videoRef.value) {
    return;
  }

  const max = duration.value || videoRef.value.duration || 0;
  videoRef.value.currentTime = clamp(time, 0, max);
}

function setVolume(value: number) {
  if (!videoRef.value) {
    return;
  }

  const next = clamp(value, 0, 1);
  videoRef.value.volume = next;

  if (next > 0 && videoRef.value.muted) {
    videoRef.value.muted = false;
  }
}

function toggleMute() {
  if (!videoRef.value) {
    return;
  }

  videoRef.value.muted = !videoRef.value.muted;
}

function setPlaybackRate(rate: number) {
  if (!videoRef.value) {
    return;
  }

  videoRef.value.playbackRate = rate;
}

async function requestPictureInPicture() {
  if (!videoRef.value || !pictureInPictureSupported.value) {
    return;
  }

  try {
    await videoRef.value.requestPictureInPicture();
  } catch {
    // user denied or already in PiP
  }
}

async function exitPictureInPicture() {
  if (typeof document === "undefined" || !document.pictureInPictureElement) {
    return;
  }

  try {
    await document.exitPictureInPicture();
  } catch {
    // ignore
  }
}

async function togglePictureInPicture() {
  if (isPictureInPicture.value) {
    await exitPictureInPicture();
  } else {
    await requestPictureInPicture();
  }
}

async function enterFullscreen() {
  await enter();
}

async function exitFullscreen() {
  await exit();
}

async function toggleFullscreen() {
  await toggleFullscreenInternal();
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
}

function onKeydown(event: KeyboardEvent) {
  if (isEditableTarget(event.target)) {
    return;
  }

  if (event.code === "Space" || event.key === " ") {
    event.preventDefault();
    toggle();
  }
}

watch(isFullscreen, async (value) => {
  if (!value) {
    return;
  }

  await nextTick();
  rootRef.value?.focus({ preventScroll: true });
});

onMounted(() => {
  rootRef.value = root.value?.$el;
});

provideVideoPlayerContext({
  rootRef,
  videoRef,
  isPlaying,
  currentTime,
  duration,
  buffered,
  volume,
  muted,
  playbackRate,
  isPictureInPicture,
  pictureInPictureSupported,
  isFullscreen,
  fullscreenSupported,
  play,
  pause,
  toggle,
  seek: useThrottleFn(seek, 60),
  setVolume,
  toggleMute,
  setPlaybackRate,
  requestPictureInPicture,
  exitPictureInPicture,
  togglePictureInPicture,
  enterFullscreen,
  exitFullscreen,
  toggleFullscreen,
});
</script>

<template>
  <Primitive
    ref="root"
    :as="as"
    :as-child="asChild"
    data-slot="video-player"
    :data-playing="isPlaying"
    :data-fullscreen="isFullscreen"
    :data-pip="isPictureInPicture"
    tabindex="-1"
    :class="
      cn(
        'group/video-player relative isolate w-full overflow-hidden rounded-lg bg-black outline-none',
        'data-[fullscreen=true]:rounded-none',
        props.class,
      )
    "
    @keydown="onKeydown"
  >
    <slot
      :is-playing="isPlaying"
      :is-fullscreen="isFullscreen"
      :is-picture-in-picture="isPictureInPicture"
    />
  </Primitive>
</template>
