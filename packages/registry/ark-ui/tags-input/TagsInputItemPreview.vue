<script setup lang="ts">
import { TagsInput } from "@ark-ui/vue/tags-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <TagsInput.ItemPreview
    :class="cn(
      'inline-flex items-center gap-1 rounded py-0.5 pr-1 pl-2 text-sm leading-5',
      'bg-accent text-foreground outline-none',
      'transition-[background-color] duration-150 ease-out',
      'data-highlighted:bg-accent data-highlighted:text-foreground',
      props.class,
    )"
  >
    <slot />
  </TagsInput.ItemPreview>
</template>
