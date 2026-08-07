<script setup lang="ts">
import { Popover, type PopoverArrowProps } from "@ark-ui/vue/popover";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PopoverArrowProps & { class?: HTMLAttributes["class"] }>();

const arrowProps = reactiveOmit(props, "class");
</script>

<template>
  <Popover.Arrow
    v-bind="arrowProps"
    :class="cn(
      '[--arrow-background:var(--popover)] [--arrow-shadow-color:var(--border)]',
      props.class,
    )"
    data-slot="popover-arrow"
  >
    <slot />
  </Popover.Arrow>
</template>
