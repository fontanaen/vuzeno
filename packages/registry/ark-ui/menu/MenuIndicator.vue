<script setup lang="ts">
import { Menu, type MenuIndicatorProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MenuIndicatorProps & { class?: HTMLAttributes["class"] }>();

const indicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Menu.Indicator
    v-bind="indicatorProps"
    :class="cn('inline-flex items-center justify-center [&_svg]:size-4', props.class)"
    data-slot="menu-indicator"
  >
    <slot />
  </Menu.Indicator>
</template>
