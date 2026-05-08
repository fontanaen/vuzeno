<script setup lang="ts">
import { ItemDescription } from "@vuzeno/ui/components/item";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ItemDescription data-slot="list-item-description" :class="props.class">
    <slot />
  </ItemDescription>
</template>
