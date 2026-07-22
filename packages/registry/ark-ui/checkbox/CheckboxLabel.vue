<script setup lang="ts">
import { Checkbox, type CheckboxLabelProps } from "@ark-ui/vue/checkbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CheckboxLabelProps & { class?: HTMLAttributes["class"] }>();

const labelProps = reactiveOmit(props, "class");
</script>

<template>
  <Checkbox.Label
    v-bind="labelProps"
    :class="cn('select-none text-sm leading-none text-foreground', props.class)"
    data-slot="checkbox-label"
  >
    <slot />
  </Checkbox.Label>
</template>
