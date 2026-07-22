<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Splitter, type SplitterRootEmits, type SplitterRootProps } from "@ark-ui/vue/splitter";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SplitterRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<SplitterRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Splitter.Root
    v-bind="forwarded"
    :class="cn(
      '[--splitter-border-color:var(--demo-border-emphasized)] [--splitter-thumb-color:var(--demo-bg-thumb)]',
      '[--splitter-thumb-size:0.5rem] [--splitter-thumb-inset:calc(var(--splitter-thumb-size)*-0.5)]',
      '[--splitter-border-size:1px] [--splitter-handle-size:1.5rem]',
      'flex w-full min-h-80 border border-border',
      props.class,
    )"
    data-slot="splitter"
  >
    <slot />
  </Splitter.Root>
</template>
