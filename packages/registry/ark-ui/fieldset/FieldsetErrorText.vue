<script setup lang="ts">
import { Fieldset } from "@ark-ui/vue/fieldset";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Fieldset.ErrorText
    :class="cn(
      'text-sm leading-5 text-destructive',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="fieldset-error-text"
  >
    <slot />
  </Fieldset.ErrorText>
</template>
