<script setup lang="ts">
import { useImage } from "@vueuse/core";
import { type HTMLAttributes, toRefs } from "vue";
import { injectImageContext } from "./Image.vue";

const props = defineProps<{
  src: string;
  alt?: string;
  class?: HTMLAttributes["class"];
}>();

const { src } = toRefs(props);

const { state } = injectImageContext();

useImage(() => ({ src: src.value }), {
  onSuccess() {
    state.value = "success";
  },
  onError() {
    state.value = "error";
  },
});
</script>

<template>
    <img v-if="state === 'success'" :src="src" :alt="alt" :class="props.class" />
</template>