<script setup lang="ts">
import { ScrollArea, type ScrollAreaThumbProps } from "@ark-ui/vue/scroll-area";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ScrollAreaThumbProps & { class?: HTMLAttributes["class"] }>();

const thumbProps = reactiveOmit(props, "class");
</script>

<template>
  <ScrollArea.Thumb
    v-bind="thumbProps"
    :class="cn(
      'w-full rounded-[inherit] bg-muted-foreground/50',
      'data-[orientation=horizontal]:h-full data-[orientation=horizontal]:w-auto',
      props.class,
    )"
    data-slot="scroll-area-thumb"
  />
</template>
