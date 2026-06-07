---
title: ResizeMotion
description: An animated wrapper that tracks content height changes and handles constrained scrolling.
---

::component-preview
---
name: ResizeMotionDemo
---
::

## Features

- **Animated height** — Observes the slotted content and transitions the wrapper height when it changes
- **Min and max height** — Clamp the rendered height with `min-height` and `max-height`
- **Scroll support** — Keeps overflow inside the internal viewport when content exceeds the maximum height
- **Disabled state** — Lock the current height while content changes should not animate
- **Animation control** — Use `linear`, `spring`, `none`, or provide a custom CSS `transition`
- **Lifecycle emits** — Listen to `resize-start`, `resize`, and `resize-end`

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/resize-motion.json
exec: true
---
::

## Composition

Use the following composition to build a ResizeMotion:

```
ResizeMotion
```

## Anatomy

- **ResizeMotion** — Root `Primitive` that owns the measured, animated height
- **Viewport** — Internal scroll container that controls overflow behavior
- **Content** — Internal measured wrapper around the default slot
