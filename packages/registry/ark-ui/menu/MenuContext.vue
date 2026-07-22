<script setup lang="ts">
import { Menu } from "@ark-ui/vue/menu";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";



const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Menu.Context
    
    :class="cn(props.class)"
    data-slot="menu-context"
  >
    <slot />
  </Menu.Context>
</template>
