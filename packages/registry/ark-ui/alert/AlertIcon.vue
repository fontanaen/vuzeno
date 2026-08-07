<script setup lang="ts">
import { BellIcon, CircleAlertIcon, CircleCheckIcon, InfoIcon, ShieldAlertIcon } from "@lucide/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { injectAlertContext } from "./context";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { variant } = injectAlertContext();

const iconMap = {
  default: BellIcon,
  info: InfoIcon,
  success: CircleCheckIcon,
  warning: ShieldAlertIcon,
  destructive: CircleAlertIcon,
} as const;

const icon = computed(() => iconMap[variant.value]);
</script>

<template>
  <slot>
    <component
      :is="icon"
      data-slot="alert-icon"
      :class="cn('size-4', props.class)"
    />
  </slot>
</template>
