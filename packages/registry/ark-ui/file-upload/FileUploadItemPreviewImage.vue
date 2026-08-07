<script setup lang="ts">
import { FileUpload } from "@ark-ui/vue/file-upload";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <FileUpload.ItemPreviewImage
    :class="cn(
      'size-10 rounded object-cover',
      props.class,
    )"
    data-slot="file-upload-item-preview-image"
  />
</template>
