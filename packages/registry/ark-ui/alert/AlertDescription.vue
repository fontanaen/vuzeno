<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.div
    data-slot="alert-description"
    :class="cn('text-sm [&_p]:leading-relaxed', props.class)"
  >
    <slot />
  </ark.div>
</template>
