<script setup lang="ts">
import { TagsInput } from "@ark-ui/vue/tags-input";
import { cn } from "cnfast";
import { XIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <TagsInput.ItemDeleteTrigger
    :class="cn(
      'flex items-center justify-center rounded border-0 bg-transparent p-0.5 text-inherit',
      '[&_svg]:size-3.5',
      props.class,
    )"
    data-slot="tags-input-item-delete-trigger"
  >
    <slot>
      <XIcon />
    </slot>
  </TagsInput.ItemDeleteTrigger>
</template>
