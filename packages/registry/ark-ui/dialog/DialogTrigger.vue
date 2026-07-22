<script setup lang="ts">
import { Dialog, type DialogTriggerProps } from "@ark-ui/vue/dialog";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DialogTriggerProps & { class?: HTMLAttributes["class"] }>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Dialog.Trigger
    v-bind="triggerProps"
    :class="cn(props.class)"
    data-slot="dialog-trigger"
  >
    <slot />
  </Dialog.Trigger>
</template>
