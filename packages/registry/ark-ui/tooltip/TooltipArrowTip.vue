<script setup lang="ts">
import { Tooltip, type TooltipArrowTipProps } from "@ark-ui/vue/tooltip";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TooltipArrowTipProps & { class?: HTMLAttributes["class"] }>();

const arrowTipProps = reactiveOmit(props, "class");
</script>

<template>
  <Tooltip.ArrowTip
    v-bind="arrowTipProps"
    :class="cn('border-t border-l border-border', props.class)"
    data-slot="tooltip-arrow-tip"
  >
    <slot />
  </Tooltip.ArrowTip>
</template>
