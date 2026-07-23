<script setup lang="ts">
import { SignaturePad } from "@ark-ui/vue/signature-pad";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <SignaturePad.HiddenInput
    
    :class="cn(props.class)"
    data-slot="signature-pad-hidden-input"
  >
    <slot />
  </SignaturePad.HiddenInput>
</template>
