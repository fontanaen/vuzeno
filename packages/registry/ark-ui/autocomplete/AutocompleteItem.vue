<script setup lang="ts">
import { Combobox, type ComboboxItemProps } from "@ark-ui/vue/combobox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ComboboxItemProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <Combobox.Item
    v-bind="itemProps"
    :class="cn(
      'flex items-center justify-between gap-2 rounded-sm p-2 text-sm leading-5 outline-none select-none',
      'data-highlighted:bg-accent',
      'data-[state=checked]:text-foreground',
      'data-disabled:text-muted-foreground data-disabled:opacity-50',
      '[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-inherit [&_mark]:underline',
      props.class,
    )"
  >
    <slot />
  </Combobox.Item>
</template>
