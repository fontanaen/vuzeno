<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Timer, type TimerRootEmits, type TimerRootProps } from "@ark-ui/vue/timer";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TimerRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<TimerRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Timer.Root
    v-bind="forwarded"
    :class="cn(
      'flex flex-col items-start gap-4 text-muted-foreground',
      props.class,
    )"
    data-slot="timer"
  >
    <slot />
  </Timer.Root>
</template>
