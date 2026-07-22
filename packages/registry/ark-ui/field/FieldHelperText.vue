<script setup lang="ts">
import { Field, type FieldHelperTextProps } from "@ark-ui/vue/field";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FieldHelperTextProps & { class?: HTMLAttributes["class"] }>();

const helperTextProps = reactiveOmit(props, "class");
</script>

<template>
  <Field.HelperText
    v-bind="helperTextProps"
    :class="cn('text-sm leading-5 text-muted-foreground', props.class)"
    data-slot="field-helper-text"
  >
    <slot />
  </Field.HelperText>
</template>
