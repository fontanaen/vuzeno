<script setup lang="ts">
import { Field, type FieldSelectProps } from "@ark-ui/vue/field";
import { ChevronsUpDownIcon } from "@lucide/vue";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FieldSelectProps & { class?: HTMLAttributes["class"] }>();

const selectProps = reactiveOmit(props, "class");
</script>

<template>
  <Field.Select
    v-bind="selectProps"
    :class="cn(
      'w-full min-w-0 appearance-none rounded-md border border-input dark:bg-input/30 bg-size-[1rem] bg-position-[right_0.5rem_center] bg-no-repeat px-3 py-2 pr-8 text-sm leading-5 text-foreground outline-none',
      'bg-[url(\'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%236f6d66%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E\')]',
      'transition-[border-color,box-shadow] duration-150 ease-out',
      'focus:border-ring focus:shadow-[0_0_0_1px_var(--demo-coral-solid)]',
      'data-invalid:border-destructive data-invalid:focus:border-destructive data-invalid:focus:shadow-[0_0_0_1px_var(--destructive)]',
      props.class,
    )"
    data-slot="field-select"
  >
    <slot />
  </Field.Select>
</template>
