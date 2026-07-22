<script setup lang="ts">
import { SignaturePad } from "@ark-ui/vue/signature-pad";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <SignaturePad.Control
    :class="cn(
      'relative flex min-h-(--height) min-w-0 flex-col rounded-lg border border-input bg-muted',
      'data-disabled:cursor-not-allowed',
      props.class,
    )"
    data-slot="signature-pad-control"
  >
    <slot />
  </SignaturePad.Control>
</template>
