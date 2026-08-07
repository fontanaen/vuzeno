<script setup lang="ts">
import { SegmentGroup, type SegmentGroupItemTextProps } from "@ark-ui/vue/segment-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SegmentGroupItemTextProps & { class?: HTMLAttributes["class"] }>();

const itemTextProps = reactiveOmit(props, "class");
</script>

<template>
  <SegmentGroup.ItemText
    v-bind="itemTextProps"
    :class="cn('relative z-1', props.class)"
    data-slot="segment-group-item-text"
  >
    <slot />
  </SegmentGroup.ItemText>
</template>
