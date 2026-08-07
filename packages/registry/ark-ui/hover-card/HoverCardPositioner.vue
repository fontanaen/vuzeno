<script setup lang="ts">
import { HoverCard } from "@ark-ui/vue/hover-card";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <HoverCard.Positioner
    :class="cn(props.class)"
    data-slot="hover-card-positioner"
  >
    <slot />
  </HoverCard.Positioner>
</template>
