<script setup lang="ts">
import { type ToastType, useToastContext } from "@ark-ui/vue/toast";
import { CircleAlertIcon, CircleCheckIcon, InfoIcon, LoaderIcon, ShieldAlertIcon } from "@lucide/vue";
import { cn } from "cnfast";
import type { Component, HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();

const toastContext = useToastContext();

const iconMap: Record<ToastType, Component> = {
  success: CircleCheckIcon,
  error: CircleAlertIcon,
  loading: LoaderIcon,
  info: InfoIcon,
  warning: ShieldAlertIcon,
};
</script>

<template>
  <component 
    :is="iconMap[toastContext.type]"
    :class="cn(
      'size-4 absolute left-3 top-3.5', 
      toastContext.type === 'loading' && 'animate-spin', 
      props.class,
    )"
    data-slot="toast-indicator"
  />
</template>
