<script setup lang="ts">
import { RadioGroup, type RadioGroupRootProviderProps } from "@ark-ui/vue/radio-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<RadioGroupRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <RadioGroup.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex flex-col gap-2 text-foreground',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="radio-group-root-provider"
  >
    <slot />
  </RadioGroup.RootProvider>
</template>
