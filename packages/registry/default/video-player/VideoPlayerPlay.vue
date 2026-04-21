<script setup lang="ts">
import { Button, type ButtonVariants } from "@vuzeno/ui/components/button";
import { PauseIcon, PlayIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { injectVideoPlayerContext } from "./VideoPlayer.vue";

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    class?: HTMLAttributes["class"];
  }>(),
  {
    variant: "ghost",
    size: "icon-sm",
  },
);

const ctx = injectVideoPlayerContext();
</script>

<template>
  <Button
    type="button"
    :variant="props.variant"
    :size="props.size"
    :class="props.class"
    data-slot="video-player-play"
    :aria-label="ctx.isPlaying.value ? 'Pause' : 'Play'"
    :aria-pressed="ctx.isPlaying.value"
    @click="ctx.toggle()"
  >
    <slot :is-playing="ctx.isPlaying.value">
      <PauseIcon v-if="ctx.isPlaying.value" />
      <PlayIcon v-else />
    </slot>
  </Button>
</template>
