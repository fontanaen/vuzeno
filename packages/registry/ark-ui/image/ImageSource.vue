<script setup lang="ts">
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { injectImageContext } from "./context";

const props = defineProps<{
  src: string;
  alt?: string;
  class?: HTMLAttributes["class"];
}>();

const image = injectImageContext();

const sourceProps = computed(() =>
  mergeProps(image.value.getSourceProps(), {
    src: props.src,
    alt: props.alt,
    class: cn(props.class),
  }),
);
</script>

<template>
  <img v-bind="sourceProps" data-slot="image-source" />
</template>
