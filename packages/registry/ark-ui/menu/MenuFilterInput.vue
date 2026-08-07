<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { useMenuFilterContext } from "./menu-filter-context";

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    disabled?: boolean;
    class?: HTMLAttributes["class"];
  }>(),
  {
    placeholder: "Filter…",
  },
);

const { searchTerm, setSearchTerm } = useMenuFilterContext();

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    return;
  }

  event.stopPropagation();
}

function handleInput(event: Event) {
  setSearchTerm((event.target as HTMLInputElement).value);
}
</script>

<template>
  <input
    data-slot="menu-filter-input"
    type="text"
    :value="searchTerm"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="
      cn(
        'h-8 w-full bg-transparent px-3 text-sm outline-none',
        'placeholder:text-muted-foreground',
        'disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
    @click.stop
    @pointerdown.stop
    @keydown="handleKeydown"
    @input="handleInput"
  >
</template>
