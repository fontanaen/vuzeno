<script setup lang="ts">
import { SignaturePad, type SignaturePadRootProviderProps } from "@ark-ui/vue/signature-pad";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SignaturePadRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <SignaturePad.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex w-80 flex-col gap-1.5 text-foreground [--height:10rem]',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="signature-pad-root-provider"
  >
    <slot />
  </SignaturePad.RootProvider>
</template>
