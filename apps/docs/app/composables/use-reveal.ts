import { useIntersectionObserver } from "@vueuse/core";
import { nextTick, onMounted, ref } from "vue";

type UseRevealOptions = {
  /** CSS selector (scoped to the root element when provided) of nodes to observe. */
  selector?: string;
  /** Root element to observe within. Defaults to `document`. */
  root?: HTMLElement | null;
  /** IntersectionObserver rootMargin. */
  rootMargin?: string;
  /** Threshold. */
  threshold?: number | number[];
  /**
   * Only trigger once per element (default true). When true, the
   * `data-visible` attribute is set and never removed.
   */
  once?: boolean;
};

export function useReveal(options: UseRevealOptions = {}) {
  const { selector = ".reveal", rootMargin = "0px 0px -8% 0px", threshold = 0.05, once = true } = options;

  const targets = ref<HTMLElement[]>([]);

  useIntersectionObserver(
    targets,
    (entries) => {
      for (const entry of entries) {
        const element = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          element.dataset.visible = "true";
        } else if (!once) {
          delete element.dataset.visible;
        }
      }
    },
    { rootMargin, threshold },
  );

  onMounted(async () => {
    await nextTick();

    const root: Document | HTMLElement = options.root ?? document;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(selector));
    targets.value = nodes;

    // Above-the-fold nodes can miss the first observer callback on mount.
    for (const element of nodes) {
      const rect = element.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        element.dataset.visible = "true";
      }
    }
  });
}
