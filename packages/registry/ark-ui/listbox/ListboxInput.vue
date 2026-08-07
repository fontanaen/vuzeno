<script setup lang="ts">
import { Listbox, type ListboxInputProps } from "@ark-ui/vue/listbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ListboxInputProps & { class?: HTMLAttributes["class"] }>();

const inputProps = reactiveOmit(props, "class");
</script>

<template>
  <Listbox.Input
    v-bind="inputProps"
    :class="cn(
      'w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-2 text-sm leading-5 text-foreground outline-none',
      'transition-[border-color,box-shadow] duration-150 ease-out',
      'placeholder:text-muted-foreground',
      'focus:border-ring focus:shadow-[0_0_0_1px_var(--demo-coral-solid)]',
      'data-disabled:opacity-50',
      props.class,
    )"
    data-slot="listbox-input"
  >
    <slot />
  </Listbox.Input>
</template>
