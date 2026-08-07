<script setup lang="ts">
import { ImageCropper, type ImageCropperSelectionProps } from "@ark-ui/vue/image-cropper";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ImageCropperSelectionProps & { class?: HTMLAttributes["class"] }>();

const selectionProps = reactiveOmit(props, "class");
</script>

<template>
  <ImageCropper.Selection
    v-bind="selectionProps"
    :class="cn(
      'box-content cursor-move border-white/50 shadow-[0_0_0_9999px_var(--cropper-overlay-color)] outline-none [backface-visibility:hidden]',
      'border-[length:var(--cropper-line-width)]',
      'data-[shape=circle]:rounded-full',
      'focus-visible:border-[var(--cropper-accent)]',
      'data-disabled:cursor-default',
      'data-dragging:cursor-grabbing data-dragging:border-white/80',
      props.class,
    )"
    data-slot="image-cropper-selection"
  >
    <slot />
  </ImageCropper.Selection>
</template>
