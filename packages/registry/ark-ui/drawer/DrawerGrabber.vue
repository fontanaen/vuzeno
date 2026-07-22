<script setup lang="ts">
import { Drawer } from "@ark-ui/vue/drawer";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Drawer.Grabber
    :class="cn(
      'group flex w-full shrink-0 cursor-grab touch-none select-none items-center justify-center py-5',
      'active:cursor-grabbing',
      props.class,
    )"
  >
    <slot />
  </Drawer.Grabber>
</template>
