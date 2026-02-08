<script setup lang="ts">
import { Button } from "@vuetella/ui/components/button";
import { cn } from "@vuetella/ui/lib/utils";
import { FunnelXIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { type FilterSize, injectFilterContext } from "./FiltersProvider.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { clearFilters, filters, variant, size } = injectFilterContext();

const sizeVariant: Record<FilterSize, string> = {
  sm: "size-7",
  default: "size-8",
  lg: "size-10",
} as const;
</script>

<template>
    <Button 
        v-if="filters.length > 0" 
        :class="cn(sizeVariant[size], props.class)" 
        :variant="variant"
        size="icon"
        aria-label="Filter" 
        @click="clearFilters">
        <FunnelXIcon />
    </Button>
</template>