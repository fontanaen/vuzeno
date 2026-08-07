<script setup lang="ts">
import { FileUpload, type FileUploadItemPreviewProps } from "@ark-ui/vue/file-upload";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FileUploadItemPreviewProps & { class?: HTMLAttributes["class"] }>();

const itemPreviewProps = reactiveOmit(props, "class");
</script>

<template>
  <FileUpload.ItemPreview
    v-bind="itemPreviewProps"
    :class="cn(
      'flex shrink-0 items-center justify-center [grid-area:preview]',
      '[&_svg]:size-5 [&_svg]:text-muted-foreground',
      props.class,
    )"
    data-slot="file-upload-item-preview"
  >
    <slot />
  </FileUpload.ItemPreview>
</template>
