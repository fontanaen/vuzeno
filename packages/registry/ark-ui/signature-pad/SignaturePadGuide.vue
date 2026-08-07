<script setup lang="ts">
import { SignaturePad } from "@ark-ui/vue/signature-pad";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <SignaturePad.Guide
    :class="cn(
      'pointer-events-none absolute inset-x-6 bottom-6 border-b border-dashed border-border',
      props.class,
    )"
    data-slot="signature-pad-guide"
  >
    <slot />
  </SignaturePad.Guide>
</template>
