<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ark.div
    :class="cn('flex gap-x-2 justify-end w-full', props.class)"
    data-slot="dialog-footer"
  >
    <slot />
  </ark.div>
</template>
