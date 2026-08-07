<script setup lang="ts">
import { SignaturePad } from "@ark-ui/vue/signature-pad";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <SignaturePad.ClearTrigger
    :class="cn(
      'absolute top-3 right-3 inline-flex size-8 cursor-pointer items-center justify-center rounded-md border border-transparent bg-transparent font-inherit text-muted-foreground transition-[background,color] duration-150',
      '[&_svg]:size-4',
      'hover:bg-muted hover:text-foreground hover:border-input',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    )"
    data-slot="signature-pad-clear-trigger"
  >
    <slot />
  </SignaturePad.ClearTrigger>
</template>
