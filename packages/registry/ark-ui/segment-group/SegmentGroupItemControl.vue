<script setup lang="ts">
import { SegmentGroup, type SegmentGroupItemControlProps } from "@ark-ui/vue/segment-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SegmentGroupItemControlProps & { class?: HTMLAttributes["class"] }>();

const itemControlProps = reactiveOmit(props, "class");
</script>

<template>
  <SegmentGroup.ItemControl
    v-bind="itemControlProps"
    :class="cn('hidden', props.class)"
    data-slot="segment-group-item-control"
  >
    <slot />
  </SegmentGroup.ItemControl>
</template>
