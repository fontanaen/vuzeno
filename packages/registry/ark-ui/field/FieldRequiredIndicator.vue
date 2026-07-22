<script setup lang="ts">
import { Field } from "@ark-ui/vue/field";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";



const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Field.RequiredIndicator
    
    :class="cn(props.class)"
    data-slot="field-required-indicator"
  >
    <slot />
  </Field.RequiredIndicator>
</template>
