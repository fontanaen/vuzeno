<script setup lang="ts">
import { Button, type ButtonVariants } from "@vuzeno/ui/components/button";
import { PictureInPicture2Icon } from "lucide-vue-next";
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
    v-if="ctx.pictureInPictureSupported.value"
    type="button"
    :variant="props.variant"
    :size="props.size"
    :class="props.class"
    data-slot="video-player-picture-in-picture"
    :aria-label="ctx.isPictureInPicture.value ? 'Exit picture in picture' : 'Enter picture in picture'"
    :aria-pressed="ctx.isPictureInPicture.value"
    @click="ctx.togglePictureInPicture()"
  >
    <slot :is-picture-in-picture="ctx.isPictureInPicture.value">
      <PictureInPicture2Icon />
    </slot>
  </Button>
</template>
