<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { injectImageContext } from "./Image.vue";

const props = defineProps<
  {
    class?: HTMLAttributes["class"];
  } & PrimitiveProps
>();

const { state } = injectImageContext();
</script>

<template>
  <Primitive v-if="state === 'loading'" :class="props.class" :as="as" :as-child="asChild">
    <slot />
  </Primitive>
</template>