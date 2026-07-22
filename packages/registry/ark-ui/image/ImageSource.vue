<script setup lang="ts">
import { useImage, whenever } from "@vueuse/core";
import { type HTMLAttributes, toRefs } from "vue";
import { injectImageContext } from "./ImageRoot.vue";

const props = defineProps<{
  src: string;
  alt?: string;
  class?: HTMLAttributes["class"];
}>();

const { src } = toRefs(props);

const { state, controlled } = injectImageContext();

const { isLoading } = useImage(() => ({ src: src.value }), {
  onSuccess() {
    if (!controlled.value) {
      state.value = "success";
    }
  },
  onError() {
    if (!controlled.value) {
      state.value = "error";
    }
  },
});

whenever(isLoading, () => {
  if (!controlled.value) {
    state.value = "loading";
  }
});
</script>

<template>
  <img v-if="state === 'success'" :src="src" :alt="alt" :class="props.class" data-slot="image-source" />
</template>
