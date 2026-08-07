<script setup lang="ts">
import { Splitter, type SplitterRootProviderProps } from "@ark-ui/vue/splitter";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SplitterRootProviderProps & { class?: HTMLAttributes["class"] }>();

const providerProps = reactiveOmit(props, "class");
</script>

<template>
  <Splitter.RootProvider
    v-bind="providerProps"
    :class="cn(
      '[--splitter-border-color:var(--demo-border-emphasized)] [--splitter-thumb-color:var(--demo-bg-thumb)]',
      '[--splitter-thumb-size:0.5rem] [--splitter-thumb-inset:calc(var(--splitter-thumb-size)*-0.5)]',
      '[--splitter-border-size:1px] [--splitter-handle-size:1.5rem]',
      'flex w-full min-h-80 border border-border',
      props.class,
    )"
    data-slot="splitter-root-provider"
  >
    <slot />
  </Splitter.RootProvider>
</template>
