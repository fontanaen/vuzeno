<script setup lang="ts">
import { Button, type ButtonVariants } from "@vuzeno/ui/components/button";
import { MaximizeIcon, MinimizeIcon } from "lucide-vue-next";
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
    v-if="ctx.fullscreenSupported.value"
    type="button"
    :variant="props.variant"
    :size="props.size"
    :class="props.class"
    data-slot="video-player-fullscreen"
    :aria-label="ctx.isFullscreen.value ? 'Exit fullscreen' : 'Enter fullscreen'"
    :aria-pressed="ctx.isFullscreen.value"
    @click="ctx.toggleFullscreen()"
  >
    <slot :is-fullscreen="ctx.isFullscreen.value">
      <MinimizeIcon v-if="ctx.isFullscreen.value" />
      <MaximizeIcon v-else />
    </slot>
  </Button>
</template>
