<script setup lang="ts">
import { Menu, type MenuSeparatorProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MenuSeparatorProps & { class?: HTMLAttributes["class"] }>();

const separatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Menu.Separator
    v-bind="separatorProps"
    :class="cn('my-1 h-px border-0 bg-border', props.class)"
    data-slot="menu-separator"
  >
    <slot />
  </Menu.Separator>
</template>
