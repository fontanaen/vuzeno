<script setup lang="ts">
import { Menu, type MenuArrowTipProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MenuArrowTipProps & { class?: HTMLAttributes["class"] }>();

const arrowTipProps = reactiveOmit(props, "class");
</script>

<template>
  <Menu.ArrowTip
    v-bind="arrowTipProps"
    :class="cn('border-t border-l border-border', props.class)"
    data-slot="menu-arrow-tip"
  >
    <slot />
  </Menu.ArrowTip>
</template>
