<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  orientation?: "horizontal" | "vertical";
}>();
</script>

<template>
  <ark.div
    :data-orientation="props.orientation"
    :class="cn(
      'flex items-center justify-center',
      '*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-offset-red-500 *:data-[slot=avatar]:ring-background',
      'data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col',
      props.class,
    )"
    data-slot="avatar-group"
  >
    <slot />
  </ark.div>
</template>
