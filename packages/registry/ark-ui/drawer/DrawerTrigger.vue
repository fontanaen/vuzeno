<script setup lang="ts">
import { Drawer, type DrawerTriggerProps } from "@ark-ui/vue/drawer";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props extends DrawerTriggerProps {
  class?: HTMLAttributes["class"];
}
const props = defineProps<Props>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Drawer.Trigger v-bind="triggerProps" data-slot="drawer-trigger" :class="cn(props.class)">
    <slot />
  </Drawer.Trigger>
</template>
