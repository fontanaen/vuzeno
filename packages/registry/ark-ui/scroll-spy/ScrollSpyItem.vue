<script setup lang="ts">
import { cn } from "cnfast";
import { computed, type HTMLAttributes, onBeforeUnmount, onMounted, useTemplateRef } from "vue";
import { injectScrollSpyContext } from "./ScrollSpyRoot.vue";

const props = defineProps<{
  value: string;
  class?: HTMLAttributes["class"];
}>();

const scrollSpy = injectScrollSpyContext();
const itemRef = useTemplateRef<HTMLElement>("itemRef");

const isActive = computed(() => scrollSpy.activeValue.value === props.value);

onMounted(() => {
  const element = itemRef.value;
  if (!element) {
    return;
  }

  scrollSpy.registerItem(props.value, element);
  scrollSpy.requestUpdate();
});

onBeforeUnmount(() => {
  scrollSpy.unregisterItem(props.value);
});
</script>

<template>
  <div
    ref="itemRef"
    data-slot="scroll-spy-item"
    :data-value="props.value"
    :data-active="isActive || undefined"
    :class="cn(props.class)"
  >
    <slot />
  </div>
</template>
