<script setup lang="ts">
import { Button, type ButtonVariants } from "@vuzeno/ui/components/button";
import { Popover } from "@vuzeno/ui/components/popover";
import { cn } from "@vuzeno/ui/lib/utils";
import { Volume1Icon, Volume2Icon, VolumeXIcon } from "lucide-vue-next";
import { PopoverAnchor, PopoverContent, PopoverPortal, SliderRange, SliderRoot, SliderThumb, SliderTrack } from "reka-ui";
import { computed, type HTMLAttributes, onBeforeUnmount, ref } from "vue";
import { injectVideoPlayerContext } from "./VideoPlayer.vue";

const props = withDefaults(
  defineProps<{
    orientation?: "vertical" | "horizontal";
    side?: "top" | "right" | "bottom" | "left";
    sideOffset?: number;
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    class?: HTMLAttributes["class"];
  }>(),
  {
    orientation: "vertical",
    sideOffset: 8,
    variant: "ghost",
    size: "icon-sm",
  },
);

const ctx = injectVideoPlayerContext();

const portalTarget = computed(() => (ctx.isFullscreen.value ? (ctx.rootRef.value ?? undefined) : undefined));

const open = ref(false);
let closeTimer: ReturnType<typeof setTimeout> | null = null;

const isHovered = ref(false);
const isDragging = ref(false);
const isFocused = ref(false);

const isActive = computed(() => isHovered.value || isFocused.value || isDragging.value);

function clearCloseTimer() {
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
}

function scheduleClose() {
  clearCloseTimer();
  closeTimer = setTimeout(() => {
    open.value = false;
    closeTimer = null;
  }, 150);
}

function openNow() {
  clearCloseTimer();
  open.value = true;
}

const resolvedSide = computed(() => {
  if (props.side) {
    return props.side;
  }

  return props.orientation === "vertical" ? "top" : "right";
});

const sliderValue = computed(() => [ctx.muted.value ? 0 : ctx.volume.value]);

function onVolumeChange(next: number[]) {
  const [v] = next;
  if (typeof v === "number") {
    ctx.setVolume(v);
  }
}

function onPointerDown() {
  isDragging.value = true;
}

function onValueCommit() {
  isDragging.value = false;
}

function onFocusIn() {
  isFocused.value = true;
}

function onFocusOut() {
  isFocused.value = false;
}

onBeforeUnmount(clearCloseTimer);
</script>

<template>
  <Popover :open="open" @update:open="open = $event">
    <PopoverAnchor as-child>
      <span
        :class="cn('inline-flex', props.class)"
        data-slot="video-player-sound"
        @mouseenter="openNow"
        @mouseleave="scheduleClose"
        @focusin="openNow"
        @focusout="scheduleClose"
      >
        <Button
          type="button"
          :variant="props.variant"
          :size="props.size"
          :aria-label="ctx.muted.value ? 'Unmute' : 'Mute'"
          :aria-pressed="ctx.muted.value"
          @click="ctx.toggleMute()"
        >
          <slot :muted="ctx.muted.value" :volume="ctx.volume.value">
            <VolumeXIcon v-if="ctx.muted.value || ctx.volume.value === 0" />
            <Volume1Icon v-else-if="ctx.volume.value < 0.5" />
            <Volume2Icon v-else />
          </slot>
        </Button>
      </span>
    </PopoverAnchor>

    <PopoverPortal :to="portalTarget">
      <PopoverContent
        :side="resolvedSide"
        :side-offset="props.sideOffset"
        align="center"
        data-slot="video-player-sound-content"
        :class="
          cn(
            'z-50 flex items-center justify-center rounded-md border border-white/25 bg-white/15 text-popover-foreground shadow-lg outline-none ring-1 ring-inset ring-white/20 backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-white/15 dark:bg-accent/50 dark:ring-white/10',
            props.orientation === 'vertical' ? 'h-32 w-auto px-0.5 py-2' : 'h-auto w-40 px-2 py-0.5',
          )
        "
        @mouseenter="openNow"
        @mouseleave="scheduleClose"
        @open-auto-focus.prevent
        @close-auto-focus.prevent
      >
        <SliderRoot
          :model-value="sliderValue"
          :orientation="props.orientation"
          :min="0"
          :max="1"
          :step="0.01"
          aria-label="Volume"
          data-slot="video-player-sound-slider"
          :data-active="isActive"
          :class="
            cn(
              'group/video-player-volume relative flex touch-none select-none cursor-pointer',
              props.orientation === 'vertical'
                ? 'h-full w-8 flex-col items-center justify-center'
                : 'h-8 w-full items-center',
            )
          "
          @update:model-value="onVolumeChange($event as number[])"
          @pointerdown="onPointerDown"
          @value-commit="onValueCommit"
          @focusin="onFocusIn"
          @focusout="onFocusOut"
        >
          <SliderTrack
            :class="
              cn(
                'relative grow overflow-hidden rounded-full bg-white/30 transition-[height,width] duration-150 ease-out',
                props.orientation === 'vertical'
                  ? 'h-full w-[6px]'
                  : 'h-[6px] w-full',
              )
            "
            @pointerenter="isHovered = true"
            @pointerleave="isHovered = false"
          >
            <SliderRange class="absolute h-full bg-white data-[orientation=vertical]:w-full" />
          </SliderTrack>

          <SliderThumb class="pointer-events-auto block h-3 w-3 shadow-sm outline-none ring-offset-black/30 transition-[width] duration-150 ease-out hover:w-5">
            <span
              class="block size-full scale-0 rounded-full bg-white opacity-0 shadow-sm transition-[opacity,scale] duration-150 ease-out group-data-[active=true]/video-player-volume:scale-100 group-data-[active=true]/video-player-volume:opacity-100"
            />
          </SliderThumb>
        </SliderRoot>
      </PopoverContent>
    </PopoverPortal>
  </Popover>
</template>
