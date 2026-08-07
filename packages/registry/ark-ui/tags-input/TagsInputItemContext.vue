<script setup lang="ts">
import { TagsInput } from "@ark-ui/vue/tags-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <TagsInput.ItemContext
    :class="cn(props.class)"
    data-slot="tags-input-item-context"
  >
    <slot />
  </TagsInput.ItemContext>
</template>
