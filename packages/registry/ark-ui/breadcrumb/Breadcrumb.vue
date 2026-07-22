<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.nav aria-label="breadcrumb" data-slot="breadcrumb" :class="props.class">
    <slot />
  </ark.nav>
</template>
