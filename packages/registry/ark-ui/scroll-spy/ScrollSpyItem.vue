<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { type ComponentPublicInstance, computed, type HTMLAttributes, onBeforeUnmount, onMounted, useTemplateRef } from "vue";
import { injectScrollSpyContext } from "./context";

const props = defineProps<
  {
    value: string;
    class?: HTMLAttributes["class"];
  } & PolymorphicProps
>();

const scrollSpy = injectScrollSpyContext();
const itemRef = useTemplateRef<HTMLElement | ComponentPublicInstance>("itemRef");

function resolveElement(value: HTMLElement | ComponentPublicInstance | null) {
  if (value instanceof HTMLElement) {
    return value;
  }

  const element = value?.$el;
  if (element instanceof HTMLElement) {
    return element;
  }

  return null;
}

onMounted(() => {
  const element = resolveElement(itemRef.value);
  if (!element) {
    return;
  }

  scrollSpy.value.registerItem(props.value, element);
});

onBeforeUnmount(() => {
  scrollSpy.value.unregisterItem(props.value);
});

const itemProps = computed(() =>
  mergeProps(scrollSpy.value.getItemProps({ value: props.value }), {
    class: cn(props.class),
  }),
);
</script>

<template>
  <ark.div ref="itemRef" v-bind="itemProps" :as-child="asChild" data-slot="scroll-spy-item">
    <slot />
  </ark.div>
</template>
