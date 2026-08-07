<script setup lang="ts">
import { Progress } from "@ark-ui/vue/progress";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Progress.CircleTrack
    :class="cn(
      'fill-none stroke-muted',
      props.class,
    )"
    data-slot="progress-circle-track"
  >
    <slot />
  </Progress.CircleTrack>
</template>
