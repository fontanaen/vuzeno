<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { useResizeObserver } from "@vueuse/core";
import { cn } from "cnfast";
import { type HTMLAttributes, nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from "vue";
import { injectTocContext } from "./TocRoot.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

type Marker = {
  value: string;
  x: number;
  y: number;
  top: number;
  bottom: number;
};

const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)";
const DURATION_MS = 220;

const toc = injectTocContext();
const trackPath = ref("");
const highlight = ref({ top: 0, height: 0, visible: false });
const pathLength = ref(0);
const activeStart = ref(0);
const activeEnd = ref(0);
const canAnimate = ref(false);
const measurePathRef = useTemplateRef<SVGPathElement>("measurePathRef");

function depthX(depth: number) {
  if (depth <= 2) {
    return 1;
  }

  if (depth === 3) {
    return 13;
  }

  return 21;
}

function collectMarkers() {
  const list = toc.listElement.value;
  if (!list) {
    return [] as Marker[];
  }

  const listRect = list.getBoundingClientRect();
  const markers: Marker[] = [];

  for (const item of toc.items.value.values()) {
    if (!item.element.isConnected) {
      continue;
    }

    const rect = item.element.getBoundingClientRect();
    markers.push({
      value: item.value,
      x: depthX(item.depth),
      y: rect.top - listRect.top + rect.height / 2,
      top: rect.top - listRect.top,
      bottom: rect.bottom - listRect.top,
    });
  }

  return markers.sort((left, right) => left.y - right.y);
}

function appendDepthTransition(parts: string[], previous: Marker, next: Marker, rounded: boolean) {
  const midGap = (previous.bottom + next.top) / 2;
  const absDx = Math.abs(next.x - previous.x);
  const half = absDx / 2;
  const y1 = midGap - half;
  const y2 = midGap + half;

  parts.push(`L ${previous.x} ${y1}`);

  if (!rounded) {
    parts.push(`L ${next.x} ${y2}`);
    parts.push(`L ${next.x} ${next.top}`);
    return;
  }

  const midY = (y1 + y2) / 2;
  parts.push(`C ${previous.x} ${midY}, ${next.x} ${midY}, ${next.x} ${y2}`);
  parts.push(`L ${next.x} ${next.top}`);
}

function buildCircuitPath(markers: Marker[], endIndex: number, rounded: boolean, edge: "top" | "bottom") {
  const first = markers[0];
  if (!first || endIndex < 0) {
    return "";
  }

  const end = Math.min(endIndex, markers.length - 1);
  const parts = [`M ${first.x} ${first.top}`];

  for (let index = 0; index <= end; index++) {
    const current = markers[index];
    if (!current) {
      continue;
    }

    if (index === end) {
      parts.push(`L ${current.x} ${edge === "top" ? current.top : current.bottom}`);
      break;
    }

    parts.push(`L ${current.x} ${current.bottom}`);

    const next = markers[index + 1];
    if (!next) {
      break;
    }

    if (current.x === next.x) {
      parts.push(`L ${next.x} ${next.top}`);
      continue;
    }

    appendDepthTransition(parts, current, next, rounded);
  }

  return parts.join(" ");
}

function measurePathLength(pathD: string) {
  const element = measurePathRef.value;
  if (!element || !pathD) {
    return 0;
  }

  element.setAttribute("d", pathD);
  return element.getTotalLength();
}

