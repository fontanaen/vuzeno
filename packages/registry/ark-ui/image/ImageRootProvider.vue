<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, toValue } from "vue";
import { provideImageContext } from "./context";
import type { ImageApi } from "./types";
import type { UseImageReturn } from "./use-image";

const props = defineProps<
  {
    value: ImageApi | UseImageReturn;
    class?: HTMLAttributes["class"];
  } & PolymorphicProps
>();

const image = computed(() => toValue(props.value));

provideImageContext(image);

const rootProps = computed(() =>
  mergeProps(image.value.getRootProps(), {
    class: cn("relative w-fit overflow-hidden", props.class),
  }),
);
</script>

<template>
  <ark.div v-bind="rootProps" :as-child="asChild" data-slot="image">
    <slot />
  </ark.div>
</template>
