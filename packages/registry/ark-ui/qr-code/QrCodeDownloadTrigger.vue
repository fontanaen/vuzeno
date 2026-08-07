<script setup lang="ts">
import { QrCode, type QrCodeDownloadTriggerProps } from "@ark-ui/vue/qr-code";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<QrCodeDownloadTriggerProps & { class?: HTMLAttributes["class"] }>();

const downloadTriggerProps = reactiveOmit(props, "class");
</script>

<template>
  <QrCode.DownloadTrigger
    v-bind="downloadTriggerProps"
    :class="cn(props.class)"
    data-slot="qr-code-download-trigger"
  >
    <slot />
  </QrCode.DownloadTrigger>
</template>
