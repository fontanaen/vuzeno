<script lang="ts">
export type MotionListItemContext = {
  handleElement: Ref<HTMLElement | undefined>;
};

export const [injectMotionListItemContext, provideMotionListItemContext] = createContext<MotionListItemContext>("MotionListItemContext");
</script>

<script setup lang="ts">
import { useSortable } from "@dnd-kit/vue/sortable";
import { createContext, Primitive, type PrimitiveProps } from "reka-ui";
import { type ComponentPublicInstance, type HTMLAttributes, onBeforeUnmount, onMounted, type Ref, ref, useTemplateRef } from "vue";
import { injectMotionListContext } from "./MotionList.vue";

const props = withDefaults(
  defineProps<
    {
      id?: string;
      dataIndex?: number;
      class?: HTMLAttributes["class"];
    } & PrimitiveProps
  >(),
  {
    as: "div",
    asChild: false,
  },
);

const context = injectMotionListContext();

const element = useTemplateRef<ComponentPublicInstance>("element");
const handle = ref<HTMLElement>();

useSortable({
  id: () => `__list-item-${props.id ?? props.dataIndex ?? 0}`,
  index: () => props.dataIndex ?? 0,
  element,
  handle,
  disabled: () => context.sortable.value === false,
});

onMounted(() => {
  if (element.value) {
    context.registerItem(element.value.$el as HTMLElement);
  }
});

onBeforeUnmount(() => {
  if (element.value) {
    context.unregisterItem(element.value.$el as HTMLElement);
  }
});

provideMotionListItemContext({
  handleElement: handle,
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    ref="element"
    data-slot="motion-list-item"
    :class="props.class"
  >
    <slot />
  </Primitive>
</template>
