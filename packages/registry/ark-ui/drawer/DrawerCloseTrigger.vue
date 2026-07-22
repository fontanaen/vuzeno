<script setup lang="ts">
import { Drawer } from "@ark-ui/vue/drawer";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Drawer.CloseTrigger
    :class="cn(
      'absolute top-12 right-4 flex size-7 cursor-pointer items-center justify-center rounded border-none bg-transparent p-0 text-muted-foreground',
      '[&_svg]:size-4',
      '[&:hover:not(:disabled)]:bg-muted',
      'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring',
      props.class,
    )"
  >
    <slot />
  </Drawer.CloseTrigger>
</template>
