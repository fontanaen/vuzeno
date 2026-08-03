<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, useId } from "vue";
import { provideImageContext } from "./context";
import type { ImageState, StateChangeDetails } from "./types";
import { useImage } from "./use-image";

const props = defineProps<
  {
    state?: ImageState;
    defaultState?: ImageState;
    class?: HTMLAttributes["class"];
  } & PolymorphicProps
>();

const emits = defineEmits<{
  (event: "update:state", value: ImageState): void;
  (event: "stateChange", details: StateChangeDetails): void;
}>();

const id = useId();

const image = useImage(
  computed(() => ({
    id,
    state: props.state,
    defaultState: props.defaultState ?? "loading",
    onStateChange(details) {
      emits("update:state", details.state);
      emits("stateChange", details);
    },
  })),
);

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
