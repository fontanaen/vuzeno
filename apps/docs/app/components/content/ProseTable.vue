<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

/*
 * Markdown tables in docs are styled here (Nuxt Content Prose overrides).
 * Related: ProseTh.vue / ProseTd.vue (alignment only).
 *
 * Uncomment ONE style block below to A/B test.
 */
</script>

<template>
  <!--
    ─── Style A · Current (boxed muted) ───────────────────────────
    Soft fill + outer border. Dense “panel” look.
  -->
  <!--
  <div class="no-scrollbar my-6 w-full overflow-y-auto rounded-lg border bg-muted/75">
    <table
      :class="cn(
        [
          'relative w-full overflow-hidden border-none text-sm',
          '[&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-bold',
          '[&_td]:px-4 [&_td]:py-2 [&_td]:text-left',
          '[&_tbody_tr:last-child]:border-b-0',
        ],
        props.class,
      )"
      v-bind="$attrs"
    >
      <slot />
    </table>
  </div>
  -->

  <!--
    ─── Style B · Hairline (minimal / docs) ───────────────────────
    No fill. Header muted text, thin row dividers. Clean API-table look.
  -->
  <!--
  <div class="no-scrollbar my-6 w-full overflow-x-auto">
    <table
      :class="cn(
        [
          'w-full text-sm',
          '[&_thead_tr]:border-b [&_thead_tr]:border-border',
          '[&_th]:h-10 [&_th]:px-3 [&_th]:py-2 [&_th]:align-middle [&_th]:font-medium [&_th]:text-muted-foreground',
          '[&_tbody_tr]:border-b [&_tbody_tr]:border-border/60 [&_tbody_tr:last-child]:border-b-0',
          '[&_td]:px-3 [&_td]:py-2.5 [&_td]:align-middle [&_td]:text-foreground/90',
        ],
        props.class,
      )"
      v-bind="$attrs"
    >
      <slot />
    </table>
  </div>
  -->

  <!--
    ─── Style C · Soft header band ────────────────────────────────
    Muted header strip, white/transparent body, subtle outer radius.
  -->
  <!--
  <div class="no-scrollbar my-6 w-full overflow-x-auto rounded-xl border border-border/80">
    <table
      :class="cn(
        [
          'w-full text-sm',
          '[&_thead]:bg-muted/60',
          '[&_th]:h-10 [&_th]:px-4 [&_th]:py-2 [&_th]:align-middle [&_th]:font-medium [&_th]:text-muted-foreground',
          '[&_tbody_tr]:border-t [&_tbody_tr]:border-border/70',
          '[&_td]:px-4 [&_td]:py-2.5 [&_td]:align-middle',
        ],
        props.class,
      )"
      v-bind="$attrs"
    >
      <slot />
    </table>
  </div>
  -->

  <!--
    ─── Style D · Inset card (aligned with registry Table) ────────
    Matches ark-ui/table shell: accent/card fill, rounded-xl, soft cells.
  -->
  <!-- <div class="no-scrollbar my-6 w-full overflow-x-auto rounded-xl bg-accent px-1 pb-1 dark:bg-card">
    <table
      :class="cn(
        [
          'w-full border-separate border-spacing-0 text-sm',
          '[&_th]:h-10 [&_th]:px-4 [&_th]:text-left [&_th]:align-middle [&_th]:text-sm [&_th]:font-medium [&_th]:text-accent-foreground/60',
          '[&_td]:px-4 [&_td]:py-2.5 [&_td]:align-middle',
          '[&_tbody_tr:not(:last-child)_td]:border-b [&_tbody_tr:not(:last-child)_td]:border-border/50',
        ],
        props.class,
      )"
      v-bind="$attrs"
    >
      <slot />
    </table>
  </div> -->

  <!--
    ─── Style E · Zebra rows ──────────────────────────────────────
    Alternating muted rows, no outer chrome. Good for long prop lists.
  -->
  <!--
  <div class="no-scrollbar my-6 w-full overflow-x-auto">
    <table
      :class="cn(
        [
          'w-full text-sm',
          '[&_th]:h-9 [&_th]:px-3 [&_th]:py-2 [&_th]:align-middle [&_th]:font-medium [&_th]:text-muted-foreground',
          '[&_tbody_tr:nth-child(odd)]:bg-muted/45',
          '[&_tbody_tr]:rounded-md',
          '[&_td]:px-3 [&_td]:py-2 [&_td]:align-middle',
          '[&_tbody_tr_td:first-child]:rounded-l-md [&_tbody_tr_td:last-child]:rounded-r-md',
        ],
        props.class,
      )"
      v-bind="$attrs"
    >
      <slot />
    </table>
  </div>
  -->

  <!--
    ─── Style F · Column grid (vertical rules) ────────────────────
    Light vertical + horizontal grid. More “spec sheet”.
  -->
  
  <div class="no-scrollbar my-6 w-full overflow-x-auto rounded-lg border">
    <table
      :class="cn(
        [
          'w-full text-sm',
          '[&_th]:bg-muted/50 [&_th]:px-3 [&_th]:py-2.5 [&_th]:text-left [&_th]:align-middle [&_th]:font-medium [&_th]:text-muted-foreground',
          '[&_th:not(:last-child)]:border-r [&_th]:border-border/70',
          '[&_td]:px-3 [&_td]:py-2.5 [&_td]:align-middle',
          '[&_td:not(:last-child)]:border-r [&_td]:border-border/50',
          '[&_tbody_tr:not(:last-child)_td]:border-b [&_tbody_tr:not(:last-child)_td]:border-border/60',
        ],
        props.class,
      )"
      v-bind="$attrs"
    >
      <slot />
    </table>
  </div>
 
</template>
