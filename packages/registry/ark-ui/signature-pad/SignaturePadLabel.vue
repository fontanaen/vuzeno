<script setup lang="ts">
import { SignaturePad } from "@ark-ui/vue/signature-pad";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <SignaturePad.Label
    :class="cn('text-sm font-medium text-foreground', props.class)"
    data-slot="signature-pad-label"
  >
    <slot />
  </SignaturePad.Label>
</template>
