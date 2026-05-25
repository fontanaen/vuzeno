---
title: MotionList
description: A transition-only list primitive that animates insert, remove, and reorder for keyed children.
tag: new
---

::component-preview
---
name: MotionListDemo
---
::

## Features

- **Transition-only** — never owns or mutates list data. Your store, query client, computed filter, or local ref stays the source of truth
- **Keyed-children contract** — uses Vue's standard `v-for` + `:key` pattern with `MotionListItem` to track items
- **Motion-value config** — opacity, scale, x, y as `{ from, to }` ranges instead of CSS class strings
- **Smart FLIP moves** — measures positions before and after each update, animates the inverted transform back with WAAPI
- **Direction-aware moves** — `vertical`, `horizontal`, and `horizontal-wrap` layouts constrain or unlock move axes
- **Reduced motion** — automatically skips transform-based motion when `prefers-reduced-motion: reduce` is set

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/motion-list.json
exec: true
---
::

## Anatomy

```vue
<template>
  <MotionList :transition="transition" layout="vertical">
    <MotionListItem v-for="item in items" :key="item.id" :value="item.id">
      <!-- your content -->
    </MotionListItem>
  </MotionList>
</template>
```

- **MotionList** — root container that captures FLIP snapshots, runs enter/leave/move animations, and provides transition config to its children
- **MotionListItem** — registers its DOM element with the parent so it can be tracked across updates

`MotionList` does not accept an `items` prop or expose `addItem`/`removeItem` mutators. Mutate your own array (or computed/store/query) and Vue's keyed reconciliation drives the transitions.

## Examples

### Horizontal layout

Use `layout="horizontal"` for inline single-line lists like tabs, chips, or toolbars. Move animations only consider the X delta so vertical jitter is ignored.

::component-preview
---
name: MotionListHorizontalDemo
---
::

### Wrapping horizontal layout

Use `layout="horizontal-wrap"` for inline multiline lists like tag pickers. Items can move between rows, so move animations consider both X and Y deltas.

::component-preview
---
name: MotionListHorizontalWrapDemo
---
::

### Custom transition

Pass a `transition` prop with `add`, `remove`, and `move` to override the defaults. Each motion value is a `{ from, to }` pair, with optional `duration` (ms) and `easing` (CSS easing string).

::component-preview
---
name: MotionListTransitionDemo
---
::

## API Reference

### MotionList

| Prop          | Type                                                  | Default      |
| ------------- | ----------------------------------------------------- | ------------ |
| `transition`  | `MotionListTransition`                                | -            |
| `layout`      | `"vertical" \| "horizontal" \| "horizontal-wrap"`     | `"vertical"` |
| `disabled`    | `boolean`                                             | `false`      |
| `as`          | `string`                                              | `"div"`      |
| `class`       | `HTMLAttributes["class"]`                             | -            |

### MotionListItem

| Prop      | Type                       | Default |
| --------- | -------------------------- | ------- |
| `value`   | `PropertyKey`              | -       |
| `as`      | `string`                   | `"div"` |
| `asChild` | `boolean`                  | `false` |
| `class`   | `HTMLAttributes["class"]`  | -       |

`value` is optional. It is informational only — `MotionListItem` always tracks itself by its DOM element. Vue's `:key` is what controls reconciliation.

### MotionListTransition

```ts
type MotionListMotionRange = { from: number; to: number };

type MotionListEnterTransition = {
  opacity?: MotionListMotionRange;
  scale?: MotionListMotionRange;
  x?: MotionListMotionRange;
  y?: MotionListMotionRange;
  duration?: number;
  easing?: string;
};

type MotionListMoveTransition = {
  duration?: number;
  easing?: string;
};

type MotionListTransition = {
  add?: MotionListEnterTransition;
  remove?: MotionListEnterTransition;
  move?: MotionListMoveTransition;
};
```

Defaults are tuned for short, ease-out enters, snappier ease-out leaves, and a strong ease-in-out for moves.

## Notes

- `MotionList` is intentionally not a data layer. Add, remove, replace, filter, sort, and reorder happen wherever you manage state (a `ref`, a `computed`, a Pinia store, a TanStack Query cache, etc.).
- During a leave animation, the leaving element is positioned absolutely relative to `MotionList` so siblings can flow into the gap and FLIP into their new positions.
- Animations are played with the Web Animations API (WAAPI), so they run off the main thread and stay smooth under load.
- When `prefers-reduced-motion: reduce` is detected, transform/scale/translate motion is skipped while opacity changes still play to preserve the enter/leave signal.
