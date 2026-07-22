<script setup lang="ts">
import { Steps, type StepsRootProviderProps } from "@ark-ui/vue/steps";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<StepsRootProviderProps & { class?: HTMLAttributes["class"] }>();

const providerProps = reactiveOmit(props, "class");
</script>

<template>
  <Steps.RootProvider
    v-bind="providerProps"
    :class="cn(
      'flex w-full max-w-lg text-muted-foreground',
      '[--steps-size:2.5rem] [--steps-icon-size:1rem] [--steps-thickness:2px] [--steps-gutter:0.75rem]',
      'data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:gap-4',
      'data-[orientation=vertical]:min-h-80 data-[orientation=vertical]:flex-row data-[orientation=vertical]:gap-12',
      props.class,
    )"
    data-slot="steps-root-provider"
  >
    <slot />
  </Steps.RootProvider>
</template>
