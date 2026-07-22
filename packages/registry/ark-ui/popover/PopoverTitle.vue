<script setup lang="ts">
import { Popover, type PopoverTitleProps } from "@ark-ui/vue/popover";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PopoverTitleProps & { class?: HTMLAttributes["class"] }>();

const titleProps = reactiveOmit(props, "class");
</script>

<template>
  <Popover.Title
    v-bind="titleProps"
    :class="cn(
      'm-0 text-[15px] font-semibold leading-[19px] text-foreground',
      props.class,
    )"
    data-slot="popover-title"
  >
    <slot />
  </Popover.Title>
</template>
