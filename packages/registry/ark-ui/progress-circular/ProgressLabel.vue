<script setup lang="ts">
import { Progress } from "@ark-ui/vue/progress";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Progress.Label
    :class="cn(
      'text-sm leading-5 font-medium text-foreground',
      props.class,
    )"
    data-slot="progress-label"
  >
    <slot />
  </Progress.Label>
</template>
