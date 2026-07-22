<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.Control
    :class="cn(
      'mt-3 flex items-center gap-2',
      props.class,
    )"
    data-slot="tour-control"
  >
    <slot />
  </Tour.Control>
</template>
