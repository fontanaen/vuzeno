<script setup lang="ts">
import { FileUpload } from "@ark-ui/vue/file-upload";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <FileUpload.ItemName
    :class="cn(
      'min-w-0 flex-1 truncate text-sm leading-5 font-medium text-foreground [grid-area:name]',
      props.class,
    )"
    data-slot="file-upload-item-name"
  />
</template>
