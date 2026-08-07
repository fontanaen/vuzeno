<script setup lang="ts">
import { Drawer } from "@ark-ui/vue/drawer";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Drawer.GrabberIndicator
    :class="cn(
      'h-1 w-10 rounded-full bg-muted',
      'group-hover:bg-accent',
      props.class,
    )"
  >
    <slot />
  </Drawer.GrabberIndicator>
</template>
