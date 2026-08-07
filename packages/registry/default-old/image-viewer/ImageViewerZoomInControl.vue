<script setup lang="ts">
import { ZoomInIcon } from "@lucide/vue";
import { Button, type ButtonVariants } from "@vuzeno/ui/components/button";
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

const { onZoomIn, disabled } = injectImageViewerProviderContext();
</script>
  
<template>
  <Button v-bind="props" @click="onZoomIn()" :disabled="disabled">
    <ZoomInIcon />
  </Button>
</template>