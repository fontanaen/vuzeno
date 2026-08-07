<script setup lang="ts">
import { Timer, type TimerControlProps } from "@ark-ui/vue/timer";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TimerControlProps & { class?: HTMLAttributes["class"] }>();

const controlProps = reactiveOmit(props, "class");
</script>

<template>
  <Timer.Control
    v-bind="controlProps"
    :class="cn('flex items-center gap-2', props.class)"
    data-slot="timer-control"
  >
    <slot />
  </Timer.Control>
</template>
