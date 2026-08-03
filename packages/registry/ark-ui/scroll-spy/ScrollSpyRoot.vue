<script lang="ts">
import { createContext } from "@ark-ui/vue";
import type { ComputedRef, Ref } from "vue";

export type ScrollSpyOrientation = "vertical" | "horizontal";

export type ScrollSpyContext = {
  orientation: ComputedRef<ScrollSpyOrientation>;
  activeValue: Ref<string>;
  setActiveValue: (value: string) => void;
  registerItem: (value: string, element: HTMLElement) => void;
  unregisterItem: (value: string) => void;
  setViewport: (element: HTMLElement | null) => void;
  requestUpdate: () => void;
  offset: ComputedRef<number>;
};

export const [provideScrollSpyContext, injectScrollSpyContext] = createContext<ScrollSpyContext>("ScrollSpyContext");
</script>

<script setup lang="ts">
import { cn } from "cnfast";
import { computed, type HTMLAttributes, nextTick, onBeforeUnmount, onMounted, ref, shallowRef, triggerRef, watch } from "vue";

const props = withDefaults(
  defineProps<{
    orientation?: ScrollSpyOrientation;
    /**
     * Distance from the top of the scroll root (px or ratio 0–1) used as the active threshold.
     * @default 0.25
     */
    offset?: number;
    root?: HTMLElement | null;
    class?: HTMLAttributes["class"];
  }>(),
  {
    orientation: "vertical",
    offset: 0.25,
    root: null,
  },
);

const activeValue = defineModel<string>({ default: "" });

const items = shallowRef(new Map<string, HTMLElement>());
const viewportElement = ref<HTMLElement | null>(null);
const orientation = computed(() => props.orientation);
const offset = computed(() => props.offset);

function setActiveValue(value: string) {
  if (!value || activeValue.value === value) {
    return;
  }

  activeValue.value = value;
}

function registerItem(value: string, element: HTMLElement) {
  items.value.set(value, element);
  triggerRef(items);
}

function unregisterItem(value: string) {
  if (!items.value.has(value)) {
    return;
  }

  items.value.delete(value);
  triggerRef(items);
}

function setViewport(element: HTMLElement | null) {
  viewportElement.value = element;
}

function resolveScrollRoot() {
  return viewportElement.value ?? props.root;
}

function resolveThreshold(rootElement: HTMLElement | null) {
  const raw = props.offset;
  if (raw > 0 && raw <= 1) {
    const height = rootElement?.clientHeight ?? window.innerHeight;
    return height * raw;
  }

  return raw;
}

function updateActiveValue() {
  if (items.value.size === 0) {
    return;
  }

  const rootElement = resolveScrollRoot();
  const sorted = [...items.value.entries()].sort((left, right) => {
    return left[1].getBoundingClientRect().top - right[1].getBoundingClientRect().top;
  });

  const rootTop = rootElement?.getBoundingClientRect().top ?? 0;
  const threshold = rootTop + resolveThreshold(rootElement);
  let next = sorted[0]?.[0] ?? "";

  for (const [value, element] of sorted) {
    if (element.getBoundingClientRect().top <= threshold) {
      next = value;
      continue;
    }

    break;
  }

  if (next) {
    setActiveValue(next);
  }
}

const frame = shallowRef(0);

function requestUpdate() {
  cancelAnimationFrame(frame.value);
  frame.value = requestAnimationFrame(updateActiveValue);
}

function onWindowScroll() {
  if (resolveScrollRoot()) {
    return;
  }

  requestUpdate();
}

watch(
  () => [props.root, props.offset] as const,
  () => {
    requestUpdate();
  },
);

onMounted(() => {
  nextTick(() => {
    requestUpdate();
  });
  window.addEventListener("scroll", onWindowScroll, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
});

onBeforeUnmount(() => {
  cancelAnimationFrame(frame.value);
  window.removeEventListener("scroll", onWindowScroll);
  window.removeEventListener("resize", requestUpdate);
});

provideScrollSpyContext({
  orientation,
  activeValue,
  setActiveValue,
  registerItem,
  unregisterItem,
  setViewport,
  requestUpdate,
  offset,
});
</script>

<template>
  <div
    data-slot="scroll-spy"
    :data-orientation="orientation"
    :class="cn(props.class)"
  >
    <slot />
  </div>
</template>
