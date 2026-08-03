<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { injectScrollSpyContext } from "./ScrollSpyRoot.vue";

const props = defineProps<{
  /**
   * Section value and matching document element id to track.
   */
  value: string;
}>();

const scrollSpy = injectScrollSpyContext();
const registeredValue = ref<string | null>(null);
const retryFrame = ref(0);
const retryCount = ref(0);

function clearRetry() {
  cancelAnimationFrame(retryFrame.value);
  retryFrame.value = 0;
  retryCount.value = 0;
}

function sync() {
  if (registeredValue.value && registeredValue.value !== props.value) {
    scrollSpy.unregisterItem(registeredValue.value);
    registeredValue.value = null;
  }

  const element = document.getElementById(props.value);
  if (!element) {
    if (registeredValue.value) {
      scrollSpy.unregisterItem(registeredValue.value);
      registeredValue.value = null;
    }

    if (retryCount.value < 60) {
      retryCount.value += 1;
      retryFrame.value = requestAnimationFrame(sync);
    }

    return;
  }

  clearRetry();
  scrollSpy.registerItem(props.value, element);
  registeredValue.value = props.value;
  scrollSpy.requestUpdate();
}

onMounted(() => {
  nextTick(sync);
});

watch(
  () => props.value,
  () => {
    clearRetry();
    nextTick(sync);
  },
);

onBeforeUnmount(() => {
  clearRetry();
  if (registeredValue.value) {
    scrollSpy.unregisterItem(registeredValue.value);
  }
});
</script>

<template>
  <span
    data-slot="scroll-spy-target"
    :data-value="props.value"
    hidden
  />
</template>
