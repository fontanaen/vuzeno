<script setup lang="ts">
import { Steps, type StepsTriggerProps } from "@ark-ui/vue/steps";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<StepsTriggerProps & { class?: HTMLAttributes["class"] }>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Steps.Trigger
    v-bind="triggerProps"
    :class="cn(
      'flex cursor-pointer items-center gap-3 rounded-md border-none bg-transparent p-0',
      'text-start font-[inherit] text-sm font-normal text-muted-foreground',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="steps-trigger"
  >
    <slot />
  </Steps.Trigger>
</template>
