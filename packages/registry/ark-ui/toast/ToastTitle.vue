<script setup lang="ts">
import { Toast } from "@ark-ui/vue/toast";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Toast.Title
    :class="cn(
      'm-0 flex items-center gap-2 text-sm font-medium leading-5',
      props.class,
    )"
    data-slot="toast-title"
  >
    <slot />
  </Toast.Title>
</template>
