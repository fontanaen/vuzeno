<script setup lang="ts">
import { Pagination, type PaginationNextTriggerProps } from "@ark-ui/vue/pagination";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

interface Props extends PaginationNextTriggerProps, ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "icon-sm",
});

const triggerProps = reactiveOmit(props, "class", "variant", "size");
</script>

<template>
  <Pagination.NextTrigger
    v-bind="triggerProps"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    data-slot="pagination-next-trigger"
  >
    <slot />
  </Pagination.NextTrigger>
</template>
