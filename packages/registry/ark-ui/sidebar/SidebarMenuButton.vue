<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
import type { Component } from "vue";
import { computed } from "vue";
import { injectSidebarContext, type SidebarInstanceContext } from "./context";
import SidebarMenuButtonChild from "./SidebarMenuButtonChild.vue";
import type { SidebarMenuButtonVariants } from "./variants";

const props = withDefaults(
  defineProps<{
    tooltip?: string | Component;
    variant?: SidebarMenuButtonVariants["variant"];
    size?: SidebarMenuButtonVariants["size"];
    isActive?: boolean;
    asChild?: boolean;
    class?: string;
  }>(),
  {
    variant: "default",
    size: "default",
  },
);

const sidebar = injectSidebarContext(undefined as unknown as SidebarInstanceContext);
const delegatedProps = reactiveOmit(props, "tooltip");

const tooltipDisabled = computed(() => {
  if (!sidebar) {
    return true;
  }

  return sidebar.isMobile.value || sidebar.state.value !== "collapsed" || sidebar.collapsible !== "icon";
});

const tooltipPlacement = computed(() => (sidebar?.side === "right" ? "left" : "right"));
</script>

<template>
  <SidebarMenuButtonChild
    v-if="!tooltip"
    v-bind="delegatedProps"
  >
    <slot />
  </SidebarMenuButtonChild>

  <Tooltip.Root
    v-else
    :disabled="tooltipDisabled"
    :positioning="{ placement: tooltipPlacement, gutter: 8 }"
  >
    <Tooltip.Trigger as-child>
      <SidebarMenuButtonChild v-bind="delegatedProps">
        <slot />
      </SidebarMenuButtonChild>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <template v-if="typeof tooltip === 'string'">
        {{ tooltip }}
      </template>
      <component
        :is="tooltip"
        v-else
      />
    </Tooltip.Content>
  </Tooltip.Root>
</template>
