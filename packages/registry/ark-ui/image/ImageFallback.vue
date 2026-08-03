<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { injectImageContext } from "./context";

const props = defineProps<
  {
    class?: HTMLAttributes["class"];
  } & PolymorphicProps
>();

const image = injectImageContext();

const fallbackProps = computed(() =>
  mergeProps(image.value.getFallbackProps(), {
    class: cn(props.class),
  }),
);
</script>

<template>
  <ark.div
    v-if="image.state === 'loading' || image.state === 'error'"
    v-bind="fallbackProps"
    :as-child="asChild"
    data-slot="image-fallback"
  >
    <slot />
  </ark.div>
</template>
