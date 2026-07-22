<script setup lang="ts">
import { Menu } from "@ark-ui/vue/menu";
import { Collapsible } from "@vuzeno/registry/ui/collapsible";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { injectSidebarMenuSubContext } from "./menusub-context";
import SidebarMenuButtonChild from "./SidebarMenuButtonChild.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const menuSub = injectSidebarMenuSubContext();
const isInline = computed(() => menuSub.mode.value === "inline");
</script>

<template>
  <Collapsible.Trigger
    v-if="isInline"
    as-child
  >
    <SidebarMenuButtonChild
      :class="cn('group/trigger w-full', props.class)"
    >
      <slot />
    </SidebarMenuButtonChild>
  </Collapsible.Trigger>

  <Menu.Trigger
    v-else
    as-child
  >
    <SidebarMenuButtonChild
      :class="cn('w-full', props.class)"
    >
      <slot />
    </SidebarMenuButtonChild>
  </Menu.Trigger>
</template>
