<script setup lang="ts">
import { ImageCropper, type ImageCropperGridProps } from "@ark-ui/vue/image-cropper";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ImageCropperGridProps & { class?: HTMLAttributes["class"] }>();

const gridProps = reactiveOmit(props, "class");
</script>

<template>
  <ImageCropper.Grid
    v-bind="gridProps"
    :class="cn(
      'pointer-events-none absolute opacity-0 transition-opacity duration-200',
      'data-[axis=horizontal]:inset-x-0 data-[axis=horizontal]:top-1/3 data-[axis=horizontal]:bottom-1/3',
      'data-[axis=horizontal]:border-t data-[axis=horizontal]:border-b data-[axis=horizontal]:border-white/40',
      'data-[axis=vertical]:inset-y-0 data-[axis=vertical]:left-1/3 data-[axis=vertical]:right-1/3',
      'data-[axis=vertical]:border-l data-[axis=vertical]:border-r data-[axis=vertical]:border-white/40',
      'data-dragging:opacity-100 data-panning:opacity-100',
      props.class,
    )"
    data-slot="image-cropper-grid"
  >
    <slot />
  </ImageCropper.Grid>
</template>
