<script setup lang="ts">
import { ImageCropper, type ImageCropperRootProviderProps } from "@ark-ui/vue/image-cropper";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ImageCropperRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <ImageCropper.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'relative flex w-full max-w-md flex-col gap-4 text-foreground',
      '[--cropper-accent:var(--demo-coral-solid)] [--cropper-line-color:white] [--cropper-overlay-color:rgb(0_0_0/0.5)] [--cropper-handler-size:6px] [--cropper-handler-width:3px] [--cropper-line-width:2px]',
      props.class,
    )"
    data-slot="image-cropper-root-provider"
  >
    <slot />
  </ImageCropper.RootProvider>
</template>
