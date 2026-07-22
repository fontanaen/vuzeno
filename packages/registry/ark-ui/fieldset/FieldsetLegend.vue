<script setup lang="ts">
import { Fieldset } from "@ark-ui/vue/fieldset";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Fieldset.Legend
    :class="cn(
      'mb-1 p-0 text-base leading-6 font-semibold text-foreground',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="fieldset-legend"
  >
    <slot />
  </Fieldset.Legend>
</template>
