<script setup lang="ts">
import { ItemActions } from "@vuzeno/ui/components/item";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ItemActions data-slot="list-item-actions" :class="props.class">
    <slot />
  </ItemActions>
</template>
