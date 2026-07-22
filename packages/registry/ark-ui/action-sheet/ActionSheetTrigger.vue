<script setup lang="ts">
import { Dialog, type DialogTriggerProps } from "@ark-ui/vue/dialog";
import { reactiveOmit } from "@vueuse/core";
import type { HTMLAttributes } from "vue";

interface Props extends DialogTriggerProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Dialog.Trigger
    v-bind="triggerProps"
    data-slot="action-sheet-trigger"
  >
    <slot />
  </Dialog.Trigger>
</template>
