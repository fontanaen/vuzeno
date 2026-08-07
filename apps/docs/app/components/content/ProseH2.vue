<script setup lang="ts">
import HeadingAnchor from "./HeadingAnchor.vue";

defineProps<{
  id?: string;
}>();
</script>

<template>
  <h2
    :id="id"
    class="group/heading font-heading [&+]*:[code]:text-xl mt-10 scroll-m-28 text-xl font-semibold tracking-tight first:mt-0 lg:mt-16 [&+.steps]:!mt-0 [&+.steps>h3]:!mt-4 [&+h3]:!mt-6 [&+p]:!mt-4"
  >
    <HeadingAnchor :id="id">
      <slot />
    </HeadingAnchor>
  </h2>
</template>
