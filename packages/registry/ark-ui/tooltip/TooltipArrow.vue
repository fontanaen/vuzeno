<script setup lang="ts">
import { Tooltip, type TooltipArrowProps } from "@ark-ui/vue/tooltip";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TooltipArrowProps & { class?: HTMLAttributes["class"] }>();

const arrowProps = reactiveOmit(props, "class");
</script>

<template>
  <Tooltip.Arrow
    v-bind="arrowProps"
    :class="cn(props.class)"
    data-slot="tooltip-arrow"
  >
    <slot />
  </Tooltip.Arrow>
</template>
