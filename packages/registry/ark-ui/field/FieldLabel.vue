<script setup lang="ts">
import { Field, type FieldLabelProps } from "@ark-ui/vue/field";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FieldLabelProps & { class?: HTMLAttributes["class"] }>();

const labelProps = reactiveOmit(props, "class");
</script>

<template>
  <Field.Label
    v-bind="labelProps"
    :class="cn('text-sm font-medium leading-5 text-foreground', props.class)"
    data-slot="field-label"
  >
    <slot />
  </Field.Label>
</template>
