<script setup lang="ts">
import { Drawer } from "@ark-ui/vue/drawer";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Drawer.Title
    :class="cn(
      'm-0 mb-2 text-lg leading-7 font-medium text-foreground',
      props.class,
    )"
  >
    <slot />
  </Drawer.Title>
</template>
