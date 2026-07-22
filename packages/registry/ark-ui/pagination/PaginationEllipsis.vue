<script setup lang="ts">
import { Pagination, type PaginationEllipsisProps } from "@ark-ui/vue/pagination";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PaginationEllipsisProps & { class?: HTMLAttributes["class"] }>();

const ellipsisProps = reactiveOmit(props, "class");
</script>

<template>
  <Pagination.Ellipsis
    v-bind="ellipsisProps"
    :class="cn(
      'inline-flex h-9 min-w-9 items-center justify-center text-sm text-muted-foreground select-none',
      props.class,
    )"
    data-slot="pagination-ellipsis"
  >
    <slot />
  </Pagination.Ellipsis>
</template>
