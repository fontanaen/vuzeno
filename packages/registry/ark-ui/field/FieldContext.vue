<script setup lang="ts">
import { Field } from "@ark-ui/vue/field";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Field.Context
    :class="cn(props.class)"
    data-slot="field-context"
    v-slot="field"
  >
    <slot v-bind="field" />
  </Field.Context>
</template>
