<script setup lang="ts">
import { BoldIcon, ItalicIcon, StrikethroughIcon, UnderlineIcon } from "@lucide/vue";
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
import type { Component } from "vue";
import { ref } from "vue";

type Tool = {
  id: string;
  label: string;
  shortcut: string;
  icon: Component;
};

const tools: Tool[] = [
  { id: "bold", label: "Bold", shortcut: "⌘+B", icon: BoldIcon },
  { id: "italic", label: "Italic", shortcut: "⌘+I", icon: ItalicIcon },
  { id: "underline", label: "Underline", shortcut: "⌘+U", icon: UnderlineIcon },
  { id: "strikethrough", label: "Strikethrough", shortcut: "⌘+⇧+X", icon: StrikethroughIcon },
];

const activeTool = ref<Tool | null>(null);
</script>

<template>
  <Tooltip.Root @trigger-value-change="(event) => (activeTool = tools.find((tool) => tool.id === event.value) ?? null)">
    <div class="flex items-center gap-2 rounded-lg border border-border bg-popover p-2">
      <Tooltip.Trigger
        v-for="tool in tools"
        :key="tool.id"
        :value="tool.id"
        class="size-4 border-none px-0 py-0"
        as-child
      >
        <component :is="tool.icon" class="size-4" />
      </Tooltip.Trigger>
    </div>

    <Tooltip.Content>
      <template v-if="activeTool">
        {{ activeTool.label }}
        <span class="text-[0.6875rem] text-muted-foreground">{{ activeTool.shortcut }}</span>
      </template>
    </Tooltip.Content>
  </Tooltip.Root>
</template>
