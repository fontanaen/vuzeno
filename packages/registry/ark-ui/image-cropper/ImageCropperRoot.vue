<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { ImageCropper, type ImageCropperRootEmits, type ImageCropperRootProps } from "@ark-ui/vue/image-cropper";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ImageCropperRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<ImageCropperRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <ImageCropper.Root
    v-bind="forwarded"
    :class="cn(
      'relative flex w-full max-w-md flex-col gap-4 text-foreground',
      '[--cropper-accent:var(--demo-coral-solid)] [--cropper-line-color:white] [--cropper-overlay-color:rgb(0_0_0/0.5)] [--cropper-handler-size:6px] [--cropper-handler-width:3px] [--cropper-line-width:2px]',
      props.class,
    )"
    data-slot="image-cropper"
  >
    <slot />
  </ImageCropper.Root>
</template>
