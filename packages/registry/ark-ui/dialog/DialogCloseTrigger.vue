<script setup lang="ts">
import { Dialog, type DialogCloseTriggerProps } from "@ark-ui/vue/dialog";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DialogCloseTriggerProps & { class?: HTMLAttributes["class"] }>();

const closeTriggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Dialog.CloseTrigger
    v-bind="closeTriggerProps"
    :class="cn(props.class)"
    data-slot="dialog-close-trigger"
  >
    <slot />
  </Dialog.CloseTrigger>
</template>
