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
import { Item, itemVariants } from "@vuzeno/ui/components/item";
import { cn } from "@vuzeno/ui/lib/utils";
import { createContext } from "reka-ui";
import { computed, type HTMLAttributes, ref, type Ref, shallowRef } from "vue";
import { injectListContext } from "./List.vue";

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

const list = injectListContext();

const variant = computed(() => list.variant.value);
const size = computed(() => list.size.value);

const element = ref<HTMLElement | null>(null);
const handle = shallowRef<HTMLElement | null>(null);
const hasDragHandle = ref(false);

const isSortableEnabled = computed(() => list.sortable.value && props.id !== undefined && props.index !== undefined && !props.disabled);

const { isDragging } = useSortable({
  id: computed(() => props.id ?? `__list-item-${props.index ?? 0}`),
  index: computed(() => props.index ?? 0),
  element,
  handle,
  disabled: computed(() => !isSortableEnabled.value),
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
  <Item
    as="li"
    ref="element"
    role="listitem"
    data-slot="list-item"
    :variant="variant"
    :size="size"
    :data-dragging="isDragging ? '' : undefined"
    :data-sortable="list.sortable.value ? '' : undefined"
    :class="
      cn(
        'group/list-item relative bg-background transition-all',
        list.sortable.value && !hasDragHandle && 'touch-none cursor-grab active:cursor-grabbing',
        isDragging && 'z-10 shadow-lg',
        props.class,
      )
    "
  >
    <slot :is-dragging="isDragging" />
  </Item>
</template>
