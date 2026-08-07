<script setup lang="ts">
import HeadingAnchor from "./HeadingAnchor.vue";

defineProps<{
  id?: string;
}>();
</script>

<template>
  <h4
    :id="id"
    class="group/heading font-heading mt-12 scroll-m-28 text-base font-medium tracking-tight [&+p]:!mt-4 *:[code]:text-base"
  >
    <HeadingAnchor :id="id">
      <slot />
    </HeadingAnchor>
  </h4>
</template>
