<script setup lang="ts">
import { QrCode } from "@ark-ui/vue/qr-code";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <QrCode.Pattern
    :class="cn('fill-inherit', props.class)"
    data-slot="qr-code-pattern"
  >
    <slot />
  </QrCode.Pattern>
</template>
