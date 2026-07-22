<script setup lang="ts">
import { Toast, type ToastActionTriggerProps } from "@ark-ui/vue/toast";

const props = defineProps<ToastActionTriggerProps>();
</script>

<template>
  <Toast.ActionTrigger v-bind="props" data-slot="toast-action-trigger">
    <slot />
  </Toast.ActionTrigger>
</template>
