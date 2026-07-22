<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.div
    data-slot="input-group"
    role="group"
    :class="cn(
      'group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border outline-none',
      'h-10 min-w-0 has-[>textarea]:h-auto',

      'has-[textarea]:h-auto',
      'has-[>[data-align=inline-start]]:[&>input]:pl-2',
      'has-[>[data-align=inline-end]]:[&>input]:pr-2',
      'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
      'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

      'transition-[color,box-shadow]',
      'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
    
      props.class,
    )"
  >
    <slot />
  </ark.div>
</template>
