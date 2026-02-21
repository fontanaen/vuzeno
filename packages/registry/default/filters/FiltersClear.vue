<script setup lang="ts">
import { FunnelXIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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