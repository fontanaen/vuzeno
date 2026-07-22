<script setup lang="ts">
import { FileUpload } from "@ark-ui/vue/file-upload";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <FileUpload.ClearTrigger
    :class="cn(props.class)"
    data-slot="file-upload-clear-trigger"
  >
    <slot />
  </FileUpload.ClearTrigger>
</template>
