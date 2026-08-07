<script setup lang="ts">
import { PasswordInput, type PasswordInputRootProviderProps } from "@ark-ui/vue/password-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PasswordInputRootProviderProps & { class?: HTMLAttributes["class"] }>();

const providerProps = reactiveOmit(props, "class");
</script>

<template>
  <PasswordInput.RootProvider
    v-bind="providerProps"
    :class="cn(
      'flex w-full max-w-80 flex-col gap-1.5 text-foreground',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="password-input-root-provider"
  >
    <slot />
  </PasswordInput.RootProvider>
</template>
