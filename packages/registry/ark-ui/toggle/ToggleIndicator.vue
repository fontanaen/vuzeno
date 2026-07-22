<script setup lang="ts">
import { Toggle, type ToggleIndicatorProps } from "@ark-ui/vue/toggle";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ToggleIndicatorProps & { class?: HTMLAttributes["class"] }>();

const indicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Toggle.Indicator
    v-bind="indicatorProps"
    :class="cn('inline-flex items-center justify-center', props.class)"
    data-slot="toggle-indicator"
  >
    <slot />
    
    <template #fallback>
      <slot name="fallback" />
    </template>
  </Toggle.Indicator>
</template>
