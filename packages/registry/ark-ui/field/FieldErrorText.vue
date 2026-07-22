<script setup lang="ts">
import { Field, type FieldErrorTextProps } from "@ark-ui/vue/field";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FieldErrorTextProps & { class?: HTMLAttributes["class"] }>();

const errorTextProps = reactiveOmit(props, "class");
</script>

<template>
  <Field.ErrorText
    v-bind="errorTextProps"
    :class="cn('text-sm leading-5 text-destructive', props.class)"
    data-slot="field-error-text"
  >
    <slot />
  </Field.ErrorText>
</template>
