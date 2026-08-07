<script setup lang="ts">
import { Editable, type EditableInputProps } from "@ark-ui/vue/editable";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type InputVariantsProps, inputVariants } from "../input";

interface Props extends Omit<EditableInputProps, "size">, InputVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
});

const inputProps = reactiveOmit(props, "class", "size");
</script>

<template>
  <Editable.Input
    v-bind="inputProps"
    :class="cn(
      inputVariants({ size }),
      '[textarea]:min-h-20 [textarea]:resize-y [textarea]:whitespace-pre-wrap [textarea]:leading-6',
      props.class,
    )"
    data-slot="editable-input"
  >
    <slot />
  </Editable.Input>
</template>
