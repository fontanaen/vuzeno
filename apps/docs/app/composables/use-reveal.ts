import { useIntersectionObserver } from "@vueuse/core";
import { onMounted, ref } from "vue";

interface UseRevealOptions {
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
}

export function useReveal(options: UseRevealOptions = {}) {
  const { selector = ".reveal", rootMargin = "0px 0px -10% 0px", threshold = 0.1, once = true } = options;

  const targets = ref<HTMLElement[]>([]);

  useIntersectionObserver(
    targets,
    (entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
        } else if (!once) {
          delete el.dataset.visible;
        }
      }
    },
    { rootMargin, threshold },
  );

  onMounted(() => {
    const root: Document | HTMLElement = options.root ?? document;
    targets.value = Array.from(root.querySelectorAll<HTMLElement>(selector));
  });
}
