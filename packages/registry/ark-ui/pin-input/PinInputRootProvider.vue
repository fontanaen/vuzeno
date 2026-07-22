<script setup lang="ts">
import { PinInput, type PinInputRootProviderProps } from "@ark-ui/vue/pin-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PinInputRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <PinInput.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex flex-col gap-1.5 text-foreground',
      props.class,
    )"
    data-slot="pin-input-root-provider"
  >
    <slot />
  </PinInput.RootProvider>
</template>
