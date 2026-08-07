<script setup lang="ts">
import { Timer, type TimerActionTriggerProps } from "@ark-ui/vue/timer";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

interface Props extends TimerActionTriggerProps, ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "sm",
});

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Timer.ActionTrigger
    v-bind="triggerProps"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    data-slot="timer-action-trigger"
  >
    <slot />
  </Timer.ActionTrigger>
</template>
