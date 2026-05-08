<script setup lang="ts">
import { ItemTitle } from "@vuzeno/ui/components/item";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ItemTitle data-slot="list-item-title" :class="props.class">
    <slot />
  </ItemTitle>
</template>
