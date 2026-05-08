<script lang="ts">
export type ListVariant = "default" | "outline" | "muted";
export type ListSize = "default" | "sm";

export type ListReorderEvent = {
  id: string | number;
  from: number;
  to: number;
};

export type ListTransitionProps = {
  name?: string;
  duration?: number | { enter: number; leave: number };
  enterFromClass?: string;
  enterActiveClass?: string;
  enterToClass?: string;
  leaveFromClass?: string;
  leaveActiveClass?: string;
  leaveToClass?: string;
  moveClass?: string;
};

export type ListContext = {
  variant: Ref<ListVariant>;
  size: Ref<ListSize>;
  sortable: Ref<boolean>;
};

export const [injectListContext, provideListContext] = createContext<ListContext>("ListContext");
</script>

<script setup lang="ts">
import { DragDropProvider, type DragEndEvent } from "@dnd-kit/vue";
import { isSortable } from "@dnd-kit/vue/sortable";
import { cn } from "@vuzeno/ui/lib/utils";
import { createContext } from "reka-ui";
import { computed, type HTMLAttributes, type Ref } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: ListVariant;
    size?: ListSize;
    sortable?: boolean;
    animated?: boolean;
    transition?: ListTransitionProps;
    tag?: string;
    class?: HTMLAttributes["class"];
  }>(),
  {
    variant: "default",
    size: "default",
    sortable: false,
    animated: true,
    tag: "ul",
  },
);

const emit = defineEmits<{
  reorder: [event: ListReorderEvent];
}>();

const variant = computed(() => props.variant);
const size = computed(() => props.size);
const sortable = computed(() => props.sortable);

provideListContext({ variant, size, sortable });

const defaultTransition: ListTransitionProps = {
  moveClass: "transition-all duration-500 ease",
  enterActiveClass: "transition-all duration-500 ease",
  leaveActiveClass: "transition-all duration-500 ease absolute w-full",
  enterFromClass: "opacity-0 scale-95 translate-y-2",
  leaveToClass: "opacity-0 scale-95 translate-y-2",
};

const transitionGroupProps = computed(() => {
  if (!props.animated) {
    return { tag: props.tag, css: false } as const;
  }

  const userTransition = props.transition ?? {};

  if (userTransition.name) {
    return {
      tag: props.tag,
      name: userTransition.name,
      duration: userTransition.duration,
    };
  }

  return {
    tag: props.tag,
    'enter-from-class': userTransition.enterFromClass ?? defaultTransition.enterFromClass,
    'enter-active-class': userTransition.enterActiveClass ?? defaultTransition.enterActiveClass,
    'enter-to-class': userTransition.enterToClass,
    'leave-from-class': userTransition.leaveFromClass,
    'leave-active-class': userTransition.leaveActiveClass ?? defaultTransition.leaveActiveClass,
    'leave-to-class': userTransition.leaveToClass ?? defaultTransition.leaveToClass,
    'move-class': userTransition.moveClass ?? defaultTransition.moveClass,
    duration: userTransition.duration,
  };
});

function onDragEnd(event: DragEndEvent) {
  if (event.canceled) {
    return;
  }

  const { source } = event.operation;

  if (!isSortable(source)) {
    return;
  }

  const { initialIndex, index, id } = source;

  if (initialIndex === index) {
    return;
  }

  emit("reorder", {
    id: id as string | number,
    from: initialIndex,
    to: index,
  });
}
</script>

<template>
  <DragDropProvider @drag-end="onDragEnd">
    <TransitionGroup
      v-bind="transitionGroupProps"
      leave-active-class="absolute"
      role="list"
      data-slot="list"
      :data-variant="variant"
      :data-size="size"
      :data-sortable="sortable ? '' : undefined"
      :class="cn('group/list relative flex flex-col', props.class)"
    >
      <slot />
    </TransitionGroup>
  </DragDropProvider>
</template>
