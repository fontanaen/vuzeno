<script setup lang="ts">
import { Field, type FieldRootProviderProps } from "@ark-ui/vue/field";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FieldRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Field.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex w-full max-w-sm flex-col items-start gap-1 text-foreground',
      'data-disabled:opacity-50 data-disabled:grayscale',
      'data-inline:w-auto',
      props.class,
    )"
    data-slot="field-root-provider"
  >
    <slot />
  </Field.RootProvider>
</template>
