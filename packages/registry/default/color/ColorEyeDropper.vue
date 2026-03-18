<script setup lang="ts">
import { useEyeDropper } from "@vueuse/core";
import { Button, type ButtonVariants } from "@vuzeno/ui/components/button";
import { cn } from "@vuzeno/ui/lib/utils";
import { PipetteIcon } from "lucide-vue-next";
import { type Color, normalizeColor } from "reka-ui";
import { type HTMLAttributes, watch } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    class?: HTMLAttributes["class"];
  }>(),
  {
    variant: "ghost",
    size: "icon-sm",
  },
);

const emits = defineEmits<(e: "update:color", color: Color) => void>();

const { open, sRGBHex: eyeDropperColor, isSupported: isEyeDropperSupported } = useEyeDropper();

watch(eyeDropperColor, (newColor) => {
  if (newColor) {
    emits("update:color", normalizeColor(newColor));
  }
});
</script>

<template>
  <Button v-if="isEyeDropperSupported" :size="size" :variant="variant" :class="cn('size-8', props.class)" @click="open()">
    <slot>
      <PipetteIcon class="size-4" />
    </slot>
  </Button>
</template>