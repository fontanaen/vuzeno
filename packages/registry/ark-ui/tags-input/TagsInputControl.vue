<script setup lang="ts">
import { TagsInput } from "@ark-ui/vue/tags-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <TagsInput.Control
    :class="cn(
      'relative box-border flex min-h-9 flex-wrap items-center gap-1 border border-input rounded-md dark:bg-input/30 px-2 py-1',
      'transition-[border-color,box-shadow] duration-150 ease-out',
      'has-data-[slot=tags-input-clear-trigger]:pe-8',
      'placeholder:text-muted-foreground',
      'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
      'selection:bg-primary selection:text-primary-foreground',
      'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
      'focus-within:aria-invalid:ring-destructive/20 focus-within:dark:aria-invalid:ring-destructive/40 focus-within:aria-invalid:border-destructive',
      props.class,
    )"
    data-slot="tags-input-control"
  >
    <slot />
  </TagsInput.Control>
</template>
