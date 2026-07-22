<script setup lang="ts">
import { ImageCropper, type ImageCropperViewportProps } from "@ark-ui/vue/image-cropper";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ImageCropperViewportProps & { class?: HTMLAttributes["class"] }>();

const viewportProps = reactiveOmit(props, "class");
</script>

<template>
  <ImageCropper.Viewport
    v-bind="viewportProps"
    :class="cn('relative aspect-video overflow-hidden rounded-lg bg-muted', props.class)"
    data-slot="image-cropper-viewport"
  >
    <slot />
  </ImageCropper.Viewport>
</template>
