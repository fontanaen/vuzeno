<script setup lang="ts">
import { FileUpload } from "@ark-ui/vue/file-upload";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <FileUpload.ItemSizeText
    :class="cn(
      'text-xs leading-4 text-muted-foreground [grid-area:size]',
      props.class,
    )"
    data-slot="file-upload-item-size-text"
  />
</template>
