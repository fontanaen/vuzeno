<script setup lang="ts">
import { Progress } from "@ark-ui/vue/progress";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Progress.Track    
    :class="cn(props.class)"
    data-slot="progress-track"
  >
    <slot />
  </Progress.Track>
</template>
