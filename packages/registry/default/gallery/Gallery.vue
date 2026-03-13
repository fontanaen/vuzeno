<script lang="ts">
export type GalleryProps = {
  class?: HTMLAttributes["class"];

  /**
   * The index of the initial item to display.
   */
  initialIndex?: number;

  /**
   * Whether to hide the navigation when the zoom scale is greater than 1.
   */
  hideNavigationOnZoom?: boolean;

  /**
   * Zoom scale
   */
  zoomScale?: number;

  /**
   * The maximum zoom scale.
   */
  zoomMaxScale?: number;

  /**
   * The step size for zooming.
   */
  zoomStep?: number;

  /**
   * Whether to follow the cursor when zooming.
   */
  zoomFollowCursor?: boolean;

  /**
   * Whether to zoom on click.
   */
  zoomOnClick?: boolean;

  /**
   * Whether to reset the zoom when clicking outside.
   */
  zoomResetOnClickOutside?: boolean;

  /**
   * Whether to disable the zoom.
   */
  zoomDisabled?: boolean;

  /**
   * The orientation of the gallery.
   */
  orientation?: "horizontal" | "vertical";
};

export type GalleryEmits = (e: "update:selectedIndex", index: number) => void;

export type GalleryContext<P extends GalleryProps> = {
  selectedIndex: Ref<number>;
  totalItems: Ref<number>;
  canScrollNext: Ref<boolean>;
  canScrollPrev: Ref<boolean>;
  scrollNext(): void;
  scrollPrev(): void;
  zoomIn(): void;
  zoomOut(): void;
  zoomReset(): void;
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

export const [injectGalleryContext, provideGalleryContext] = createContext<GalleryContext<GalleryProps>>("Gallery");
</script>

<script setup lang="ts">
import { watchOnce } from "@vueuse/core";
import { Carousel, type CarouselApi } from "@vuzeno/ui/components/carousel";
import { createContext } from "reka-ui";
import { type Ref, ref, toRefs, type HTMLAttributes, computed } from "vue";

const props = withDefaults(defineProps<GalleryProps>(), {
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

const emits = defineEmits<GalleryEmits>();

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

provideGalleryContext({
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

  selectedIndex.value = api.selectedScrollSnap();

  totalItems.value = api.scrollSnapList().length
  canScrollNext.value = api.canScrollNext();
  canScrollPrev.value = api.canScrollPrev();

  api.on("select", () => {
    onUpdateZoomScale(1);
    selectedIndex.value = api.selectedScrollSnap();
    totalItems.value = api.scrollSnapList().length
    canScrollNext.value = api.canScrollNext();
    canScrollPrev.value = api.canScrollPrev();
    emits("update:selectedIndex", selectedIndex.value);
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