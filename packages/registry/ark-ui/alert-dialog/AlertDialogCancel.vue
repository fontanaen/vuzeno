<script setup lang="ts">
import { Dialog } from "@ark-ui/vue/dialog";
import type { HTMLAttributes } from "vue";
import { Button, type ButtonVariantsProps } from "../button";

interface Props extends ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "secondary",
  size: "md",
});
</script>

<template>
  <Dialog.CloseTrigger as-child>
    <Button :variant="variant" :size="size" :class="props.class">
      <slot />
    </Button>
  </Dialog.CloseTrigger>
</template>