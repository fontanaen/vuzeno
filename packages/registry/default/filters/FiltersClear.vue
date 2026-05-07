<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { cn } from "@vuzeno/ui/lib/utils";
import { FunnelXIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { type FiltersSize, injectFiltersContext } from "./context";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { clearFilters, filters, variant, size } = injectFiltersContext();

const sizeVariant: Record<FiltersSize, string> = {
  sm: "size-7",
  md: "size-8",
  lg: "size-10",
} as const;
</script>

<template>
  <Button
    v-if="filters.length > 0"
    :class="cn(sizeVariant[size], props.class)"
    :variant="variant"
    size="icon"
    aria-label="Clear filters"
    @click="clearFilters"
  >
    <FunnelXIcon />
  </Button>
</template>
