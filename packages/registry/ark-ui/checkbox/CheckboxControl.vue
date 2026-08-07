<script setup lang="ts">
import { Checkbox, type CheckboxControlProps } from "@ark-ui/vue/checkbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CheckboxControlProps & { class?: HTMLAttributes["class"] }>();

const controlProps = reactiveOmit(props, "class");
</script>

<template>
  <Checkbox.Control
    v-bind="controlProps"
    :class="cn(
      'inline-flex items-center justify-center shrink-0 size-5 rounded-sm border border-input bg-transparent',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      'data-invalid:border-destructive',
      props.class
    )"
    data-slot="checkbox-control"
  >
    <slot />
  </Checkbox.Control>
</template>
