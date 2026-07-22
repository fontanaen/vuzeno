<script setup lang="ts">
import { DateInput, type DateInputRootProviderProps } from "@ark-ui/vue/date-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DateInputRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <DateInput.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex w-full max-w-sm flex-col gap-1.5',
      props.class,
    )"
    data-slot="date-input-root-provider"
  >
    <slot />
  </DateInput.RootProvider>
</template>
