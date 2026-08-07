<script setup lang="ts">
import { Menu, type MenuItemTextProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MenuItemTextProps & { class?: HTMLAttributes["class"] }>();

const itemTextProps = reactiveOmit(props, "class");
</script>

<template>
  <Menu.ItemText
    v-bind="itemTextProps"
    :class="cn('min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap', props.class)"
    data-slot="menu-item-text"
  >
    <slot />
  </Menu.ItemText>
</template>
