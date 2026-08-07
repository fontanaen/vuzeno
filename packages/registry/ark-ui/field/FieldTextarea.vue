<script setup lang="ts">
import { Field, type FieldTextareaProps } from "@ark-ui/vue/field";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FieldTextareaProps & { class?: HTMLAttributes["class"] }>();

const textareaProps = reactiveOmit(props, "class");
</script>

<template>
  <Field.Textarea
    v-bind="textareaProps"
    :class="cn(
      'min-h-20 w-full min-w-0 resize-y scroll-pb-2 rounded-md border border-input dark:bg-input/30 px-3 py-2 font-[inherit] text-sm leading-5 text-foreground outline-none',
      'transition-[border-color,box-shadow] duration-150 ease-out',
      'placeholder:text-muted-foreground',
      'focus:border-ring focus:shadow-[0_0_0_1px_var(--demo-coral-solid)]',
      'data-invalid:border-destructive data-invalid:focus:border-destructive data-invalid:focus:shadow-[0_0_0_1px_var(--destructive)]',
      props.class,
    )"
    data-slot="field-textarea"
  >
    <slot />
  </Field.Textarea>
</template>
