<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.span
    role="link"
    aria-disabled="true"
    aria-current="page"
    data-slot="breadcrumb-page"
    :class="cn('font-normal text-foreground', props.class)"
  >
    <slot />
  </ark.span>
</template>
