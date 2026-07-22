<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { cn } from "cnfast";
import { PanelLeftIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { resolveSidebarContext } from "./context";

const props = defineProps<{
  target?: string;
  class?: HTMLAttributes["class"];
}>();

const sidebar = resolveSidebarContext(() => props.target);

function onClick() {
  sidebar.value?.toggleSidebar();
}
</script>

<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    size="icon-xs"
    :class="cn('size-7', props.class)"
    @click="onClick"
  >
    <PanelLeftIcon class="size-4" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
