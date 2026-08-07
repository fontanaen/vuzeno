<script setup lang="ts">
import { ScrollArea, type ScrollAreaRootProviderProps } from "@ark-ui/vue/scroll-area";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import ScrollAreaContent from "./ScrollAreaContent.vue";
import ScrollAreaCorner from "./ScrollAreaCorner.vue";
import ScrollAreaScrollbar from "./ScrollAreaScrollbar.vue";
import ScrollAreaViewport from "./ScrollAreaViewport.vue";

const props = defineProps<
  ScrollAreaRootProviderProps & {
    orientation?: "horizontal" | "vertical" | "both";
    class?: HTMLAttributes["class"];
    viewportClass?: HTMLAttributes["class"];
    contentClass?: HTMLAttributes["class"];
  }
>();

const providerProps = reactiveOmit(props, "class", "viewportClass", "contentClass", "orientation");
</script>

<template>
  <ScrollArea.RootProvider
    v-bind="providerProps"
    :class="cn(props.class)"
    data-slot="scroll-area-root-provider"
  >
    <ScrollAreaViewport :class="props.viewportClass">
      <ScrollAreaContent :class="props.contentClass">
        <slot />
      </ScrollAreaContent>
    </ScrollAreaViewport>

    <ScrollAreaScrollbar v-if="props.orientation === 'horizontal' || props.orientation === 'both'" orientation="horizontal" />
    <ScrollAreaScrollbar v-if="props.orientation === 'vertical' || props.orientation === 'both'" orientation="vertical" />
    <ScrollAreaCorner />
  </ScrollArea.RootProvider>
</template>
