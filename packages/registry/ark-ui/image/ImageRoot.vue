<script lang="ts">
import { createContext } from "@ark-ui/vue";
import type { ComputedRef, Ref, WritableComputedRef } from "vue";

export type ImageState = "loading" | "error" | "success";

export type ImageContext = {
  state: WritableComputedRef<ImageState> | Ref<ImageState>;
  controlled: ComputedRef<boolean>;
};

export const [provideImageContext, injectImageContext] = createContext<ImageContext>("ImageContext");
</script>

<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import { computed, ref, type HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  state?: ImageState;
} & PolymorphicProps>();

const emits = defineEmits<(event: "update:state", value: ImageState) => void>();

const internalState = ref<ImageState>("loading");

const controlled = computed(() => props.state !== undefined);

const state = computed({
  get() {
    return props.state ?? internalState.value;
  },
  set(value: ImageState) {
    if (controlled.value) {
      emits("update:state", value);
    } else {
      internalState.value = value;
    }
  },
});

provideImageContext({
  state,
  controlled,
});
</script>

<template>
  <ark.div
    :as-child="asChild"
    data-slot="image"
    :class="cn('relative w-fit overflow-hidden', props.class)"
  >
    <slot />
  </ark.div>
</template>
