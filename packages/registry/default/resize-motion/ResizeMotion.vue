<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { type CSSProperties, computed, type HTMLAttributes, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = withDefaults(
  defineProps<
    {
      disabled?: boolean;
      minHeight?: number | string;
      maxHeight?: number | string;
      animation?: "linear" | "spring" | "none";
      duration?: number;
      easing?: string;
      transition?: string;
      overflow?: CSSProperties["overflow"];
      viewportOverflow?: CSSProperties["overflow"];
      class?: HTMLAttributes["class"];
      style?: HTMLAttributes["style"];
    } & PrimitiveProps
  >(),
  {
    as: "div",
    asChild: false,
    animation: "linear",
    duration: 250,
    overflow: "hidden",
    viewportOverflow: "auto",
  },
);

const emit = defineEmits<{
  "resize-start": [payload: { height: number; contentHeight: number }];
  resize: [payload: { height: number; contentHeight: number }];
  "resize-end": [payload: { height: number; contentHeight: number }];
}>();

const contentElement = ref<HTMLElement>();
const height = ref<number>();
const hasMeasured = ref(false);
const isResizing = ref(false);
const resizeEndTimer = ref<ReturnType<typeof setTimeout>>();
const lastPayload = ref<{ height: number; contentHeight: number }>();

function toCssLength(value: number | string | undefined) {
  if (typeof value === "number") {
    return `${value}px`;
  }

  return value;
}

function toPixelValue(value: number | string | undefined) {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string" && value.trim().endsWith("px")) {
    return Number.parseFloat(value);
  }

  return undefined;
}

function clampHeight(contentHeight: number) {
  const minHeight = toPixelValue(props.minHeight);
  const maxHeight = toPixelValue(props.maxHeight);

  return Math.min(Math.max(contentHeight, minHeight ?? 0), maxHeight ?? Number.POSITIVE_INFINITY);
}

function completeResize() {
  if (!isResizing.value || !lastPayload.value) {
    return;
  }

  isResizing.value = false;
  emit("resize-end", lastPayload.value);
}

function scheduleResizeEnd() {
  if (resizeEndTimer.value) {
    clearTimeout(resizeEndTimer.value);
  }

  resizeEndTimer.value = setTimeout(completeResize, props.duration + 50);
}

function updateHeight() {
  if ((props.disabled && hasMeasured.value) || !contentElement.value) {
    return;
  }

  const contentHeight = contentElement.value.offsetHeight;
  const nextHeight = clampHeight(contentHeight);

  if (height.value === nextHeight) {
    return;
  }

  const wasMeasured = hasMeasured.value;
  const payload = { height: nextHeight, contentHeight };
  lastPayload.value = payload;

  if (wasMeasured) {
    isResizing.value = true;
    emit("resize-start", payload);

    if (props.animation !== "none") {
      scheduleResizeEnd();
    }
  }

  height.value = nextHeight;
  hasMeasured.value = true;
  emit("resize", payload);

  if (wasMeasured && props.animation === "none") {
    completeResize();
  }
}

function onTransitionEnd(event: TransitionEvent) {
  if (event.propertyName !== "height") {
    return;
  }

  if (resizeEndTimer.value) {
    clearTimeout(resizeEndTimer.value);
  }

  completeResize();
}

const rootStyle = computed<CSSProperties>(() => ({
  height: height.value === undefined ? undefined : `${height.value}px`,
  minHeight: toCssLength(props.minHeight),
  maxHeight: toCssLength(props.maxHeight),
  overflow: props.overflow,
  transition:
    props.disabled || props.animation === "none" ? undefined : (props.transition ?? `height ${props.duration}ms ${props.easing ?? (props.animation === "spring" ? "cubic-bezier(0.34, 1.56, 0.64, 1)" : "linear")}`),
}));

const innerViewportStyle = computed<CSSProperties>(() => ({
  height: height.value === undefined ? undefined : "100%",
  overflow: props.viewportOverflow,
}));

useResizeObserver(contentElement, updateHeight);

watch(
  () => [props.disabled, props.minHeight, props.maxHeight],
  async () => {
    await nextTick();
    updateHeight();
  },
  { flush: "post" },
);

onMounted(async () => {
  await nextTick();
  updateHeight();
});

onBeforeUnmount(() => {
  if (resizeEndTimer.value) {
    clearTimeout(resizeEndTimer.value);
  }
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    data-slot="resize-motion"
    :data-disabled="disabled ? '' : undefined"
    :data-animation="animation"
    :class="cn('relative', props.class)"
    :style="[rootStyle, props.style]"
    @transitionend="onTransitionEnd"
  >
    <div
      data-slot="resize-motion-viewport"
      :style="innerViewportStyle"
    >
      <div ref="contentElement" data-slot="resize-motion-content">
        <slot />
      </div>
    </div>
  </Primitive>
</template>
