<script setup lang="ts">
import { HoverCard, type HoverCardArrowTipProps } from "@ark-ui/vue/hover-card";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<HoverCardArrowTipProps & { class?: HTMLAttributes["class"] }>();

const arrowTipProps = reactiveOmit(props, "class");
</script>

<template>
  <HoverCard.ArrowTip
    v-bind="arrowTipProps"
    :class="cn('border-t border-l border-border', props.class)"
    data-slot="hover-card-arrow-tip"
  >
    <slot />
  </HoverCard.ArrowTip>
</template>
