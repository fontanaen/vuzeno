<script setup lang="ts">
import { ItemHeader } from "@vuzeno/ui/components/item";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ItemHeader data-slot="list-item-header" :class="props.class">
    <slot />
  </ItemHeader>
</template>
