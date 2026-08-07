<script setup lang="ts">
import { TagsInput } from "@ark-ui/vue/tags-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <TagsInput.Label
    :class="cn(
      'text-sm leading-5 font-medium text-foreground select-none',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="tags-input-label"
  >
    <slot />
  </TagsInput.Label>
</template>
