<script setup lang="ts">
import { SegmentGroup, type SegmentGroupRootProviderProps } from "@ark-ui/vue/segment-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SegmentGroupRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <SegmentGroup.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'relative isolate inline-flex items-center',
      'rounded-lg bg-[var(--demo-neutral-subtle)] p-1 text-muted',
      'shadow-[inset_0_0_0_1px_var(--demo-border)]',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="segment-group-root-provider"
  >
    <slot />
  </SegmentGroup.RootProvider>
</template>
