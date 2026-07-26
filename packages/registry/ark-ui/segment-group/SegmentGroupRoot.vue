<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { SegmentGroup, type SegmentGroupRootEmits, type SegmentGroupRootProps } from "@ark-ui/vue/segment-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = withDefaults(defineProps<SegmentGroupRootProps & { class?: HTMLAttributes["class"] }>(), {
  orientation: "horizontal",
});
const emits = defineEmits<SegmentGroupRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SegmentGroup.Root
    v-bind="forwarded"
    :class="cn(
      'relative isolate inline-flex items-center',
      'rounded-lg bg-muted dark:bg-muted p-1 text-muted',
      'shadow-[inset_0_0_0_1px_var(--border)]',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="segment-group"
  >
    <slot />
  </SegmentGroup.Root>
</template>
