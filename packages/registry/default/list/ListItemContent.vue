<script setup lang="ts">
import { ItemContent } from "@vuzeno/ui/components/item";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ItemContent data-slot="list-item-content" :class="props.class">
    <slot />
  </ItemContent>
</template>
