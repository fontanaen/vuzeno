<script setup lang="ts">
import { QrCode, type QrCodeRootProviderProps } from "@ark-ui/vue/qr-code";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<QrCodeRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <QrCode.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'relative flex w-fit flex-col text-foreground',
      '[--qr-code-size:100px] [--qr-code-overlay-size:calc(var(--qr-code-size)/3)]',
      props.class,
    )"
    data-slot="qr-code-root-provider"
  >
    <slot />
  </QrCode.RootProvider>
</template>
