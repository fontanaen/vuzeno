<script setup lang="ts">
import { NumberInput } from "@ark-ui/vue/number-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <NumberInput.Scrubber
    :class="cn(
      'z-1 inline-flex cursor-ew-resize items-center justify-center text-muted-foreground select-none',
      '[&_svg]:size-3',
      'group-data-[layout=inset]/control:absolute group-data-[layout=inset]/control:top-px group-data-[layout=inset]/control:bottom-px group-data-[layout=inset]/control:left-px group-data-[layout=inset]/control:w-(--scrubber-width)',
      'group-data-[layout=segmented]/control:h-full group-data-[layout=segmented]/control:w-(--stepper-width) group-data-[layout=segmented]/control:shrink-0',
      props.class,
    )"
    data-slot="number-input-scrubber"
  >
    <slot />
  </NumberInput.Scrubber>
</template>
