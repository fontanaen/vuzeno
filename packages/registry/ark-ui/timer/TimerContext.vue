<script setup lang="ts">
import { Timer } from "@ark-ui/vue/timer";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Timer.Context
    :class="cn(props.class)"
    data-slot="timer-context"
    v-slot="slotProps"
  >
    <slot v-bind="slotProps" />
  </Timer.Context>
</template>
