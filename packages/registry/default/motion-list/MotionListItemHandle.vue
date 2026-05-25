<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";
import { type HTMLAttributes, onMounted, useTemplateRef } from "vue";
import { injectMotionListItemContext } from "./MotionListItem.vue";

const props = withDefaults(
  defineProps<
    {
      class?: HTMLAttributes["class"];
    } & PrimitiveProps
  >(),
  {
    as: "div",
    asChild: false,
  },
);

const handleElement = useTemplateRef<HTMLElement>("handleElement");
const context = injectMotionListItemContext();

onMounted(() => {
  if (handleElement.value) {
    context.handleElement.value = handleElement.value;
  }
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    ref="handleElement"
    data-slot="motion-list-item-handle"
    :class="props.class"
  >
    <slot />
  </Primitive>
</template>
