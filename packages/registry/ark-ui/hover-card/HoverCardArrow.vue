<script setup lang="ts">
import { HoverCard, type HoverCardArrowProps } from "@ark-ui/vue/hover-card";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<HoverCardArrowProps & { class?: HTMLAttributes["class"] }>();

const arrowProps = reactiveOmit(props, "class");
</script>

<template>
  <HoverCard.Arrow
    v-bind="arrowProps"
    :class="cn(
      '[--arrow-background:var(--popover)] [--arrow-shadow-color:var(--border)]',
      props.class,
    )"
    data-slot="hover-card-arrow"
  >
    <slot />
  </HoverCard.Arrow>
</template>
