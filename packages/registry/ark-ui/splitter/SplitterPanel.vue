<script setup lang="ts">
import { Splitter, type SplitterPanelProps } from "@ark-ui/vue/splitter";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SplitterPanelProps & { class?: HTMLAttributes["class"] }>();

const panelProps = reactiveOmit(props, "class");
</script>

<template>
  <Splitter.Panel
    v-bind="panelProps"
    :class="cn(
      'flex items-center justify-center font-medium text-muted-foreground',
      props.class,
    )"
    data-slot="splitter-panel"
  >
    <slot />
  </Splitter.Panel>
</template>
