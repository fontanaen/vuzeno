<script setup lang="ts">
import { Timer, type TimerAreaProps } from "@ark-ui/vue/timer";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TimerAreaProps & { class?: HTMLAttributes["class"] }>();

const areaProps = reactiveOmit(props, "class");
</script>

<template>
  <Timer.Area
    v-bind="areaProps"
    :class="cn('flex items-start gap-2', props.class)"
    data-slot="timer-area"
  >
    <slot />
  </Timer.Area>
</template>
