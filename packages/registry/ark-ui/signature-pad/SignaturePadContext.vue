<script setup lang="ts">
import { SignaturePad } from "@ark-ui/vue/signature-pad";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <SignaturePad.Context
    :class="cn(props.class)"
    data-slot="signature-pad-context"
    v-slot="slotProps"
  >
    <slot v-bind="slotProps" />
  </SignaturePad.Context>
</template>
