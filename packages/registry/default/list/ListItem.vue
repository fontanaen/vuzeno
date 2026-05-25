<script lang="ts">
export type ListItemContext = {
  isDragging: Readonly<Ref<boolean>>;
  setHandleRef: (element: HTMLElement | null) => void;
  hasDragHandle: Ref<boolean>;
};

export const [injectListItemContext, provideListItemContext] = createContext<ListItemContext>("ListItemContext");
</script>

<script setup lang="ts">
import { useSortable } from "@dnd-kit/vue/sortable";
import { cn } from "@vuzeno/ui/lib/utils";
import { createContext, Primitive } from "reka-ui";
import { computed, type HTMLAttributes, ref, type Ref, shallowRef } from "vue";
import { injectListContext } from "./List.vue";
import { listItemVariants } from ".";

const props = withDefaults(
  defineProps<{
    id?: string | number;
    index?: number;
    disabled?: boolean;
    class?: HTMLAttributes["class"];
  }>(),
  {
    disabled: false,
  },
);

const { variant, size, sortable } = injectListContext();

const element = ref<HTMLElement | null>(null);
const handle = shallowRef<HTMLElement | null>(null);
const hasDragHandle = ref(false);

const isSortableEnabled = computed(() => sortable.value && props.id !== undefined && props.index !== undefined && !props.disabled);

const { isDragging } = useSortable({
  id: () => props.id ?? `__list-item-${props.index ?? 0}`,
  index: () => props.index ?? 0,
  element,
  handle,
  disabled: () => !isSortableEnabled.value,
});

function setHandleRef(value: HTMLElement | null) {
  handle.value = value;

  if (value) {
    hasDragHandle.value = true;
  }
}

provideListItemContext({
  isDragging,
  setHandleRef,
  hasDragHandle,
});
</script>

<template>
  <Primitive
    as="li"
    ref="element"
    role="listitem"
    data-slot="list-item"
    :data-dragging="isDragging ? '' : undefined"
    :data-sortable="sortable ? '' : undefined"
    :class="
      cn(
        'group/list-item bg-background',
        listItemVariants({ variant, size }),
        sortable && !hasDragHandle && 'touch-none cursor-grab active:cursor-grabbing',
        isDragging && 'z-10 shadow-lg',
        props.class,
      )
    "
  >
    <slot :is-dragging="isDragging" />
  </Primitive>
</template>
