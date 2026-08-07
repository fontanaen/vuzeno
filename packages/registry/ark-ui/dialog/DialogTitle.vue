<script setup lang="ts">
import { Dialog } from "@ark-ui/vue/dialog";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Dialog.Title
    :class="cn('m-0 text-lg font-semibold leading-none text-foreground tracking-tight', props.class)"
    data-slot="dialog-title"
  >
    <slot />
  </Dialog.Title>
</template>
