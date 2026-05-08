<script setup lang="ts">
import { ItemFooter } from "@vuzeno/ui/components/item";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ItemFooter data-slot="list-item-footer" :class="props.class">
    <slot />
  </ItemFooter>
</template>
