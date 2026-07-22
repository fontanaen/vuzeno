<script setup lang="ts">
import { Progress, type ProgressRootProviderProps } from "@ark-ui/vue/progress";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ProgressRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Progress.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'grid w-full max-w-64 grid-cols-2 gap-x-1 gap-y-2 text-foreground',
      props.class,
    )"
    data-slot="progress-linear-root-provider"
  >
    <slot />
  </Progress.RootProvider>
</template>
