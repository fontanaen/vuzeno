<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { NumberInput, type NumberInputRootEmits, type NumberInputRootProps } from "@ark-ui/vue/number-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<NumberInputRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<NumberInputRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <NumberInput.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-48 flex-col gap-1.5 text-foreground [--scrubber-width:2rem] [--stepper-width:1.5rem]',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="number-input"
  >
    <slot />
  </NumberInput.Root>
</template>
