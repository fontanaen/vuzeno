<script setup lang="ts">
import { Button, type ButtonVariants } from "@vuzeno/ui/components/button";
import { ZoomInIcon } from "lucide-vue-next";
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { injectGalleryContext } from "./Gallery.vue";

type Props = PrimitiveProps & {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
};

const props = withDefaults(defineProps<Props>(), {
  variant: "ghost",
  size: "icon-sm",
});

const { zoomIn, zoomDisabled } = injectGalleryContext();
</script>
  
<template>
  <Button v-bind="props" @click="zoomIn()" class="size-7" :disabled="zoomDisabled">
    <ZoomInIcon />
  </Button>
</template>