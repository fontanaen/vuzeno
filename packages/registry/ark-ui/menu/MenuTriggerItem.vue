<script setup lang="ts">
import { Menu, type MenuTriggerItemProps } from "@ark-ui/vue/menu";
import { ChevronRightIcon } from "@lucide/vue";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MenuTriggerItemProps & { class?: HTMLAttributes["class"] }>();

const triggerItemProps = reactiveOmit(props, "class");
</script>

<template>
  <Menu.TriggerItem
    v-bind="triggerItemProps"
    :class="cn(
      'flex items-center justify-between gap-2 rounded-sm p-2 text-sm leading-5 outline-none select-none',
      'data-highlighted:bg-muted',
      '[&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground',
      props.class,
    )"
    data-slot="menu-trigger-item"
  >
    <div class="flex items-center gap-2">
      <slot />
    </div>
    
    <ChevronRightIcon />
  </Menu.TriggerItem>
</template>
