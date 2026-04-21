import { onScopeDispose, type Ref, type WatchSource, watch } from "vue";

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max));
}

export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "0:00";
  }

  const total = Math.floor(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;

  const paddedSecs = secs.toString().padStart(2, "0");

  if (hours > 0) {
    const paddedMinutes = minutes.toString().padStart(2, "0");
    return `${hours}:${paddedMinutes}:${paddedSecs}`;
  }

  return `${minutes}:${paddedSecs}`;
}

/**
 * Forwards updates from a reactive `time` source to a `<video>` element's
 * `currentTime`, coalescing multiple updates within the same animation frame.
 *
 * Safe to call while the element is missing or its metadata isn't loaded yet:
 * `null` times and `readyState < 1` are ignored, and seek errors are swallowed.
 */
export function useVideoPreviewSeek(videoRef: Ref<HTMLVideoElement | null | undefined>, time: WatchSource<number | null>) {
  let raf = 0;
  let pendingTime: number | null = null;

  function flush() {
    raf = 0;
    const videoEl = videoRef.value;
    if (videoEl && pendingTime !== null && Number.isFinite(pendingTime) && videoEl.readyState >= 1) {
      try {
        videoEl.currentTime = pendingTime;
      } catch {
        // seeking before metadata is ready; ignore
      }
    }
  }

  watch(time, (next) => {
    if (next === null) {
      return;
    }

    pendingTime = next;

    if (raf !== 0) {
      return;
    }

    raf = requestAnimationFrame(flush);
  });

  onScopeDispose(() => {
    if (raf !== 0) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  });
}
