<script lang="ts">
import { whenever } from "@vueuse/core";
import { createContext, Primitive } from "reka-ui";
import { onMounted, ref, toRefs, useTemplateRef, type Ref } from "vue";
import type ImageZoomSource from "./ImageZoomSource.vue";

export type ImageZoomDirection = "in" | "out";

export type ImageZoomProviderProps = {
  /**
   * The current scale of the zoom.
   * @defaultValue 1
   */
  scale?: number;

  /**
   * The maximun scale of the zoom.
   * @defaultValue 3
   */
  maxScale?: number;

  /**
   * The step of the zoom. By default, on click to reach the scale.
   * @defaultValue 2
   */
  step?: number;

  /**
   * Whether zoom should follow the cursor.
   * @defaultValue true
   */
  followCursor?: boolean;

  /**
   * Whether to zoom when clicking on the image.
   * @defaultValue true
   */
  zoomOnClick?: boolean;

  /**
   * Whether to reset the zoom when clicking outside of the image.
   * @defaultValue false
   */
  resetOnClickOutside?: boolean;

  /**
   * Whether the zoom is disabled.
   * @defaultValue false
   */
  disabled?: boolean;
};

export type ImageZoomProviderEmits = {
  (e: "zoom-in"): void;
  (e: "zoom-out"): void;
  (e: "zoom-reset"): void;
  (e: "update:scale", scale: number): void;
};

export type ImageZoomProviderContext<P extends ImageZoomProviderProps> = {
  scale: Ref<NonNullable<P["scale"]>>;
  maxScale: Ref<NonNullable<P["maxScale"]>>;
  step: Ref<NonNullable<P["step"]>>;
  disabled: Ref<NonNullable<P["disabled"]>>;
  followCursor: Ref<NonNullable<P["followCursor"]>>;
  zoomOnClick: Ref<NonNullable<P["zoomOnClick"]>>;
  zoomDirection: Ref<ImageZoomDirection>;
  zoomContainerRef: Ref<HTMLElement | null | undefined>;
  zoomTranslate: Ref<{ x: number; y: number; z: number }>;
  resetOnClickOutside: Ref<NonNullable<P["resetOnClickOutside"]>>;
  zoomImageSourceRef: Ref<typeof ImageZoomSource | null | undefined>;
  useZoomImageSourceRef: (key: string) => void;
  onUpdateScale: (value: number) => number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
};

export const [injectImageZoomProviderContext, provideImageZoomProviderContext] = createContext<ImageZoomProviderContext<ImageZoomProviderProps>>("ImageZoomProvider");
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ImageZoomProviderProps>(), {
  scale: 1,
  maxScale: 3,
  step: 2,
  disabled: false,
  followCursor: true,
  zoomOnClick: true,
  resetOnClickOutside: false
})

const scale = defineModel<number>('scale', {
  default: 1,
})

const { maxScale, step, disabled, zoomOnClick, resetOnClickOutside } = toRefs(props)

const followCursor = ref(props.followCursor)
const zoomDirection = ref<ImageZoomDirection>('in')
const zoomContainerRef = ref<HTMLElement | null | undefined>(null)
const zoomImageSourceRef = ref<typeof ImageZoomSource | null | undefined>(null)
const zoomTranslate = ref({ x: 0, y: 0, z: 0 })

function onUpdateScale(value: number) {
  return scale.value = Math.max(Math.min(value, maxScale.value), 1)
}

provideImageZoomProviderContext({
  scale,
  maxScale,
  step,
  disabled,
  followCursor,
  zoomOnClick,
  zoomDirection,
  zoomContainerRef,
  zoomTranslate,
  resetOnClickOutside,
  zoomImageSourceRef,
  useZoomImageSourceRef(key) {
    const ref = useTemplateRef<typeof ImageZoomSource>(key);

    onMounted(() => {
      zoomImageSourceRef.value = ref.value
    })
  },
  onZoomIn() {
    onUpdateScale(scale.value + step.value)
  },
  onZoomOut() {
    onUpdateScale(scale.value - step.value)
  },
  onZoomReset() {
    onUpdateScale(1)
  },
  onUpdateScale
})

whenever(() => scale.value === 1, () => zoomDirection.value = 'in');
whenever(() => scale.value === maxScale.value, () => zoomDirection.value = 'out');
</script>

<template>
  <Primitive>
    <slot />
  </Primitive>
</template>