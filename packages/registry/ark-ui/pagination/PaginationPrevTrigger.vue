<script setup lang="ts">
import { Pagination, type PaginationPrevTriggerProps } from "@ark-ui/vue/pagination";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

interface Props extends PaginationPrevTriggerProps, ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "icon-sm",
});

const triggerProps = reactiveOmit(props, "class", "variant", "size");
</script>

<template>
  <Pagination.PrevTrigger
    v-bind="triggerProps"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    data-slot="pagination-prev-trigger"
  >
    <slot />
  </Pagination.PrevTrigger>
</template>
