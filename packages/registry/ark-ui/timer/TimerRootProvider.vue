<script setup lang="ts">
import { Timer, type TimerRootProviderProps } from "@ark-ui/vue/timer";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TimerRootProviderProps & { class?: HTMLAttributes["class"] }>();

const providerProps = reactiveOmit(props, "class");
</script>

<template>
  <Timer.RootProvider
    v-bind="providerProps"
    :class="cn(props.class)"
    data-slot="timer-root-provider"
  >
    <slot />
  </Timer.RootProvider>
</template>
