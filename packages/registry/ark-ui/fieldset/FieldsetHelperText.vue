<script setup lang="ts">
import { Fieldset } from "@ark-ui/vue/fieldset";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Fieldset.HelperText
    :class="cn(
      'text-sm leading-5 text-muted-foreground',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="fieldset-helper-text"
  >
    <slot />
  </Fieldset.HelperText>
</template>
