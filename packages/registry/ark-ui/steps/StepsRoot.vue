<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { type StepChangeDetails, Steps, type StepsRootProps } from "@ark-ui/vue/steps";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface StepInvalidDetails {
  step: number;
  action: "next" | "set";
  targetStep?: number;
}

type StepsRootEmits = {
  /**
   * Callback to be called when the value changes
   */
  stepChange: [details: StepChangeDetails];
  /**
   * Callback to be called when a step is completed
   */
  stepComplete: [];
  /**
   * Callback to be called when a step is invalid
   */
  stepInvalid: [details: StepInvalidDetails];
  /**
   * The callback fired when the model value changes.
   */
  "update:step": [step: number];
};

const props = defineProps<StepsRootProps & { class?: HTMLAttributes["class"] }>();
const emit = defineEmits<StepsRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emit);
</script>

<template>
  <Steps.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-lg text-muted-foreground',
      '[--steps-size:2rem] [--steps-icon-size:1rem] [--steps-thickness:2px] [--steps-gutter:0.75rem]',
      'data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:gap-4',
      'data-[orientation=vertical]:min-h-80 data-[orientation=vertical]:flex-row data-[orientation=vertical]:gap-12',
      props.class,
    )"
    data-slot="steps"
  >
    <slot />
  </Steps.Root>
</template>
