<script setup lang="ts">
import { Menu, type MenuItemGroupProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MenuItemGroupProps & { class?: HTMLAttributes["class"] }>();

const itemGroupProps = reactiveOmit(props, "class");
</script>

<template>
  <Menu.ItemGroup
    v-bind="itemGroupProps"
    :class="cn('flex flex-col [&+&]:mt-2', props.class)"
    data-slot="menu-item-group"
  >
    <slot />
  </Menu.ItemGroup>
</template>
