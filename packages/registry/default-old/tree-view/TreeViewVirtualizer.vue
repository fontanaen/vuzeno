<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import { TreeVirtualizer, type TreeVirtualizerProps, useForwardProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  TreeVirtualizerProps & {
    class?: HTMLAttributes["class"];
  }
>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <TreeVirtualizer
    v-slot="slotProps"
    v-bind="forwarded"
    data-slot="tree-view-virtualizer"
    :class="cn(props.class)"
  >
    <slot v-bind="slotProps" />
  </TreeVirtualizer>
</template>
