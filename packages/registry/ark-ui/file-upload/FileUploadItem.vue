<script setup lang="ts">
import { FileUpload, type FileUploadItemProps } from "@ark-ui/vue/file-upload";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FileUploadItemProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <FileUpload.Item
    v-bind="itemProps"
    :class="cn(
      'grid grid-cols-[auto_1fr_auto] items-center gap-x-3 rounded-lg border border-border bg-card p-3',
      `[grid-template-areas:'preview_name_delete'_'preview_size_delete']`,
      props.class,
    )"
    data-slot="file-upload-item"
  >
    <slot />
  </FileUpload.Item>
</template>
