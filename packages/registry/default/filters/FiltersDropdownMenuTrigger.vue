<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { DropdownMenuTrigger } from "@vuzeno/ui/components/dropdown-menu";
import { cn } from "@vuzeno/ui/lib/utils";
import { ListFilterPlusIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { type FilterSize, injectFilterContext } from "./FiltersProvider.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { variant, size } = injectFilterContext();

const sizeVariant: Record<FilterSize, string> = {
  sm: "size-7",
  default: "size-8",
  lg: "size-10",
} as const;
</script>

<template>
  <DropdownMenuTrigger as-child>
    <slot>
      <Button :class="cn('flex-none', sizeVariant[size], props.class)" :variant="variant" size="icon" aria-label="Filter">
        <ListFilterPlusIcon />
      </Button>
    </slot>
  </DropdownMenuTrigger>
</template>