<script setup lang="ts">
import { Select, type SelectItemProps } from "@ark-ui/vue/select";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SelectItemProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <Select.Item
    v-bind="itemProps"
    :class="cn(
      'flex items-center justify-between gap-2 rounded-sm p-2 text-sm leading-5 select-none',
      'data-highlighted:bg-accent',
      'data-[state=checked]:text-primary',
      'data-disabled:text-accent-foreground data-disabled:opacity-50',
      props.class,
    )"
    data-slot="select-item"
  >
    <slot />
  </Select.Item>
</template>
