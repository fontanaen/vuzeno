<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import type { HTMLAttributes } from "vue";
import { injectImageContext } from "./ImageRoot.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
} & PolymorphicProps>();

const { state } = injectImageContext();
</script>

<template>
  <ark.div
    v-if="state === 'error'"
    :as-child="asChild"
    :class="props.class"
    data-slot="image-error"
  >
    <slot />
  </ark.div>
</template>
