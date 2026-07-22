<script setup lang="ts">
import { Dialog } from "@ark-ui/vue/dialog";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Dialog.Description
    :class="cn('m-0 mt-1 text-sm leading-normal text-muted-foreground', props.class)"
    data-slot="dialog-description"
  >
    <slot />
  </Dialog.Description>
</template>
