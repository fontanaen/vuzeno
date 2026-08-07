<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import type { ScrollSpyContext } from "@vuzeno/registry/ui/scroll-spy";
import { injectScrollSpyContext } from "@vuzeno/registry/ui/scroll-spy";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, useId } from "vue";
import { provideTocContext } from "./context";
import type { ActiveValueChangeDetails, TocIndicatorMode, TocTurn } from "./types";
import { useToc } from "./use-toc";

const activeValue = defineModel<string>("activeValue", { default: "" });

const props = withDefaults(
  defineProps<
    {
      turn?: TocTurn;
      indicator?: TocIndicatorMode;
      class?: HTMLAttributes["class"];
    } & PolymorphicProps
  >(),
  {
    turn: "rounded",
    indicator: "segment",
  },
);

const emits = defineEmits<(event: "activeValueChange", details: ActiveValueChangeDetails) => void>();

const id = useId();
const scrollSpy = injectScrollSpyContext(undefined as unknown as ScrollSpyContext | undefined);

const toc = useToc(
  computed(() => ({
    id,
    turn: props.turn,
    indicator: props.indicator,
    activeValue: scrollSpy ? scrollSpy.value.activeValue : activeValue.value,
    onActiveValueChange(details) {
      if (scrollSpy) {
        scrollSpy.value.setActiveValue(details.value);
      } else {
        activeValue.value = details.value;
      }
      emits("activeValueChange", details);
    },
  })),
);

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
