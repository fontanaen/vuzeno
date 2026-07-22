<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Pagination, type PaginationRootEmits, type PaginationRootProps } from "@ark-ui/vue/pagination";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PaginationRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<PaginationRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Pagination.Root
    v-bind="forwarded"
    :class="cn(
      'flex max-w-[40rem] flex-col items-start gap-4 text-foreground',
      props.class,
    )"
    data-slot="pagination"
  >
    <slot />
  </Pagination.Root>
</template>
