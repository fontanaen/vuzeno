<script setup lang="ts">
import { Steps } from "@ark-ui/vue/steps";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Steps.Progress
    
    :class="cn(props.class)"
    data-slot="steps-progress"
  >
    <slot />
  </Steps.Progress>
</template>
