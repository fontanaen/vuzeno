<script setup lang="ts">
import { FileUpload } from "@ark-ui/vue/file-upload";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <FileUpload.Label
    :class="cn(
      'text-sm leading-5 font-medium text-foreground',
      'data-disabled:opacity-50',
      props.class,
    )"
    data-slot="file-upload-label"
  >
    <slot />
  </FileUpload.Label>
</template>
