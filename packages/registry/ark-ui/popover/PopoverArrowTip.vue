<script setup lang="ts">
import { Popover, type PopoverArrowTipProps } from "@ark-ui/vue/popover";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PopoverArrowTipProps & { class?: HTMLAttributes["class"] }>();

const arrowTipProps = reactiveOmit(props, "class");
</script>

<template>
  <Popover.ArrowTip
    v-bind="arrowTipProps"
    :class="cn('border-t border-l border-border', props.class)"
    data-slot="popover-arrow-tip"
  >
    <slot />
  </Popover.ArrowTip>
</template>
