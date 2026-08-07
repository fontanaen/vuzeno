<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { SignaturePad, type SignaturePadRootEmits, type SignaturePadRootProps } from "@ark-ui/vue/signature-pad";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SignaturePadRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<SignaturePadRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SignaturePad.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-80 flex-col gap-1.5 text-foreground [--height:10rem]',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="signature-pad"
  >
    <slot />
  </SignaturePad.Root>
</template>
