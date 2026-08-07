<script setup lang="ts">
import { ScrollArea, type ScrollAreaCornerProps } from "@ark-ui/vue/scroll-area";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ScrollAreaCornerProps & { class?: HTMLAttributes["class"] }>();

const cornerProps = reactiveOmit(props, "class");
</script>

<template>
  <ScrollArea.Corner
    v-bind="cornerProps"
    :class="cn('bg-transparent', props.class)"
    data-slot="scroll-area-corner"
  >
    <slot />
  </ScrollArea.Corner>
</template>
