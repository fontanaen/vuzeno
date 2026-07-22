<script setup lang="ts">
import { Progress } from "@ark-ui/vue/progress";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Progress.Range
    :class="cn(props.class)"
    data-slot="progress-range"
  >
    <slot />
  </Progress.Range>
</template>
