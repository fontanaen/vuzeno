<script lang="ts">
export type MotionListLayout = "vertical" | "horizontal";

export type MotionListTransitionProperties = {
  duration: number;
  easing: CSSProperties["transition-timing-function"];
};

export type MotionListTransition = {
  add?: MotionListTransitionProperties;
  remove?: MotionListTransitionProperties;
  move?: MotionListTransitionProperties;
};

export type MotionListContext = {
  registerItem: (element: HTMLElement) => void;
  unregisterItem: (element: HTMLElement) => void;
  sortable: ComputedRef<boolean>;
};

export const [injectMotionListContext, provideMotionListContext] = createContext<MotionListContext>("MotionListContext");
</script>

<script setup lang="ts">
import { DragDropProvider } from "@dnd-kit/vue";
import { useMediaQuery } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { createContext } from "reka-ui";
import { type ComponentPublicInstance, computed, type HTMLAttributes, nextTick, onMounted, reactive, TransitionGroup, useTemplateRef, ref, type CSSProperties, type ComputedRef } from "vue";

const props = withDefaults(
  defineProps<{
    transition?: MotionListTransition;
    sortable: boolean;
    orientation?: MotionListLayout;
    disabled?: boolean;
    as?: string;
    class?: HTMLAttributes["class"];
  }>(),
  {
    orientation: "vertical",
    sortable: false,
    disabled: false,
    as: "div",
  },
);

const DEFAULT_ADD: MotionListTransitionProperties = {
  duration: 180,
  easing: "cubic-bezier(0.23, 1, 0.32, 1)",
};

const DEFAULT_REMOVE: MotionListTransitionProperties = {
  duration: 140,
  easing: "cubic-bezier(0.23, 1, 0.32, 1)",
};

const DEFAULT_MOVE: MotionListTransitionProperties = {
  duration: 250,
  easing: "cubic-bezier(0.77, 0, 0.175, 1)",
};

const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

const items = reactive(new Set<HTMLElement>());
const leavingElements = reactive(new Set<{ el: Element; done: () => void }>());
const ongoingAnimations = reactive(new Map<Element, Animation>());

const isNextTickScheduled = ref(false);
const nextTickTimeout = ref<ReturnType<typeof setTimeout> | null>(null);

const positionSnapshots = new Map<HTMLElement, DOMRect>();
const transitionGroup = useTemplateRef<ComponentPublicInstance>("transitionGroup");

const transitions = computed(() => {
  return {
    add: { ...DEFAULT_ADD, ...props.transition?.add },
    remove: { ...DEFAULT_REMOVE, ...props.transition?.remove },
    move: { ...DEFAULT_MOVE, ...props.transition?.move }
  }
})

function registerItem(element: HTMLElement) {
  items.add(element);
}

function unregisterItem(element: HTMLElement) {
  items.delete(element);
}

function onEnter(element: Element, done: () => void) {
  const animation = element.animate([
    { opacity: 0, transform: `translateY(5px) scale(0.95)`, },
    { opacity: 1, transform: `translateY(0) scale(1)`, },
  ], {
    duration: transitions.value.add.duration,
    easing: transitions.value.add.easing,
  })

  animation.onfinish = () => {
    done();
  };

  animation.oncancel = done;
}

function onLeave(element: Element, done: () => void) {
  if (ongoingAnimations.has(element)) {
    ongoingAnimations.get(element)?.cancel()
  }

  leavingElements.add({ el: element, done });

  if (isNextTickScheduled.value) {
    return
  }

  isNextTickScheduled.value = true;

  nextTick(() => {
    if (nextTickTimeout.value) {
      clearTimeout(nextTickTimeout.value);
      nextTickTimeout.value = null;
    }

    isNextTickScheduled.value = false;

    const batch = [...leavingElements]
    leavingElements.clear()

    const parent = (transitionGroup.value?.$el as HTMLElement);

    for (const animation of ongoingAnimations.values()) {
      animation.cancel()
    }

    updatePositionSnapshot(Array.from(items.values()));

    for (const { el } of batch) {
      parent.appendChild(el);
    }

    for (const { el, done } of batch) {
      const oldPosition = positionSnapshots.get(el as HTMLElement);

      if (!oldPosition) {
        done();
        continue;
      }

      const newPosition = el.getBoundingClientRect();

      const delta = {
        x: oldPosition.left - newPosition.left,
        y: oldPosition.top - newPosition.top,
      };

      const animation = el.animate([
        { opacity: 1, transform: `translate(${delta.x}px, ${delta.y}px) scale(1)`, },
        { opacity: 0, transform: `translate(${delta.x}px, ${delta.y - 5}px) scale(0.95)`, },
      ], {
        duration: transitions.value.remove.duration,
        easing: transitions.value.remove.easing,
      })

      ongoingAnimations.set(el, animation)

      animation.onfinish = () => {
        ongoingAnimations.delete(el)
        done();
      };

      animation.oncancel = () => {
        ongoingAnimations.delete(el)
        done();
      };
    }

    animate(Array.from(items.values()).filter((item) => !batch.some(({ el }) => el === item)));

    nextTickTimeout.value = setTimeout(() => {
      updatePositionSnapshot(Array.from(items.values()));
    }, transitions.value.move.duration);
  });
}

function updatePositionSnapshot(elements: HTMLElement[]) {
  for (const element of elements) {
    const position = element.getBoundingClientRect();
    positionSnapshots.set(element, position);
  }
}

function animate(elements: HTMLElement[]) {
  for (const element of elements) {
    const oldPosition = positionSnapshots.get(element);

    if (!oldPosition) {
      continue;
    }

    const newPosition = element.getBoundingClientRect();

    const delta = {
      x: oldPosition.left - newPosition.left,
      y: oldPosition.top - newPosition.top,
    };

    element.style.transform = `translate(${delta.x}px, ${delta.y}px)`;

    element.animate([
      { transform: `translate(${delta.x}px, ${delta.y}px)` },
      { transform: `translate(0, 0)` },
    ], {
      duration: transitions.value.move.duration,
      easing: transitions.value.move.easing,
    }).onfinish = () => {
      element.style.transform = "none";
    };
  }
}

onMounted(() => {
  updatePositionSnapshot(Array.from(items.values()));
});

provideMotionListContext({ registerItem, unregisterItem, sortable: computed(() => props.sortable) });
</script>

<template>
  <DragDropProvider>
    <TransitionGroup
      :tag="as"
      ref="transitionGroup"
      data-slot="motion-list"
      :data-orientation="orientation"
      :data-disabled="disabled"
      :class="cn('relative flex data-[orientation=vertical]:flex-col data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:items-center', props.class)"
      move-class="transition-transform duration-250 ease-out"
      :css="false"
      @enter="onEnter"
      @leave="onLeave"
    >
      <slot />
    </TransitionGroup>
  </DragDropProvider>
</template>
