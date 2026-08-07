<script setup lang="ts">
import { Drawer } from "@ark-ui/vue/drawer";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Drawer.Stack
    :class="cn(props.class)"
    data-slot="drawer-stack"
  >
    <slot />
  </Drawer.Stack>
</template>
