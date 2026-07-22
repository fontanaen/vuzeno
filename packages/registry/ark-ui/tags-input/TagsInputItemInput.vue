<script setup lang="ts">
import { TagsInput } from "@ark-ui/vue/tags-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <TagsInput.ItemInput
    :class="cn(
      'box-border min-w-16 w-auto rounded border border-input px-2 py-0.5',
      'text-sm leading-5 text-foreground font-[inherit] outline-none',
      props.class,
    )"
    data-slot="tags-input-item-input"
  />
</template>
