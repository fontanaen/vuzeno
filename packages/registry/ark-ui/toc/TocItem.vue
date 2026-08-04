<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, onBeforeUnmount, onMounted, watch } from "vue";
import { injectTocContext } from "./context";
import { provideTocItemContext } from "./item-context";

const props = withDefaults(
  defineProps<
    {
      value: string;
      depth?: number;
      class?: HTMLAttributes["class"];
    } & PolymorphicProps
  >(),
  {
    depth: 2,
  },
);

const toc = injectTocContext();

const value = computed(() => props.value);
const depth = computed(() => props.depth);
const isActive = computed(() => toc.value.activeValue === props.value);

provideTocItemContext({ value, depth, isActive });

function syncRegistration() {
  toc.value.registerItem({
    value: props.value,
    depth: props.depth,
  });
}

onMounted(() => {
  syncRegistration();
});

watch(
  () => [props.value, props.depth] as const,
  (current, previous) => {
    const previousValue = previous?.[0];
    if (previousValue != null && previousValue !== current[0]) {
      toc.value.unregisterItem(previousValue);
    }
    syncRegistration();
  },
);

onBeforeUnmount(() => {
  toc.value.unregisterItem(props.value);
});

const itemProps = computed(() =>
  mergeProps(toc.value.getItemProps({ value: props.value, depth: props.depth }), {
    class: cn("data-[depth=3]:pl-3 data-[depth=4]:pl-5", props.class),
  }),
);
</script>

<template>
  <ark.li
    v-bind="itemProps"
    :as-child="asChild"
    data-slot="toc-item"
  >
    <slot />
  </ark.li>
</template>
