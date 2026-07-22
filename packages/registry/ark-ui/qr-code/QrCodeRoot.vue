<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { QrCode, type QrCodeRootEmits, type QrCodeRootProps } from "@ark-ui/vue/qr-code";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<QrCodeRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<QrCodeRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <QrCode.Root
    v-bind="forwarded"
    :class="cn(
      'relative flex w-fit flex-col text-foreground',
      '[--qr-code-size:100px] [--qr-code-overlay-size:calc(var(--qr-code-size)/3)]',
      props.class,
    )"
    data-slot="qr-code"
  >
    <slot />
  </QrCode.Root>
</template>
