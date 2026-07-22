<script setup lang="ts">
import { Menu, type MenuItemGroupLabelProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MenuItemGroupLabelProps & { class?: HTMLAttributes["class"] }>();

const itemGroupLabelProps = reactiveOmit(props, "class");
</script>

<template>
  <Menu.ItemGroupLabel
    :class="cn(
      'px-2 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase',
      props.class,
    )"
    data-slot="menu-item-group-label"
  >
    <slot />
  </Menu.ItemGroupLabel>
</template>
