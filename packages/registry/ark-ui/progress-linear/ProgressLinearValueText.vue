<script setup lang="ts">
import { Progress } from "@ark-ui/vue/progress";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Progress.ValueText
    :class="cn(
      'text-right text-sm font-medium leading-5 text-foreground',
      props.class,
    )"
    data-slot="progress-linear-value-text"
  />
</template>
