<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type SidebarMenuButtonVariants, sidebarMenuButtonVariants } from "./variants";

const props = withDefaults(
  defineProps<
    PolymorphicProps & {
      variant?: SidebarMenuButtonVariants["variant"];
      size?: SidebarMenuButtonVariants["size"];
      isActive?: boolean;
      class?: HTMLAttributes["class"];
    }
  >(),
  {
    variant: "default",
    size: "default",
  },
);
</script>

<template>
  <ark.button
    :as-child="asChild"
    data-slot="sidebar-menu-button"
    data-sidebar="menu-button"
    :data-size="size"
    :data-active="isActive"
    :class="cn(sidebarMenuButtonVariants({ variant, size }), props.class)"
  >
    <slot />
  </ark.button>
</template>
