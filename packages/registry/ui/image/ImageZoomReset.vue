<script setup lang="ts">
import { Button, type ButtonVariants } from "@vuetella/ui/components/button";
import { ScanIcon } from "lucide-vue-next";
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
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

const { onZoomReset } = injectImageZoomProviderContext();
</script>

<template>
  <Button v-bind="props" @click="onZoomReset()">
    <ScanIcon />
  </Button>
</template>