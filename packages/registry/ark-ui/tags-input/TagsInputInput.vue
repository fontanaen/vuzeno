<script setup lang="ts">
import { TagsInput } from "@ark-ui/vue/tags-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <TagsInput.Input
    :class="cn(
      'box-border min-w-16 flex-1 border-0 px-1',
      'text-sm leading-5 text-foreground font-[inherit] outline-none',
      'placeholder:text-muted-foreground',
      props.class,
      'bg-transparent dark:bg-transparent border-none dark:border-none h-6',
    )"
    data-slot="tags-input-input"
  >
    <slot />
  </TagsInput.Input>
</template>
