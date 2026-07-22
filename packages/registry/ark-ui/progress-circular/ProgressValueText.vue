<script setup lang="ts">
import { Progress } from "@ark-ui/vue/progress";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Progress.ValueText
    :class="cn(
      'absolute font-medium text-foreground [font-size:calc(var(--size)*0.25)]',
      props.class,
    )"
    data-slot="progress-value-text"
  />
</template>
