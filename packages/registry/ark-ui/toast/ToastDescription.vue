<script setup lang="ts">
import { Toast } from "@ark-ui/vue/toast";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Toast.Description
    :class="cn(
      'm-0 inline text-sm leading-5 text-muted-foreground',
      props.class,
    )"
    data-slot="toast-description"
  >
    <slot />
  </Toast.Description>
</template>
