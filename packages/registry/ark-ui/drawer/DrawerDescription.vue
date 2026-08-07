<script setup lang="ts">
import { Drawer } from "@ark-ui/vue/drawer";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Drawer.Description
    :class="cn(
      'm-0 mt-1 text-sm leading-normal text-muted-foreground',
      props.class,
    )"
  >
    <slot />
  </Drawer.Description>
</template>
