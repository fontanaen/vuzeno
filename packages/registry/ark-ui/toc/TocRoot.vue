<script lang="ts">
import { ark, createContext } from "@ark-ui/vue";
import type { ScrollSpyContext } from "@vuzeno/registry/ui/scroll-spy";
import type { ComputedRef, Ref } from "vue";

/**
 * - `straight` — continuous vertical rail with an active highlight segment
 * - `sharp` — path follows nested depth offsets with 45° diagonal turns
 * - `rounded` — path follows nested depth offsets with smooth S-curve turns
 */
export type TocTurn = "straight" | "sharp" | "rounded";

/**
 * - `segment` — primary highlight covers only the active item
 * - `fill` — primary highlight fills the rail from the start up to the active item
 */
export type TocIndicatorMode = "segment" | "fill";

export type TocItemRegistration = {
  value: string;
  depth: number;
  element: HTMLElement;
};

export type TocContext = {
  turn: ComputedRef<TocTurn>;
  indicator: ComputedRef<TocIndicatorMode>;
  activeValue: ComputedRef<string>;
  setActiveValue: (value: string) => void;
  registerItem: (item: TocItemRegistration) => void;
  unregisterItem: (value: string) => void;
  items: Ref<Map<string, TocItemRegistration>>;
  listElement: Ref<HTMLElement | null>;
  setListElement: (element: HTMLElement | null) => void;
};

export const [provideTocContext, injectTocContext] = createContext<TocContext>("TocContext");
</script>

<script setup lang="ts">
import { injectScrollSpyContext } from "@vuzeno/registry/ui/scroll-spy";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, ref, shallowRef } from "vue";

const props = withDefaults(
  defineProps<{
    turn?: TocTurn;
    indicator?: TocIndicatorMode;
    class?: HTMLAttributes["class"];
  }>(),
  {
    turn: "rounded",
    indicator: "segment",
  },
);

const modelValue = defineModel<string>("activeValue", { default: "" });

const scrollSpy = injectScrollSpyContext(undefined as unknown as ScrollSpyContext | undefined);

const activeValue = computed(() => {
  if (scrollSpy) {
    return scrollSpy.activeValue.value;
  }

  return modelValue.value;
});

function setActiveValue(value: string) {
  if (scrollSpy) {
    scrollSpy.setActiveValue(value);
    return;
  }

  modelValue.value = value;
}

const items = shallowRef(new Map<string, TocItemRegistration>());
const listElement = ref<HTMLElement | null>(null);

function registerItem(item: TocItemRegistration) {
  const next = new Map(items.value);
  next.set(item.value, item);
  items.value = next;
}

function unregisterItem(value: string) {
  if (!items.value.has(value)) {
    return;
  }

  const next = new Map(items.value);
  next.delete(value);
  items.value = next;
}

function setListElement(element: HTMLElement | null) {
  listElement.value = element;
}

const turn = computed(() => props.turn);
const indicator = computed(() => props.indicator);

provideTocContext({
  turn,
  indicator,
  activeValue,
  setActiveValue,
  registerItem,
  unregisterItem,
  items,
  listElement,
  setListElement,
});
</script>

<template>
  <ark.nav
    data-slot="toc"
    :data-turn="turn"
    :data-indicator="indicator"
    :class="cn('text-sm', props.class)"
  >
    <slot />
  </ark.nav>
</template>
