import { type MaybeRefOrGetter, type Ref, ref, toValue } from "vue";

export type PinchZoomProps = {
  scale: Ref<number>;
  maxScale: Ref<number>;
  zoomContainerRef: Ref<HTMLElement | null | undefined>;
  zoomTranslate: Ref<{ x: number; y: number; z: number }>;
  enabled?: MaybeRefOrGetter<boolean>;
};

export function usePinchZoom(props: PinchZoomProps) {
  const enabled = toValue(props.enabled) ?? true;

  const initialDistance = ref<number>(0);
  const initialScale = ref<number>(props.scale.value);

  const initialTouch = ref<{ x: number; y: number }>({ x: 0, y: 0 });
  const initialTranslate = ref<{ x: number; y: number }>({ x: 0, y: 0 });

  function calculateDistance(ev: TouchEvent) {
    if (ev.touches.length !== 2) {
      return 0;
    }

    return Math.sqrt((ev.touches[0]!.clientX - ev.touches[1]!.clientX) ** 2 + (ev.touches[0]!.clientY - ev.touches[1]!.clientY) ** 2);
  }

  function handlePinchStart(ev: TouchEvent) {
    ev.preventDefault();
    ev.stopPropagation();

    if (ev.touches.length === 1) {
      initialTouch.value = {
        x: ev.touches[0]!.clientX,
        y: ev.touches[0]!.clientY,
      };

      initialTranslate.value = {
        x: props.zoomTranslate.value.x,
        y: props.zoomTranslate.value.y,
      };

      return;
    }

    if (ev.touches.length !== 2) {
      return;
    }

    initialDistance.value = calculateDistance(ev);
    initialScale.value = props.scale.value;
  }

  function handlePinchZoom(ev: TouchEvent) {
    ev.preventDefault();
    ev.stopPropagation();

    if (ev.touches.length === 1) {
      const point = ev.touches[0]!;

      //   const translate = calculateTranslate({
      //     width: props.zoomContainerRef.value?.clientWidth ?? 0,
      //     height: props.zoomContainerRef.value?.clientHeight ?? 0,
      //     scale: props.scale.value,
      //     mouseX: props.zoomContainerRef.value!.clientLeft - point.clientX,
      //     mouseY: props.zoomContainerRef.value!.clientTop - point.clientY,
      //     invert: true,
      //   });

      props.zoomTranslate.value.x = initialTranslate.value.x + (point.clientX - initialTouch.value.x);
      props.zoomTranslate.value.y = initialTranslate.value.y + (point.clientY - initialTouch.value.y);
      props.zoomTranslate.value.z = 0;
    }

    if (ev.targetTouches.length === 2) {
      // Check if the two target touches are the same ones that started
      // the 2-touch
      const point1 = ev.touches[0]!;
      const point2 = ev.touches[1]!;

      const center = {
        x: (props.zoomContainerRef.value!.clientLeft - point1.clientX + (props.zoomContainerRef.value!.clientLeft - point2.clientX)) / 2,
        y: (props.zoomContainerRef.value!.clientTop - point1.clientY + (props.zoomContainerRef.value!.clientTop - point2.clientY)) / 2,
      };

      const currentDistance = calculateDistance(ev);

      const newScale = Math.max(Math.min(initialScale.value + (currentDistance - initialDistance.value) / 100, props.maxScale.value), 1);

      props.scale.value = newScale;
      props.zoomTranslate.value = calculateTranslate({
        width: props.zoomContainerRef.value?.clientWidth ?? 0,
        height: props.zoomContainerRef.value?.clientHeight ?? 0,
        scale: newScale,
        mouseX: center.x,
        mouseY: center.y,
      });
    }
  }

  function handlePinchEnd(ev: TouchEvent) {
    ev.preventDefault();
    ev.stopPropagation();

    initialDistance.value = 0;
    initialScale.value = props.scale.value;
  }

  return {
    handlePinchStart,
    handlePinchZoom,
    handlePinchEnd,
  };
}

export function calculateTranslate({ width, height, scale, mouseX, mouseY, invert = false }: { width: number; height: number; scale: number; mouseX: number; mouseY: number; invert?: boolean }) {
  if (scale === 1) {
    return { x: 0, y: 0, z: 0 };
  }

  // Calculate scaled dimensions
  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  if (invert) {
    const top = -mouseY * (scale - 1) - scaledHeight / 2;
    const left = -mouseX * (scale - 1) - scaledWidth / 2;

    const leftOffset = Math.max(Math.min(left, 0), -scaledWidth + width);
    const topOffset = Math.max(Math.min(top, 0), -scaledHeight + height);

    return { x: leftOffset, y: topOffset, z: 0 };
  }

  // Calculate the translation needed to keep mouse point fixed
  // With transform-origin at 0,0, scaling moves points away from origin
  // To keep mouse point fixed, we translate by: -mouseX * (scale - 1)
  const left = -mouseX * (scale - 1);
  const top = -mouseY * (scale - 1);

  // Clamp translation to prevent overflow (image going outside container)
  // left must be between (width - scaledWidth) and 0
  // When scale > 1: width - scaledWidth is negative, so we clamp between that and 0
  const leftOffset = Math.max(Math.min(left, 0), width - scaledWidth);
  const topOffset = Math.max(Math.min(top, 0), height - scaledHeight);

  return { x: leftOffset, y: topOffset, z: 0 };
}
