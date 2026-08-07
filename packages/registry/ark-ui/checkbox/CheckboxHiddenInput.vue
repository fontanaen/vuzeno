<script setup lang="ts">
import { Checkbox, type CheckboxHiddenInputProps } from "@ark-ui/vue/checkbox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CheckboxHiddenInputProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Checkbox.HiddenInput
    v-bind="props"
    :class="cn(props.class)"
    data-slot="checkbox-hidden-input"
  >
    <slot />
  </Checkbox.HiddenInput>
</template>
