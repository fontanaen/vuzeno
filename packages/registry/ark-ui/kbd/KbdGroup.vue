<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.kbd
    data-slot="kbd-group"
    :class="cn('inline-flex items-center gap-1', props.class)"
  >
    <slot />
  </ark.kbd>
</template>
