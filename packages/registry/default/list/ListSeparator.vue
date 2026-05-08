<script setup lang="ts">
import { ItemSeparator } from "@vuzeno/ui/components/item";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ItemSeparator data-slot="list-separator" :class="props.class" />
</template>
