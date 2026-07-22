<script setup lang="ts">
import { ScrollArea, type ScrollAreaContentProps } from "@ark-ui/vue/scroll-area";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ScrollAreaContentProps & { class?: HTMLAttributes["class"] }>();

const contentProps = reactiveOmit(props, "class");
</script>

<template>
  <ScrollArea.Content
    v-bind="contentProps"
    :class="cn(
      'flex flex-col gap-4 py-3 ps-4 pe-6',
      props.class,
    )"
    data-slot="scroll-area-content"
  >
    <slot />
  </ScrollArea.Content>
</template>
