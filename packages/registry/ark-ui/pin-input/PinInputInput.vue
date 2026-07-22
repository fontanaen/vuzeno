<script setup lang="ts">
import { PinInput, type PinInputInputProps } from "@ark-ui/vue/pin-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes["class"] }>();

const inputProps = reactiveOmit(props, "class");
</script>

<template>
  <PinInput.Input
    v-bind="inputProps"
    :class="cn(
      'size-10 rounded-md border border-input bg-transparent text-center text-base font-medium text-foreground outline-none',
      'placeholder:text-muted-foreground',
      'focus-visible:border-ring focus-visible:shadow-[0_0_0_1px_var(--demo-coral-solid)]',
      'data-disabled:cursor-not-allowed data-disabled:opacity-50',
      'data-invalid:border-destructive data-invalid:focus-visible:border-destructive data-invalid:focus-visible:shadow-[0_0_0_1px_var(--destructive)]',
      props.class,
    )"
    data-slot="pin-input-input"
  >
    <slot />
  </PinInput.Input>
</template>
