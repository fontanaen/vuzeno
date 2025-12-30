<script lang="ts">
export type ImageContext = {
  state: Ref<'loading' | 'error' | 'success'>
  setState: (state: 'loading' | 'error' | 'success') => void
};

export const [injectImageContext, provideImageContext] = createContext<ImageContext>('ImageContext');
</script>

<script setup lang="ts">
import { cn } from "@vuetella/ui/lib/utils";
import { createContext, Primitive, type PrimitiveProps } from "reka-ui"
import { ref, type HTMLAttributes, type Ref } from "vue";

const props = withDefaults(defineProps<{
  class?: HTMLAttributes["class"]
} & PrimitiveProps>(), {
  as: 'div',
  asChild: false,
})

const state = ref<'loading' | 'error' | 'success'>('loading')

provideImageContext({
  state,
  setState(value) {
    state.value = value
  }
})
</script>

<template>
  <Primitive :as="as" :as-child="asChild" data-slot="image-zoom-container" :class="cn('overflow-hidden relative w-fit', props.class)">
    <slot />
  </Primitive>
</template>