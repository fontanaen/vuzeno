<script setup lang="ts">
import { NumberInput, type NumberInputRootProviderProps } from "@ark-ui/vue/number-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<NumberInputRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <NumberInput.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex w-full max-w-48 flex-col gap-1.5 text-foreground [--scrubber-width:2rem] [--stepper-width:1.5rem]',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="number-input-root-provider"
  >
    <slot />
  </NumberInput.RootProvider>
</template>
