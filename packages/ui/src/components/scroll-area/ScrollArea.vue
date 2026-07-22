<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import type { ScrollAreaRootProps } from "reka-ui";
import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaViewport } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { cn } from "cnfast";
import ScrollBar from "./ScrollBar.vue";

const props = defineProps<ScrollAreaRootProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <ScrollAreaRoot v-bind="delegatedProps" :class="cn('relative overflow-hidden', props.class)">
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
