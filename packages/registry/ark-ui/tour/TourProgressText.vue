<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.ProgressText
    :class="cn(
      'text-[13px] text-muted-foreground opacity-80',
      props.class,
    )"
    data-slot="tour-progress-text"
  />
</template>
