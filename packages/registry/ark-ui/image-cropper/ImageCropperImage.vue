<script setup lang="ts">
import { ImageCropper, type ImageCropperImageProps } from "@ark-ui/vue/image-cropper";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ImageCropperImageProps & { class?: HTMLAttributes["class"] }>();

const imageProps = reactiveOmit(props, "class");
</script>

<template>
  <ImageCropper.Image
    v-bind="imageProps"
    :class="cn(
      'pointer-events-none absolute top-0 left-0 size-full origin-center object-contain select-none [backface-visibility:hidden]',
      props.class,
    )"
    data-slot="image-cropper-image"
  >
    <slot />
  </ImageCropper.Image>
</template>
