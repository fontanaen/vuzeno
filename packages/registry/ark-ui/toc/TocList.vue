<script setup lang="ts">
import { cn } from "cnfast";
import { type HTMLAttributes, onBeforeUnmount, onMounted, useTemplateRef } from "vue";
import { injectTocContext } from "./TocRoot.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const toc = injectTocContext();
const listRef = useTemplateRef<HTMLElement>("listRef");

onMounted(() => {
  toc.setListElement(listRef.value);
});

onBeforeUnmount(() => {
  toc.setListElement(null);
});
</script>

<template>
  <ul
    ref="listRef"
    data-slot="toc-list"
    :class="cn('relative m-0 flex list-none flex-col gap-3 p-0 pl-3', props.class)"
  >
    <slot />
  </ul>
</template>
