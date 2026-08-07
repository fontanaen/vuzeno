<script setup lang="ts">
import { SignaturePad } from "@ark-ui/vue/signature-pad";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <SignaturePad.Segment
    :class="cn(
      'size-full min-h-[var(--height)] touch-none',
      'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring',
      '[&_path]:fill-foreground',
      props.class,
    )"
    data-slot="signature-pad-segment"
  >
    <slot />
  </SignaturePad.Segment>
</template>
