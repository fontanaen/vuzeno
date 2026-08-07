<script setup lang="ts">
import { QrCode } from "@ark-ui/vue/qr-code";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <QrCode.Frame
    :class="cn(
      'h-[var(--qr-code-size)] w-[var(--qr-code-size)] fill-foreground',
      props.class,
    )"
    data-slot="qr-code-frame"
  >
    <slot />
  </QrCode.Frame>
</template>
