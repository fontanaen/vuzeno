<script setup lang="ts">
import { Button, type ButtonVariants } from "@vuzeno/ui/components/button";
import { ZoomOutIcon } from "lucide-vue-next";
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { injectImageViewerProviderContext } from "./ImageViewerProvider.vue";

type Props = PrimitiveProps & {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
};

const props = withDefaults(defineProps<Props>(), {
  variant: "secondary",
  size: "icon",
});

const { onZoomOut, disabled } = injectImageViewerProviderContext();
</script>

<template>
  <Button v-bind="props" @click="onZoomOut()" :disabled="disabled">
    <ZoomOutIcon />
  </Button>
</template>