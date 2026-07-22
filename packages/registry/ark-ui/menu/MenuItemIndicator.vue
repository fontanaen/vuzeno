<script setup lang="ts">
import { Menu, type MenuItemIndicatorProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MenuItemIndicatorProps & { class?: HTMLAttributes["class"] }>();

const itemIndicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Menu.ItemIndicator
    v-bind="itemIndicatorProps"
    :class="cn(
      'flex size-4 shrink-0 items-center justify-center text-primary [&_svg]:size-3.5',
      props.class,
    )"
    data-slot="menu-item-indicator"
  >
    <slot />
  </Menu.ItemIndicator>
</template>
