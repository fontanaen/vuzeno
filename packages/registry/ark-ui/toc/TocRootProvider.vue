<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, toValue } from "vue";
import { provideTocContext } from "./context";
import type { TocApi } from "./types";
import type { UseTocReturn } from "./use-toc";

const props = defineProps<
  {
    value: TocApi | UseTocReturn;
    class?: HTMLAttributes["class"];
  } & PolymorphicProps
>();

const toc = computed(() => toValue(props.value));

provideTocContext(toc);

const rootProps = computed(() =>
  mergeProps(toc.value.getRootProps(), {
    class: cn("text-sm", props.class),
  }),
);
</script>

<template>
  <ark.nav
    v-bind="rootProps"
    :as-child="asChild"
    data-slot="toc"
  >
    <slot />
  </ark.nav>
</template>
