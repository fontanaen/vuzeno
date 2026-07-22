<script setup lang="ts">
import { Menu, type MenuContextTriggerProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MenuContextTriggerProps & { class?: HTMLAttributes["class"] }>();

const contextTriggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Menu.ContextTrigger
    v-bind="contextTriggerProps"
    :class="cn(
      'flex h-48 w-60 items-center justify-center rounded-md border border-dashed border-border text-sm select-none',
      props.class,
    )"
    data-slot="menu-context-trigger"
  >
    <slot />
  </Menu.ContextTrigger>
</template>
