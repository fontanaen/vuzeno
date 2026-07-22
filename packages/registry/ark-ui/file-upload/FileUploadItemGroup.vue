<script setup lang="ts">
import { FileUpload, type FileUploadItemGroupProps } from "@ark-ui/vue/file-upload";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FileUploadItemGroupProps & { class?: HTMLAttributes["class"] }>();

const itemGroupProps = reactiveOmit(props, "class");
</script>

<template>
  <FileUpload.ItemGroup
    v-bind="itemGroupProps"
    :class="cn(
      'm-0 flex list-none flex-col gap-3 self-stretch p-0',
      props.class,
    )"
    data-slot="file-upload-item-group"
  >
    <slot />
  </FileUpload.ItemGroup>
</template>
