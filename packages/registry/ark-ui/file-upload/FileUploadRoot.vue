<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { FileUpload, type FileUploadRootEmits, type FileUploadRootProps } from "@ark-ui/vue/file-upload";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FileUploadRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<FileUploadRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <FileUpload.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-96 flex-col items-start gap-4 text-foreground',
      props.class,
    )"
    data-slot="file-upload"
  >
    <slot />
  </FileUpload.Root>
</template>
