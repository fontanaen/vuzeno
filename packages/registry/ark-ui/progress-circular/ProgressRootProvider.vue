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
      'flex flex-col items-start gap-2 text-foreground',
      props.class,
    )"
    data-slot="progress-root-provider"
  >
    <slot />
  </Progress.RootProvider>
</template>
