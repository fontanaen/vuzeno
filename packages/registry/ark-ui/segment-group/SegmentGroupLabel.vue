<script setup lang="ts">
import { SegmentGroup, type SegmentGroupLabelProps } from "@ark-ui/vue/segment-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SegmentGroupLabelProps & { class?: HTMLAttributes["class"] }>();

const labelProps = reactiveOmit(props, "class");
</script>

<template>
  <SegmentGroup.Label
    v-bind="labelProps"
    :class="cn(
      'text-sm leading-5 font-medium text-muted-foreground select-none',
      props.class,
    )"
    data-slot="segment-group-label"
  >
    <slot />
  </SegmentGroup.Label>
</template>
