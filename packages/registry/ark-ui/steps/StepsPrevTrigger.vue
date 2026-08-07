<script setup lang="ts">
import { Steps, type StepsPrevTriggerProps } from "@ark-ui/vue/steps";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props extends StepsPrevTriggerProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Steps.PrevTrigger
    v-bind="triggerProps"
    :class="cn(props.class)"
    data-slot="steps-prev-trigger"
  >
    <slot />
  </Steps.PrevTrigger>
</template>
