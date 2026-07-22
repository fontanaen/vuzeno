<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
  defaultValue?: string | number;
}

const props = defineProps<Props>();
const modelValue = defineModel<string | number>({ default: (props) => props.defaultValue });
</script>

<template>
  <ark.textarea
    :value="modelValue"
    data-slot="textarea"
    :class="cn(
      'flex min-h-20 w-full rounded-md border border-input dark:bg-input/30 px-3 py-2 text-sm outline-none transition-colors',
      'placeholder:text-muted-foreground',
      'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
      'selection:bg-primary selection:text-primary-foreground',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
      props.class
    )"
    @change="modelValue = ($event.target as HTMLTextAreaElement).value"
  />
</template>
