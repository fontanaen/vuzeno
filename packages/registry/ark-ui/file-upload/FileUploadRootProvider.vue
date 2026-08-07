<script setup lang="ts">
import { FileUpload, type FileUploadRootProviderProps } from "@ark-ui/vue/file-upload";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FileUploadRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <FileUpload.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex w-full max-w-96 flex-col items-start gap-4 text-foreground',
      props.class,
    )"
    data-slot="file-upload-root-provider"
  >
    <slot />
  </FileUpload.RootProvider>
</template>
