<script setup lang="ts">
import { type DialogContentProps } from "@ark-ui/vue/dialog";
import { reactiveOmit } from "@vueuse/core";
import type { HTMLAttributes } from "vue";
import { Dialog } from "../dialog";

interface Props extends DialogContentProps {
  class?: HTMLAttributes["class"];
  backdrop?: boolean;
  scroll?: "inside" | "outside";
}

const props = withDefaults(defineProps<Props>(), {
  backdrop: true,
  scroll: "inside",
});

const contentProps = reactiveOmit(props, "class", "backdrop", "scroll");
</script>

<template>
  <Dialog.Content v-bind="contentProps" :show-close-button="false">
    <slot />
  </Dialog.Content>
</template>
