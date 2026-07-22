<script setup lang="ts">
import { Field, type FieldRootProps } from "@ark-ui/vue/field";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FieldRootProps & { class?: HTMLAttributes["class"] }>();

const rootProps = reactiveOmit(props, "class");
</script>

<template>
  <Field.Root
    v-bind="rootProps"
    :class="cn(
      'flex w-full max-w-64 flex-col items-start gap-1 text-foreground',
      'data-disabled:opacity-50 data-disabled:grayscale',
      'data-inline:w-auto',
      props.class,
    )"
    data-slot="field"
  >
    <slot />
  </Field.Root>
</template>
