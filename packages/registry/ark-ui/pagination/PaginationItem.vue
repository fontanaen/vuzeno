<script setup lang="ts">
import { Pagination, type PaginationItemProps } from "@ark-ui/vue/pagination";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

interface Props extends PaginationItemProps, ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "icon-sm",
});

const itemProps = reactiveOmit(props, "class", "variant", "size");
</script>

<template>
  <Pagination.Item
    v-bind="itemProps"
    :class="cn(
      buttonVariants({ variant, size }),
      'min-w-9 w-auto px-2',
      'data-[selected]:border-primary data-[selected]:bg-primary data-[selected]:text-[var(--demo-coral-contrast)]',
      'data-[selected]:[&:hover]:border-[var(--demo-coral-emphasized)] data-[selected]:[&:hover]:bg-[var(--demo-coral-emphasized)]',
      props.class,
    )"
    data-slot="pagination-item"
  >
    <slot />
  </Pagination.Item>
</template>
