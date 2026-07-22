<script setup lang="ts">
import { Menu, type MenuTriggerProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MenuTriggerProps & { class?: HTMLAttributes["class"] }>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Menu.Trigger
    v-bind="triggerProps"
    :class="cn(props.class)"
    data-slot="menu-trigger"
  >
    <slot />
  </Menu.Trigger>
</template>
