<script setup lang="ts">
import { ImageCropper, type ImageCropperHandleProps } from "@ark-ui/vue/image-cropper";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ImageCropperHandleProps & { class?: HTMLAttributes["class"] }>();

const handleProps = reactiveOmit(props, "class");
</script>

<template>
  <ImageCropper.Handle
    v-bind="handleProps"
    :class="cn(
      'absolute flex touch-none items-center justify-center',
      'size-[calc(var(--cropper-handler-size)+8px)]',
      '[&>*]:size-[var(--cropper-handler-size)] [&>*]:bg-popover [&>*]:shadow-[0_1px_3px_rgba(0,0,0,0.3)]',
      '[&>*]:transition-[opacity,transform] [&>*]:duration-150',
      'data-disabled:hidden',
      'data-[position=nw]:cursor-nwse-resize data-[position=se]:cursor-nwse-resize',
      'data-[position=ne]:cursor-nesw-resize data-[position=sw]:cursor-nesw-resize',
      'data-[position=n]:cursor-ns-resize data-[position=s]:cursor-ns-resize',
      'data-[position=e]:cursor-ew-resize data-[position=w]:cursor-ew-resize',
      'data-[position=nw]:[&>*]:border-t-[length:var(--cropper-handler-width)] data-[position=nw]:[&>*]:border-l-[length:var(--cropper-handler-width)] data-[position=nw]:[&>*]:border-[var(--cropper-accent)]',
      'data-[position=ne]:[&>*]:border-t-[length:var(--cropper-handler-width)] data-[position=ne]:[&>*]:border-r-[length:var(--cropper-handler-width)] data-[position=ne]:[&>*]:border-[var(--cropper-accent)]',
      'data-[position=se]:[&>*]:border-r-[length:var(--cropper-handler-width)] data-[position=se]:[&>*]:border-b-[length:var(--cropper-handler-width)] data-[position=se]:[&>*]:border-[var(--cropper-accent)]',
      'data-[position=sw]:[&>*]:border-b-[length:var(--cropper-handler-width)] data-[position=sw]:[&>*]:border-l-[length:var(--cropper-handler-width)] data-[position=sw]:[&>*]:border-[var(--cropper-accent)]',
      'data-[position=n]:[&>*]:size-1.5 data-[position=s]:[&>*]:size-1.5 data-[position=e]:[&>*]:size-1.5 data-[position=w]:[&>*]:size-1.5',
      'data-[position=n]:[&>*]:rounded-full data-[position=s]:[&>*]:rounded-full data-[position=e]:[&>*]:rounded-full data-[position=w]:[&>*]:rounded-full',
      'data-[position=n]:[&>*]:bg-[var(--cropper-accent)] data-[position=s]:[&>*]:bg-[var(--cropper-accent)] data-[position=e]:[&>*]:bg-[var(--cropper-accent)] data-[position=w]:[&>*]:bg-[var(--cropper-accent)]',
      'data-[position=n]:[&>*]:opacity-0 data-[position=s]:[&>*]:opacity-0 data-[position=e]:[&>*]:opacity-0 data-[position=w]:[&>*]:opacity-0',
      'data-[position=n]:hover:[&>*]:opacity-100 data-[position=s]:hover:[&>*]:opacity-100 data-[position=e]:hover:[&>*]:opacity-100 data-[position=w]:hover:[&>*]:opacity-100',
      'data-[position=nw]:hover:[&>*]:scale-110 data-[position=ne]:hover:[&>*]:scale-110 data-[position=se]:hover:[&>*]:scale-110 data-[position=sw]:hover:[&>*]:scale-110',
      props.class,
    )"
    data-slot="image-cropper-handle"
  >
    <slot />
  </ImageCropper.Handle>
</template>
