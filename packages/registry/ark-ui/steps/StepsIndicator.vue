<script setup lang="ts">
import { Steps, type StepsIndicatorProps } from "@ark-ui/vue/steps";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<StepsIndicatorProps & { class?: HTMLAttributes["class"] }>();

const indicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Steps.Indicator
    v-bind="indicatorProps"
    :class="cn(
      'flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-medium',
      '[&_svg]:size-(--steps-icon-size) [&_svg]:shrink-0',
      'bg-accent text-foreground border border-border',
      'data-complete:bg-primary data-complete:text-primary-foreground',
      props.class,
    )"
    data-slot="steps-indicator"
  >
    <slot />
  </Steps.Indicator>
</template>
