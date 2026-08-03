<script setup lang="ts">
import { cn } from "cnfast";
import { type HTMLAttributes, onBeforeUnmount, onMounted, useTemplateRef } from "vue";
import { injectScrollSpyContext } from "./ScrollSpyRoot.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const scrollSpy = injectScrollSpyContext();
const viewportRef = useTemplateRef<HTMLElement>("viewportRef");

function onScroll() {
  scrollSpy.requestUpdate();
}

onMounted(() => {
  scrollSpy.setViewport(viewportRef.value);
  scrollSpy.requestUpdate();
});

onBeforeUnmount(() => {
  scrollSpy.setViewport(null);
});
</script>

<template>
  <div
    ref="viewportRef"
    data-slot="scroll-spy-viewport"
    :class="cn(props.class)"
    @scroll.passive="onScroll"
  >
    <slot />
  </div>
</template>
