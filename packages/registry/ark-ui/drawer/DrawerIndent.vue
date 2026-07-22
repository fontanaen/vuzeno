<script setup lang="ts">
import { Drawer } from "@ark-ui/vue/drawer";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Drawer.Indent :class="cn(props.class)">
    <slot />
  </Drawer.Indent>
</template>
