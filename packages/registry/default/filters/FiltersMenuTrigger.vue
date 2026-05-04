<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { DropdownMenuTrigger } from "@vuzeno/ui/components/dropdown-menu";
import { cn } from "@vuzeno/ui/lib/utils";
import { ListFilterPlusIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { type FiltersSize, injectFiltersContext } from "./context";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { variant, size } = injectFiltersContext();

const sizeVariant: Record<FiltersSize, string> = {
  sm: "size-7",
  md: "size-8",
  lg: "size-10",
} as const;
</script>

<template>
  <DropdownMenuTrigger as-child>
    <slot>
      <Button
        :class="cn('flex-none', sizeVariant[size], props.class)"
        :variant="variant"
        size="icon"
        aria-label="Add filter"
      >
        <ListFilterPlusIcon />
      </Button>
    </slot>
  </DropdownMenuTrigger>
</template>
