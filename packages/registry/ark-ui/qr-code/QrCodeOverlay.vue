<script setup lang="ts">
import { QrCode } from "@ark-ui/vue/qr-code";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <QrCode.Overlay
    :class="cn(
      'flex h-[var(--qr-code-overlay-size)] w-[var(--qr-code-overlay-size)] items-center justify-center rounded bg-popover p-1',
      '[&_img]:size-full [&_img]:object-contain [&_svg]:size-full',
      props.class,
    )"
    data-slot="qr-code-overlay"
  >
    <slot />
  </QrCode.Overlay>
</template>
