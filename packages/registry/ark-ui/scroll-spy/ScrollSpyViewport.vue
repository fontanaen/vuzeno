<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, onMounted } from "vue";
import { injectScrollSpyContext } from "./context";

const props = defineProps<{ class?: HTMLAttributes["class"] } & PolymorphicProps>();

const scrollSpy = injectScrollSpyContext();

onMounted(() => {
  scrollSpy.value.requestUpdate();
});

const viewportProps = computed(() =>
  mergeProps(scrollSpy.value.getViewportProps(), {
    class: cn(props.class),
  }),
);
</script>

<template>
  <ark.div v-bind="viewportProps" :as-child="asChild" data-slot="scroll-spy-viewport">
    <slot />
  </ark.div>
</template>
