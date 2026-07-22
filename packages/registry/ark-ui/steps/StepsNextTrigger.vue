<script setup lang="ts">
import { Steps, type StepsNextTriggerProps } from "@ark-ui/vue/steps";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props extends StepsNextTriggerProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Steps.NextTrigger
    v-bind="triggerProps"
    :class="cn(props.class)"
    data-slot="steps-next-trigger"
  >
    <slot />
  </Steps.NextTrigger>
</template>
