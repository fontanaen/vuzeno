<script setup lang="ts">
import { Timer, type TimerItemProps } from "@ark-ui/vue/timer";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TimerItemProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <Timer.Item
    v-bind="itemProps"
    :class="cn(
      'min-w-[2ch] text-center text-2xl font-semibold tabular-nums text-foreground',
      props.class,
    )"
    data-slot="timer-item"
  >
    <slot />
  </Timer.Item>
</template>
