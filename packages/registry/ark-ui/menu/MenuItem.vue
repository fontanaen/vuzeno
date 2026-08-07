<script setup lang="ts">
import { Menu, type MenuItemProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type MenuItemVariantsProps, menuItemVariants } from "./variants";

const props = defineProps<MenuItemProps & MenuItemVariantsProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class", "variant");
</script>

<template>
  <Menu.Item
    v-bind="itemProps"
    :class="cn(
      menuItemVariants({ variant: props.variant }),
      'data-disabled:text-muted-foreground data-disabled:opacity-50 data-disabled:[&_svg]:text-muted-foreground',
      props.class,
    )"
    data-slot="menu-item"
  >
    <slot />
  </Menu.Item>
</template>
