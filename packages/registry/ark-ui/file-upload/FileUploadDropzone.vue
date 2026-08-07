<script setup lang="ts">
import { FileUpload, type FileUploadDropzoneProps } from "@ark-ui/vue/file-upload";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FileUploadDropzoneProps & { class?: HTMLAttributes["class"] }>();

const dropzoneProps = reactiveOmit(props, "class");
</script>

<template>
  <FileUpload.Dropzone
    v-bind="dropzoneProps"
    :class="cn(
      'flex min-h-40 w-full flex-col items-center justify-center gap-3 self-stretch rounded-lg border-2 border-dashed border-border p-6 text-center',
      'cursor-pointer transition-[background,border-color] duration-150',
      '[&:hover:not([data-disabled])]:bg-muted',
      'data-dragging:border-solid data-dragging:border-primary data-dragging:bg-[var(--demo-coral-subtle)]',
      'data-invalid:border-destructive',
      'data-disabled:cursor-not-allowed data-disabled:opacity-50',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      props.class,
    )"
    data-slot="file-upload-dropzone"
  >
    <slot />
  </FileUpload.Dropzone>
</template>
