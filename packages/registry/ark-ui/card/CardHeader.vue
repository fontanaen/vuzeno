<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.div :class="cn('flex flex-col gap-y-1 p-3', props.class)">
    <slot />
  </ark.div>
</template>
