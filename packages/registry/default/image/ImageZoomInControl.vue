<script setup lang="ts">
import { ZoomInIcon } from "lucide-vue-next";
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { Button, type ButtonVariants } from "@/components/ui/button";
import { injectImageZoomProviderContext } from "./ImageZoomProvider.vue";

type Props = PrimitiveProps & {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
};

const props = withDefaults(defineProps<Props>(), {
  variant: "secondary",
  size: "icon",
});

const { onZoomIn } = injectImageZoomProviderContext();
</script>
  
<template>
  <Button v-bind="props" @click="onZoomIn()">
    <ZoomInIcon />
  </Button>
</template>