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

const listProps = computed(() =>
  mergeProps(toc.value.getListProps(), {
    class: cn("relative m-0 flex list-none flex-col gap-3 p-0 pl-3", props.class),
  }),
);
</script>

<template>
  <ark.ul
    v-bind="listProps"
    :as-child="asChild"
    data-slot="toc-list"
  >
    <slot />
  </ark.ul>
</template>
