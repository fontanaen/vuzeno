<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { MoreHorizontal } from "@lucide/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.span
    role="presentation"
    aria-hidden="true"
    data-slot="breadcrumb-ellipsis"
    :class="cn('flex size-9 items-center justify-center', props.class)"
  >
    <slot>
      <MoreHorizontal class="size-4" />
    </slot>
    <span class="sr-only">More</span>
  </ark.span>
</template>
