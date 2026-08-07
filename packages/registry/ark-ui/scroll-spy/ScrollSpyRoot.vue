<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, useId } from "vue";
import { provideScrollSpyContext } from "./context";
import type { ScrollSpyOrientation, ValueChangeDetails } from "./types";
import { useScrollSpy } from "./use-scroll-spy";

const value = defineModel<string>({ default: "" });

const props = withDefaults(
  defineProps<
    {
      orientation?: ScrollSpyOrientation;
      offset?: number;
      root?: HTMLElement | null;
      class?: HTMLAttributes["class"];
    } & PolymorphicProps
  >(),
  {
    orientation: "vertical",
    offset: 0.25,
    root: null,
  },
);

const emits = defineEmits<(event: "valueChange", details: ValueChangeDetails) => void>();

const id = useId();

const scrollSpy = useScrollSpy(
  computed(() => ({
    id,
    value: value.value,
    orientation: props.orientation,
    offset: props.offset,
    root: props.root,
    onValueChange(details) {
      value.value = details.value;
      emits("valueChange", details);
    },
  })),
);

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
