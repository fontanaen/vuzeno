<script setup lang="ts">
import { FileUpload } from "@ark-ui/vue/file-upload";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

type Props = ButtonVariantsProps & {
  class?: HTMLAttributes["class"];
};

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "sm",
});
</script>

<template>
  <FileUpload.Trigger
    :class="cn(buttonVariants({ variant, size }), props.class)"
    data-slot="file-upload-trigger"
  >
    <slot />
  </FileUpload.Trigger>
</template>
