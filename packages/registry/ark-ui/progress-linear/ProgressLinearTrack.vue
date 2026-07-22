<script setup lang="ts">
import { Progress } from "@ark-ui/vue/progress";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import ProgressLinearRange from "./ProgressLinearRange.vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Progress.Track
    :class="cn(
      'col-span-full h-1.5 overflow-hidden rounded-full bg-muted',
      'data-[orientation=vertical]:h-32 data-[orientation=vertical]:w-1.5',
      props.class,
    )"
    data-slot="progress-linear-track"
  >
    <slot>
      <ProgressLinearRange />
    </slot>
  </Progress.Track>
</template>
