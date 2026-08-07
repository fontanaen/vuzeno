<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { injectTocContext } from "./context";

const props = defineProps<
  {
    class?: HTMLAttributes["class"];
  } & PolymorphicProps
>();

const toc = injectTocContext();

const titleProps = computed(() =>
  mergeProps(toc.value.getTitleProps(), {
    class: cn("text-muted-foreground mb-2 text-xs font-medium", props.class),
  }),
);
</script>

<template>
  <ark.p
    v-bind="titleProps"
    :as-child="asChild"
    data-slot="toc-title"
  >
    <slot />
  </ark.p>
</template>
