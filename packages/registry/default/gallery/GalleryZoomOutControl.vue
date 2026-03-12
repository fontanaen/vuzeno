<script setup lang="ts">
import { ZoomOutIcon } from "lucide-vue-next";
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { Button, type ButtonVariants } from "@/components/ui/button";
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

const { zoomOut, zoomDisabled } = injectGalleryContext();
</script>

<template>
  <Button v-bind="props" @click="zoomOut()" class="size-7" :disabled="zoomDisabled">
    <ZoomOutIcon />
  </Button>
</template>