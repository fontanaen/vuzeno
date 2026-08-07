<script setup lang="ts">
import { Pagination } from "@ark-ui/vue/pagination";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Pagination.Context
    :class="cn(props.class)"
    data-slot="pagination-context"
    v-slot="context"
  >
    <slot v-bind="context" />
  </Pagination.Context>
</template>
