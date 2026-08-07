<script setup lang="ts">
import { Editable, type EditablePreviewProps } from "@ark-ui/vue/editable";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type InputVariantsProps, inputVariants } from "../input";

interface Props extends EditablePreviewProps, InputVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
});

const previewProps = reactiveOmit(props, "class");
</script>

<template>
  <Editable.Preview
    v-bind="previewProps"
    :class="cn(
      inputVariants({ size }),
      'flex items-center',
      props.class,
    )"
    data-slot="editable-preview"
  >
    <slot />
  </Editable.Preview>
</template>