async function updateGeometry() {
  const markers = collectMarkers();
  const activeValue = toc.activeValue.value;
  const activeIndex = markers.findIndex((marker) => marker.value === activeValue);
  const turn = toc.turn.value;
  const fill = toc.indicator.value === "fill";

  if (markers.length === 0) {
    trackPath.value = "";
    pathLength.value = 0;
    activeStart.value = 0;
    activeEnd.value = 0;
    highlight.value = { top: 0, height: 0, visible: false };
    return;
  }

  if (turn === "straight") {
    const first = markers[0];
    const last = markers[markers.length - 1];
    if (!first || !last) {
      return;
    }

    trackPath.value = `M 1 ${first.top} L 1 ${last.bottom}`;
    pathLength.value = 0;
    activeStart.value = 0;
    activeEnd.value = 0;

    if (activeIndex < 0) {
      highlight.value = { top: 0, height: 0, visible: false };
      return;
    }

    const active = markers[activeIndex];
    if (!active) {
      highlight.value = { top: 0, height: 0, visible: false };
      return;
    }

    if (fill) {
      highlight.value = {
        top: first.top,
        height: Math.max(active.bottom - first.top, 14),
        visible: true,
      };
      return;
    }

    highlight.value = {
      top: active.top,
      height: Math.max(active.bottom - active.top, 14),
      visible: true,
    };
    return;
  }

  const rounded = turn === "rounded";
  const fullPath = buildCircuitPath(markers, markers.length - 1, rounded, "bottom");
  trackPath.value = fullPath;
  highlight.value = { top: 0, height: 0, visible: false };

  await nextTick();

  const total = measurePathLength(fullPath);
  pathLength.value = total;

  if (activeIndex < 0 || total === 0) {
    activeStart.value = 0;
    activeEnd.value = 0;
    return;
  }

  const startLength = fill ? 0 : measurePathLength(buildCircuitPath(markers, activeIndex, rounded, "top"));
  const endLength = measurePathLength(buildCircuitPath(markers, activeIndex, rounded, "bottom"));
  activeStart.value = startLength;
  activeEnd.value = endLength;

  if (!canAnimate.value) {
    requestAnimationFrame(() => {
      canAnimate.value = true;
    });
  }
}

useResizeObserver(
  () => toc.listElement.value,
  () => {
    updateGeometry();
  },
);

watch(
  () => [toc.activeValue.value, toc.items.value, toc.turn.value, toc.indicator.value, toc.listElement.value] as const,
  async () => {
    await nextTick();
    await updateGeometry();
  },
  { flush: "post", immediate: true },
);

const frame = ref(0);

function onScrollOrResize() {
  cancelAnimationFrame(frame.value);
  frame.value = requestAnimationFrame(() => {
    updateGeometry();
  });
}

onMounted(async () => {
  await nextTick();
  await updateGeometry();
  window.addEventListener("scroll", onScrollOrResize, true);
  window.addEventListener("resize", onScrollOrResize);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(frame.value);
  window.removeEventListener("scroll", onScrollOrResize, true);
  window.removeEventListener("resize", onScrollOrResize);
});
</script>

<template>
  <div
    data-slot="toc-indicator"
    :data-turn="toc.turn.value"
    :data-indicator="toc.indicator.value"
    aria-hidden="true"
    :class="cn('pointer-events-none absolute inset-0 overflow-visible', props.class)"
  >
    <svg
      class="absolute inset-0 size-full overflow-visible"
      fill="none"
    >
      <path
        ref="measurePathRef"
        class="invisible"
        fill="none"
      />
      <path
        :d="trackPath"
        class="stroke-border"
        stroke-width="2"
        stroke-linecap="round"
        :stroke-linejoin="toc.turn.value === 'sharp' ? 'miter' : 'round'"
      />
      <path
        v-if="toc.turn.value !== 'straight' && trackPath && activeEnd > 0"
        :d="trackPath"
        class="stroke-primary"
        stroke-width="2"
        stroke-linecap="round"
        :stroke-linejoin="toc.turn.value === 'sharp' ? 'miter' : 'round'"
        :style="{
          strokeDasharray: `${Math.max(activeEnd - activeStart, 0)} ${Math.max(pathLength, 1)}`,
          strokeDashoffset: -activeStart,
          transition: canAnimate
            ? `stroke-dashoffset ${DURATION_MS}ms ${EASE_OUT}, stroke-dasharray ${DURATION_MS}ms ${EASE_OUT}`
            : 'none',
        }"
      />
    </svg>
    <div
      v-if="highlight.visible"
      class="bg-primary absolute z-10 w-0.75 rounded-full"
      :style="{
        top: `${highlight.top}px`,
        height: `${highlight.height}px`,
        left: '0px',
        transition: canAnimate
          ? `top ${DURATION_MS}ms ${EASE_OUT}, height ${DURATION_MS}ms ${EASE_OUT}`
          : 'none',
      }"
    />
  </div>
</template>
