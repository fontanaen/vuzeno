<script setup lang="ts">
import { TagsInput } from "@ark-ui/vue/tags-input";
import { cn } from "cnfast";
import { XIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <TagsInput.ClearTrigger
    :class="cn(
      'absolute top-1/2 right-2 flex -translate-y-1/2 items-center justify-center',
      'rounded border-0 bg-transparent p-1 text-muted-foreground',
      'transition-[background-color,color] duration-150 ease-out',
      '[&:hover:not(:disabled):not([data-disabled])]:bg-muted',
      '[&:hover:not(:disabled):not([data-disabled])]:text-foreground',
      '[&_svg]:size-4',
      props.class,
    )"
    data-slot="tags-input-clear-trigger"
  >
    <slot>
      <XIcon />
    </slot>
  </TagsInput.ClearTrigger>
</template>
