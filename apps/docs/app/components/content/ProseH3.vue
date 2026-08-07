<script setup lang="ts">
import HeadingAnchor from "./HeadingAnchor.vue";

defineProps<{
  id?: string;
}>();
</script>

<template>
  <h3
    :id="id"
    class="group/heading font-heading mt-12 scroll-m-28 text-lg font-medium tracking-tight [&+p]:!mt-4 *:[code]:text-xl"
  >
    <HeadingAnchor :id="id">
      <slot />
    </HeadingAnchor>
  </h3>
</template>
