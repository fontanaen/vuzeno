<script setup lang="ts">
import { RadioGroup, type RadioGroupItemProps } from "@ark-ui/vue/radio-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <RadioGroup.Item
    v-bind="itemProps"
    :class="cn(
      'inline-flex items-center gap-2',
      'data-disabled:opacity-50 data-disabled:cursor-not-allowed',
      props.class,
    )"
    data-slot="radio-group-item"
  >
    <slot />
    <RadioGroup.ItemHiddenInput />
  </RadioGroup.Item>
</template>
