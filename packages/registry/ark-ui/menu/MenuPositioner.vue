<script setup lang="ts">
import { Menu } from "@ark-ui/vue/menu";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Menu.Positioner
    
    :class="cn(props.class)"
    data-slot="menu-positioner"
  >
    <slot />
  </Menu.Positioner>
</template>
