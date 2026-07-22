<script setup lang="ts">
import { Menu, type MenuArrowProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MenuArrowProps & { class?: HTMLAttributes["class"] }>();

const arrowProps = reactiveOmit(props, "class");
</script>

<template>
  <Menu.Arrow
    v-bind="arrowProps"
    :class="cn(
      '[--arrow-background:var(--popover)] [--arrow-shadow-color:var(--border)] -z-10',
      props.class,
    )"
    data-slot="menu-arrow"
  >
    <slot />
  </Menu.Arrow>
</template>
