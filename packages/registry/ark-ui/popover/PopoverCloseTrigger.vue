<script setup lang="ts">
import { Popover, type PopoverCloseTriggerProps } from "@ark-ui/vue/popover";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PopoverCloseTriggerProps & { class?: HTMLAttributes["class"] }>();

const closeTriggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Popover.CloseTrigger
    v-bind="closeTriggerProps"
    :class="cn(
      'absolute top-1 right-1 inline-flex size-6 items-center justify-center border-none bg-transparent',
      'text-foreground',
      '[&_svg]:size-5 [&_svg]:shrink-0',
      'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring',
      props.class,
    )"
    data-slot="popover-close-trigger"
  >
    <slot />
  </Popover.CloseTrigger>
</template>
