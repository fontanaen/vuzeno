<script setup lang="ts">
import { FileUpload } from "@ark-ui/vue/file-upload";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <FileUpload.ItemDeleteTrigger
    :class="cn(
      'size-6 [&_svg]:size-4 shrink-0 cursor-pointer [grid-area:delete]',
      props.class,
    )"
    data-slot="file-upload-item-delete-trigger"
  >
    <slot />
  </FileUpload.ItemDeleteTrigger>
</template>
