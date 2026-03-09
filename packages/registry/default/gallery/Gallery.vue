<script lang="ts">
export type CarouselViewerProps = {
  class?: HTMLAttributes["class"];

  initialIndex?: number;

  hideNavigationOnZoom?: boolean;

  /** Zoom Options */
  zoomScale?: number;
  zoomMaxScale?: number;
  zoomStep?: number;
  zoomFollowCursor?: boolean;
  zoomOnClick?: boolean;
  zoomResetOnClickOutside?: boolean;
  zoomDisabled?: boolean;

  orientation?: "horizontal" | "vertical";
};

export type CarouselViewerContext<P extends CarouselViewerProps> = {
  selectedIndex: Ref<number>;
  totalItems: Ref<number>;
  canScrollNext: Ref<boolean>;
  canScrollPrev: Ref<boolean>;
  scrollNext: () => void;
  scrollPrev: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  zoomReset: () => void;
  orientation: Ref<NonNullable<P["orientation"]>>;
  hideNavigation: Ref<boolean>;
  zoomScale: Ref<NonNullable<P["zoomScale"]>>;
  zoomMaxScale: Ref<NonNullable<P["zoomMaxScale"]>>;
  zoomStep: Ref<NonNullable<P["zoomStep"]>>;
  zoomFollowCursor: Ref<NonNullable<P["zoomFollowCursor"]>>;
  zoomOnClick: Ref<NonNullable<P["zoomOnClick"]>>;
  zoomResetOnClickOutside: Ref<NonNullable<P["zoomResetOnClickOutside"]>>;
  zoomDisabled: Ref<NonNullable<P["zoomDisabled"]>>;
};

export const [injectCarouselViewerContext, provideCarouselViewerContext] = createContext<CarouselViewerContext<CarouselViewerProps>>("CarouselViewer");
</script>

<script setup lang="ts">
import { watchOnce } from "@vueuse/core";
import { Carousel, type CarouselApi } from "@vuzeno/ui/components/carousel";
import { createContext } from "reka-ui";
import { type Ref, ref, toRefs, type HTMLAttributes, computed } from "vue";

const props = withDefaults(defineProps<CarouselViewerProps>(), {
  initialIndex: 0,
  zoomScale: 1,
  zoomMaxScale: 3,
  zoomStep: 1,
  zoomFollowCursor: true,
  zoomOnClick: false,
  zoomResetOnClickOutside: false,
  zoomDisabled: false,
  hideNavigationOnZoom: true,
  orientation: "horizontal",
});

const zoomScale = defineModel<number>('zoomScale', { default: 1 });

const { zoomMaxScale, zoomStep, zoomFollowCursor, zoomOnClick, zoomResetOnClickOutside, zoomDisabled, orientation, hideNavigationOnZoom } = toRefs(props)

const api = ref<CarouselApi>();
const selectedIndex = ref(0);
const totalItems = ref(0);
const canScrollNext = ref(false);
const canScrollPrev = ref(false);

const hideNavigation = computed(() => hideNavigationOnZoom.value && zoomScale.value > 1);

function onUpdateZoomScale(value: number) {
  zoomScale.value = Math.max(Math.min(value, zoomMaxScale.value), 1);
}

provideCarouselViewerContext({
  selectedIndex,
  totalItems,
  canScrollNext,
  canScrollPrev,
  scrollNext() {
    api.value?.scrollNext();
  },
  scrollPrev() {
    api.value?.scrollPrev();
  },
  zoomIn() {
    onUpdateZoomScale(zoomScale.value + zoomStep.value);
  },
  zoomOut() {
    onUpdateZoomScale(zoomScale.value - zoomStep.value);
  },
  zoomReset() {
    onUpdateZoomScale(1);
  },
  orientation,
  hideNavigation,
  zoomScale,
  zoomMaxScale,
  zoomStep,
  zoomFollowCursor,
  zoomOnClick,
  zoomResetOnClickOutside,
  zoomDisabled,
})

watchOnce(api, (api) => {
  if (!api) {
    return;
  }

  selectedIndex.value = api.selectedScrollSnap() + 1;
  totalItems.value = api.scrollSnapList().length
  canScrollNext.value = api.canScrollNext();
  canScrollPrev.value = api.canScrollPrev();

  api.on("select", () => {
    onUpdateZoomScale(1);
    selectedIndex.value = api.selectedScrollSnap() + 1;
    totalItems.value = api.scrollSnapList().length
    canScrollNext.value = api.canScrollNext();
    canScrollPrev.value = api.canScrollPrev();
  });
});
</script>

<template>
  <Carousel 
    :class="props.class"
    :opts="{
      startIndex: initialIndex,
    }"
    @init-api="api = $event" 
  >
    <slot :selected-index="selectedIndex" :is-zoomed="zoomScale > 1" />
  </Carousel>
</template>