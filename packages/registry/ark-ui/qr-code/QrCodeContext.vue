<script setup lang="ts">
import { QrCode } from "@ark-ui/vue/qr-code";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";



const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <QrCode.Context
    
    :class="cn(props.class)"
    data-slot="qr-code-context"
  >
    <slot />
  </QrCode.Context>
</template>
