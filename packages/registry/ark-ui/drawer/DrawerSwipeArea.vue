<script setup lang="ts">
import { Drawer } from "@ark-ui/vue/drawer";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Drawer.SwipeArea
    :class="cn(props.class)"
    data-slot="drawer-swipe-area"
  >
    <slot />
  </Drawer.SwipeArea>
</template>
