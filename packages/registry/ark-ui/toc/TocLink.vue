<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { injectTocContext } from "./context";
import { injectTocItemContext } from "./item-context";

const props = defineProps<
  {
    href?: string;
    class?: HTMLAttributes["class"];
  } & PolymorphicProps
>();

const toc = injectTocContext();
const item = injectTocItemContext();

const linkProps = computed(() =>
  mergeProps(toc.value.getLinkProps({ value: item.value.value }), {
    href: props.href,
    class: cn("text-muted-foreground hover:text-foreground block text-[0.8rem] no-underline transition-colors", props.class),
  }),
);
</script>

<template>
  <ark.a
    v-bind="linkProps"
    :as-child="asChild"
    data-slot="toc-link"
  >
    <slot />
  </ark.a>
</template>
