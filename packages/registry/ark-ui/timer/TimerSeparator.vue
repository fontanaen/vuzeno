<script setup lang="ts">
import { Timer, type TimerSeparatorProps } from "@ark-ui/vue/timer";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TimerSeparatorProps & { class?: HTMLAttributes["class"] }>();

const separatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Timer.Separator
    v-bind="separatorProps"
    :class="cn('text-2xl font-semibold text-muted-foreground', props.class)"
    data-slot="timer-separator"
  >
    <slot />
  </Timer.Separator>
</template>
