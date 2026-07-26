<script setup lang="ts">
import { SegmentGroup, type SegmentGroupItemProps } from "@ark-ui/vue/segment-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SegmentGroupItemProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <SegmentGroup.Item
    v-bind="itemProps"
    :class="cn(
      'relative flex h-8 items-center justify-center gap-2',
      'w-full rounded-md px-3.5 text-sm font-medium text-primary select-none',
      'data-[orientation=vertical]:justify-start',
      'data-disabled:cursor-not-allowed data-disabled:opacity-50',
      'data-[state=checked]:text-foreground dark:data-[state=checked]:text-primary-foreground',
      'data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-primary',
      props.class,
    )"
    data-slot="segment-group-item"
  >
    <slot />
    <SegmentGroup.ItemControl style="display: none;" />
    <SegmentGroup.ItemHiddenInput />
  </SegmentGroup.Item>
</template>
