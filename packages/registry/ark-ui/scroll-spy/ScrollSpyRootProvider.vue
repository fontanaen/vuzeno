<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, toValue } from "vue";
import { provideScrollSpyContext } from "./context";
import type { ScrollSpyApi } from "./types";
import type { UseScrollSpyReturn } from "./use-scroll-spy";

const props = defineProps<
  {
    value: ScrollSpyApi | UseScrollSpyReturn;
    class?: HTMLAttributes["class"];
  } & PolymorphicProps
>();

const scrollSpy = computed(() => toValue(props.value));

provideScrollSpyContext(scrollSpy);

const rootProps = computed(() =>
  mergeProps(scrollSpy.value.getRootProps(), {
    class: cn(props.class),
  }),
);
</script>

<template>
  <ark.div v-bind="rootProps" :as-child="asChild" data-slot="scroll-spy">
    <slot />
  </ark.div>
</template>
