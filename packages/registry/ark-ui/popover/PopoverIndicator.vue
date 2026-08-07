<script setup lang="ts">
import { Popover, type PopoverIndicatorProps } from "@ark-ui/vue/popover";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PopoverIndicatorProps & { class?: HTMLAttributes["class"] }>();

const indicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Popover.Indicator
    v-bind="indicatorProps"
    :class="cn(
      'ms-1 inline-flex transition-[rotate] duration-200 ease-in-out',
      '[&_svg]:size-4',
      props.class,
    )"
    data-slot="popover-indicator"
  >
    <slot />
  </Popover.Indicator>
</template>
