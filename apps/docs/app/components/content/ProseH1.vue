<script setup lang="ts">
import HeadingAnchor from "./HeadingAnchor.vue";

defineProps<{
  id?: string;
}>();
</script>

<template>
  <h1
    :id="id"
    class="group/heading font-heading mt-2 scroll-m-28 text-3xl font-bold tracking-tight"
  >
    <HeadingAnchor :id="id">
      <slot />
    </HeadingAnchor>
  </h1>
</template>
