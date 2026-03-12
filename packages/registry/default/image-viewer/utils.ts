import { type MaybeRefOrGetter, type Ref, ref, toValue } from "vue";

export type Point = { x: number; y: number };

export type Size = { width: number; height: number };

export type Translate = { x: number; y: number; z: number };

export function calculateDistance(a: Point, b: Point): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function calculatePinchScale(initialDistance: number, currentDistance: number, initialScale: number, maxScale: number): number {
  const ratio = currentDistance / initialDistance;
  return Math.max(1, Math.min(initialScale * ratio, maxScale));
}

export function clampTranslate(translate: Point, container: Size, scale: number): Point {
  const minX = container.width - container.width * scale;
  const minY = container.height - container.height * scale;
  return {
    x: Math.max(minX, Math.min(0, translate.x)),
    y: Math.max(minY, Math.min(0, translate.y)),
  };
}

export function calculateCursorTranslate(cursor: Point, container: Size, scale: number): Translate {
  if (scale === 1) {
    return { x: 0, y: 0, z: 0 };
  }
  const raw = {
    x: -cursor.x * (scale - 1),
    y: -cursor.y * (scale - 1),
  };
  const clamped = clampTranslate(raw, container, scale);
  return { ...clamped, z: 0 };
}

export function calculatePanTranslate(initialTouch: Point, currentTouch: Point, initialTranslate: Point): Point {
  return {
    x: initialTranslate.x + (currentTouch.x - initialTouch.x),
    y: initialTranslate.y + (currentTouch.y - initialTouch.y),
  };
}

export function calculatePinchCenter(a: Point, b: Point): Point {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  };
}

function clampPoint(point: Point, container: Size): Point {
  return {
    x: Math.max(0, Math.min(point.x, container.width)),
    y: Math.max(0, Math.min(point.y, container.height)),
  };
}

function getContainerRect(el: HTMLElement | null | undefined): DOMRect | null {
  return el?.getBoundingClientRect() ?? null;
}

function touchToPoint(touch: Touch, containerRect: DOMRect): Point {
  return {
    x: touch.clientX - containerRect.left,
    y: touch.clientY - containerRect.top,
  };
}

export type TouchZoomProps = {
  scale: Ref<number>;
  maxScale: Ref<number>;
  zoomContainerRef: MaybeRefOrGetter<HTMLElement | null | undefined>;
  zoomTranslate: Ref<Translate>;
  isTouching: Ref<boolean>;
  enabled?: MaybeRefOrGetter<boolean>;
};

export function useTouchZoom(props: TouchZoomProps) {
  const enabled = () => toValue(props.enabled) ?? true;
  const scale = () => toValue(props.scale);
  const zoomContainerRef = () => toValue(props.zoomContainerRef);

  const lastTapTime = ref(0);

  const initialDistance = ref(0);
  const initialScale = ref(1);
  const initialTouch = ref<Point>({ x: 0, y: 0 });
  const initialTouchesCount = ref(0);
  const initialTranslate = ref<Point>({ x: 0, y: 0 });
  const initialCenter = ref<Point>({ x: 0, y: 0 });

  function getContainer(): Size {
    const el = zoomContainerRef();
    return {
      width: el?.clientWidth ?? 0,
      height: el?.clientHeight ?? 0,
    };
  }

  function handleTouchStart(ev: TouchEvent) {
    if (!enabled()) {
      return;
    }

    if (scale() === 1 && ev.touches.length === 1) {
      return;
    }

    ev.preventDefault();
    ev.stopPropagation();

    props.isTouching.value = true;

    const rect = getContainerRect(zoomContainerRef());
    const container = getContainer();
    if (!rect) return;

    initialTouchesCount.value = ev.touches.length;

    if (ev.touches.length === 1) {
      initialTouch.value = clampPoint(touchToPoint(ev.touches[0]!, rect), container);
      initialTranslate.value = {
        x: props.zoomTranslate.value.x,
        y: props.zoomTranslate.value.y,
      };
      return;
    }

    if (ev.touches.length === 2) {
      const aRaw = touchToPoint(ev.touches[0]!, rect);
      const bRaw = touchToPoint(ev.touches[1]!, rect);
      const aClamped = clampPoint(aRaw, container);
      const bClamped = clampPoint(bRaw, container);
      initialDistance.value = calculateDistance(aRaw, bRaw);
      initialScale.value = props.scale.value;
      initialCenter.value = calculatePinchCenter(aClamped, bClamped);
      initialTranslate.value = {
        x: props.zoomTranslate.value.x,
        y: props.zoomTranslate.value.y,
      };
    }
  }

  function handleTouchMove(ev: TouchEvent) {
    if (!enabled()) {
      return;
    }

    if (scale() === 1 && ev.touches.length === 1) {
      return;
    }

    ev.preventDefault();
    ev.stopPropagation();

    const rect = getContainerRect(zoomContainerRef());
    const container = getContainer();
    if (!rect || initialTouchesCount.value !== ev.touches.length) {
      return;
    }

    if (ev.touches.length === 1) {
      const currentTouch = clampPoint(touchToPoint(ev.touches[0]!, rect), container);
      const raw = calculatePanTranslate(initialTouch.value, currentTouch, initialTranslate.value);
      const clamped = clampTranslate(raw, container, props.scale.value);
      props.zoomTranslate.value = { ...clamped, z: 0 };
      return;
    }

    if (ev.touches.length === 2) {
      const aPoint = touchToPoint(ev.touches[0]!, rect);
      const bPoint = touchToPoint(ev.touches[1]!, rect);
      const aClamped = clampPoint(aPoint, container);
      const bClamped = clampPoint(bPoint, container);
      const currentDistance = calculateDistance(aPoint, bPoint);
      const currentCenter = calculatePinchCenter(aClamped, bClamped);

      const newScale = calculatePinchScale(initialDistance.value, currentDistance, initialScale.value, props.maxScale.value);
      props.scale.value = newScale;

      const ratio = newScale / initialScale.value;
      const raw = {
        x: currentCenter.x - (initialCenter.value.x - initialTranslate.value.x) * ratio,
        y: currentCenter.y - (initialCenter.value.y - initialTranslate.value.y) * ratio,
      };
      const clamped = clampTranslate(raw, container, newScale);
      props.zoomTranslate.value = { ...clamped, z: 0 };
    }
  }

  function handleTouchEnd(ev: TouchEvent) {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 250;

    if (now - lastTapTime.value < DOUBLE_TAP_DELAY) {
      onDoubleTap();
    } else if (initialTouchesCount.value <= 1) {
      lastTapTime.value = now;
    }

    initialTouchesCount.value = 0;

    if (ev.touches.length === 0) {
      props.isTouching.value = false;
      initialDistance.value = 0;
      initialScale.value = props.scale.value;
      return;
    }

    if (ev.touches.length === 1) {
      const rect = getContainerRect(zoomContainerRef());
      if (rect) {
        initialTouch.value = touchToPoint(ev.touches[0]!, rect);
        initialTranslate.value = {
          x: props.zoomTranslate.value.x,
          y: props.zoomTranslate.value.y,
        };
      }
    }
  }

  function onDoubleTap() {
    if (scale() === 1) {
      props.scale.value = props.maxScale.value;
    } else {
      props.scale.value = 1;
    }
  }

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
