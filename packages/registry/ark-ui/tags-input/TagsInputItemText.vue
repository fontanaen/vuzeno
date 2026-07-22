<script setup lang="ts">
import { TagsInput } from "@ark-ui/vue/tags-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <TagsInput.ItemText
    :class="cn('font-medium', props.class)"
    data-slot="tags-input-item-text"
  >
    <slot />
  </TagsInput.ItemText>
</template>
