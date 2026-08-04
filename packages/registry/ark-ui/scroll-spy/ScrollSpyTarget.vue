<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { injectScrollSpyContext } from "./context";

const props = defineProps<
  {
    /**
     * Section value and matching document element id to track.
     */
    value: string;
  } & PolymorphicProps
>();

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
    scrollSpy.value.unregisterItem(registeredValue.value);
    registeredValue.value = null;
  }

  const element = document.getElementById(props.value);
  if (!element) {
    if (registeredValue.value) {
      scrollSpy.value.unregisterItem(registeredValue.value);
      registeredValue.value = null;
    }

    if (retryCount.value < 60) {
      retryCount.value += 1;
      retryFrame.value = requestAnimationFrame(sync);
    }

    return;
  }

  clearRetry();
  scrollSpy.value.registerItem(props.value, element);
  registeredValue.value = props.value;
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
    scrollSpy.value.unregisterItem(registeredValue.value);
  }
});

const targetProps = computed(() => mergeProps(scrollSpy.value.getTargetProps({ value: props.value }), {}));
</script>

<template>
  <ark.span v-bind="targetProps" :as-child="asChild" data-slot="scroll-spy-target" />
</template>
