<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Progress, type ProgressRootEmits, type ProgressRootProps } from "@ark-ui/vue/progress";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ProgressRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<ProgressRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Progress.Root
    v-bind="forwarded"
    :class="cn(
      'grid w-full max-w-64 grid-cols-2 gap-x-1 gap-y-2 text-foreground',
      props.class,
    )"
    data-slot="progress-linear"
  >
    <slot />
  </Progress.Root>
</template>
