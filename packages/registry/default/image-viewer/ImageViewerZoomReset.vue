<script setup lang="ts">
import { ScanIcon } from "lucide-vue-next";
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { Button, type ButtonVariants } from "@/components/ui/button";
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

const { onZoomReset, disabled } = injectImageViewerProviderContext();
</script>

<template>
  <Button v-bind="props" @click="onZoomReset()" :disabled="disabled">
    <ScanIcon />
  </Button>
</template>