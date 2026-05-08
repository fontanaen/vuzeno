<script setup lang="ts">
import { ItemMedia, type ItemMediaVariants } from "@vuzeno/ui/components/item";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  variant?: ItemMediaVariants["variant"];
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ItemMedia :variant="props.variant" data-slot="list-item-media" :class="props.class">
    <slot />
  </ItemMedia>
</template>
