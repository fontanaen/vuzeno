---
title: Timeline
description: A vertical or horizontal thread for displaying sequential data with composable items, markers, and content.
tag: new
---

A composable timeline built from primitives. Use it to visualize an ordered sequence of events — logs, activity feeds, product journeys, or step-by-step stories — either top-to-bottom or left-to-right.

::component-preview
---
name: TimelineDemo
---
::

## Features

- **Two directions** — Stack items top-to-bottom (`vertical`) or left-to-right (`horizontal`)
- **Side control** — Place content on either side of the thread (`left`/`right` for vertical, `top`/`bottom` for horizontal)
- **Centered thread** — Opt-in alternating layout with `align="center"` for zigzag timelines
- **Dot or icon markers** — Switch between a small dot or an icon slot via `TimelineMedia`'s `variant` prop

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/timeline.json
exec: true
---
::

## Anatomy

```vue
<template>
  <Timeline direction="vertical">
    <TimelineItem>
      <TimelineMedia variant="icon" />

      <TimelineContent>
        <TimelineHeader>
          <TimelineTitle />
          <TimelineDescription />
        </TimelineHeader>

        <!-- Content -->
      </TimelineContent>
    </TimelineItem>
  </Timeline>
</template>
```

## Examples

### Horizontal

Switch the orientation with `direction="horizontal"`. The thread runs left-to-right and content stacks above or below each marker.

::component-preview
---
name: TimelineHorizontalDemo
---
::

```vue showLineNumbers
<script setup lang="ts">
import {
  Timeline,
  TimelineContent,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelineMedia,
  TimelineTitle,
} from "@vuzeno/registry/ui/timeline";
</script>

<template>
  <Timeline direction="horizontal" class="w-full">
    <TimelineItem>
      <TimelineMedia />
      <TimelineContent>
        <TimelineHeader>
          <TimelineTitle>Draft</TimelineTitle>
          <TimelineDescription>Idea captured</TimelineDescription>
        </TimelineHeader>
      </TimelineContent>
    </TimelineItem>

    <!-- more items... -->
  </Timeline>
</template>
```

### Alternating sides

Use `align="center"` on `Timeline` to center the thread, then set each `TimelineItem`'s `side` to `left` or `right` (or `top`/`bottom` for horizontal) to build an alternating layout.

::component-preview
---
name: TimelineSideDemo
---
::

```vue showLineNumbers
<template>
  <Timeline align="center" class="w-full max-w-md">
    <TimelineItem side="left">
      <TimelineMedia />
      <TimelineContent>
        <TimelineHeader>
          <TimelineTitle>Project kickoff</TimelineTitle>
          <TimelineDescription>Monday · 9:00 AM</TimelineDescription>
        </TimelineHeader>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem side="right">
      <TimelineMedia />
      <TimelineContent>
        <TimelineHeader>
          <TimelineTitle>Design review</TimelineTitle>
          <TimelineDescription>Tuesday · 2:30 PM</TimelineDescription>
        </TimelineHeader>
      </TimelineContent>
    </TimelineItem>

    <!-- more items... -->
  </Timeline>
</template>
```

## API Reference

### Timeline

| Prop        | Type                                              | Default      |
| ----------- | ------------------------------------------------- | ------------ |
| `direction` | `"vertical" \| "horizontal"`                      | `"vertical"` |
| `side`      | `"left" \| "right" \| "top" \| "bottom"`          | -            |
| `align`     | `"start" \| "center"`                             | `"start"`    |

### TimelineItem

| Prop   | Type                                     | Default |
| ------ | ---------------------------------------- | ------- |
| `side` | `"left" \| "right" \| "top" \| "bottom"` | inherit |

### TimelineMedia

| Prop      | Type              | Default |
| --------- | ----------------- | ------- |
| `variant` | `"dot" \| "icon"` | `"dot"` |

## Notes

- `align="start"` (the default) produces a thread on one side of each item. Mixing per-item `side` values in `start` mode will shift the thread between items — use `align="center"` for alternating layouts.
- The connector line is hidden on the last item via a `last:` variant, so a single-item timeline shows only the marker.
