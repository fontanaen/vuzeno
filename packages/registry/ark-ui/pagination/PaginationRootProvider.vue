<script setup lang="ts">
import { Pagination, type PaginationRootProviderProps } from "@ark-ui/vue/pagination";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PaginationRootProviderProps & { class?: HTMLAttributes["class"] }>();

const providerProps = reactiveOmit(props, "class");
</script>

<template>
  <Pagination.RootProvider
    v-bind="providerProps"
    :class="cn(
      'flex max-w-[40rem] flex-col items-start gap-4 text-foreground',
      props.class,
    )"
    data-slot="pagination-root-provider"
  >
    <slot />
  </Pagination.RootProvider>
</template>
