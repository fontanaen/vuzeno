---
title: Timeline
description: Vue timeline for sequential events with items, markers, and content in vertical or horizontal layouts.
tag: new
---

::component-preview
---
component: timeline
name: basic
---
::

## Features

- **Two directions** — Stack items top-to-bottom (`vertical`) or left-to-right (`horizontal`)
- **Side control** — Place content on either side of the thread (`left`/`right` for vertical, `top`/`bottom` for horizontal)
- **Centered thread** — Opt-in alternating layout with `align="center"` for zigzag timelines
- **Dot or icon markers** — Switch between a small dot or an icon slot via `Timeline.Media`'s `variant` prop

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/timeline.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Timeline } from "@/components/ui/timeline";
</script>

<template>
  <Timeline.Root>
    <Timeline.Item>
      <Timeline.Media />
      <Timeline.Content>
        <Timeline.Header>
          <Timeline.Title>Title</Timeline.Title>
          <Timeline.Description>Description</Timeline.Description>
        </Timeline.Header>
      </Timeline.Content>
    </Timeline.Item>
  </Timeline.Root>
</template>
```

## Composition

```
Timeline.Root
└── Timeline.Item
    ├── Timeline.Media
    └── Timeline.Content
        └── Timeline.Header
            ├── Timeline.Title
            └── Timeline.Description
```

## Anatomy

```vue
<template>
  <Timeline.Root direction="vertical">
    <Timeline.Item>
      <Timeline.Media variant="icon" />

      <Timeline.Content>
        <Timeline.Header>
          <Timeline.Title />
          <Timeline.Description />
        </Timeline.Header>

        <!-- Content -->
      </Timeline.Content>
    </Timeline.Item>
  </Timeline.Root>
</template>
```

## Examples

### Horizontal

Switch the orientation with `direction="horizontal"`. The thread runs left-to-right and content stacks above or below each marker.

::component-preview
---
component: timeline
name: horizontal
---
::

```vue showLineNumbers
<script setup lang="ts">
import { Timeline } from "@/components/ui/timeline";
</script>

<template>
  <Timeline.Root direction="horizontal" class="w-full">
    <Timeline.Item>
      <Timeline.Media />
      <Timeline.Content>
        <Timeline.Header>
          <Timeline.Title>Draft</Timeline.Title>
          <Timeline.Description>Idea captured</Timeline.Description>
        </Timeline.Header>
      </Timeline.Content>
    </Timeline.Item>

    <!-- more items... -->
  </Timeline.Root>
</template>
```

### Alternating sides

Use `align="center"` on `Timeline.Root` to center the thread, then set each `Timeline.Item`'s `side` to `left` or `right` (or `top`/`bottom` for horizontal) to build an alternating layout.

::component-preview
---
component: timeline
name: side
---
::

```vue showLineNumbers
<template>
  <Timeline.Root align="center" class="w-full max-w-md">
    <Timeline.Item side="left">
      <Timeline.Media />
      <Timeline.Content>
        <Timeline.Header>
          <Timeline.Title>Project kickoff</Timeline.Title>
          <Timeline.Description>Monday · 9:00 AM</Timeline.Description>
        </Timeline.Header>
      </Timeline.Content>
    </Timeline.Item>

    <Timeline.Item side="right">
      <Timeline.Media />
      <Timeline.Content>
        <Timeline.Header>
          <Timeline.Title>Design review</Timeline.Title>
          <Timeline.Description>Tuesday · 2:30 PM</Timeline.Description>
        </Timeline.Header>
      </Timeline.Content>
    </Timeline.Item>

    <!-- more items... -->
  </Timeline.Root>
</template>
```

## API Reference

### Timeline.Root

| Prop        | Type                                              | Default      |
| ----------- | ------------------------------------------------- | ------------ |
| `direction` | `"vertical" \| "horizontal"`                      | `"vertical"` |
| `side`      | `"left" \| "right" \| "top" \| "bottom"`          | -            |
| `align`     | `"start" \| "center"`                             | `"start"`    |

### Timeline.Item

| Prop   | Type                                     | Default |
| ------ | ---------------------------------------- | ------- |
| `side` | `"left" \| "right" \| "top" \| "bottom"` | inherit |

### Timeline.Media

| Prop      | Type              | Default |
| --------- | ----------------- | ------- |
| `variant` | `"dot" \| "icon"` | `"dot"` |

## Notes

- `align="start"` (the default) produces a thread on one side of each item. Mixing per-item `side` values in `start` mode will shift the thread between items — use `align="center"` for alternating layouts.
- The connector line is hidden on the last item via a `last:` variant, so a single-item timeline shows only the marker.
