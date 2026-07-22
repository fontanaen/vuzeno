<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import { FunnelXIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";
import { injectFiltersContext } from "./context";

interface Props extends ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "icon-sm",
});

const { clearFilters, filters, variant } = injectFiltersContext();
</script>

<template>
  <ark.button
    v-if="filters.length > 0"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    :variant="variant"
    aria-label="Clear filters"
    @click="clearFilters"
  >
    <FunnelXIcon />
  </ark.button>
</template>
