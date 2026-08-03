---
title: Toc
description: Table of contents with a rail indicator — continuous, sharp diagonals, or rounded S-curves that follow nested items.
tag: new
---

::component-preview
---
component: toc
name: basic
---
::

## Features

- **Active highlight** — Primary mark on the rail for the current item
- **Indicator modes** — Pin the active item (`segment`) or fill the rail as progress (`fill`)
- **Three rail styles** — Continuous (`straight`), 45° circuit (`sharp`), or S-curve circuit (`rounded`)
- **ScrollSpy aware** — Reads active value from a parent ScrollSpy when present
- **Depth indent** — `depth` on items offsets labels and the path rail

## Installation

Install from the Vuzeno registry (includes ScrollSpy):

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/toc.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { ScrollSpy } from "@/components/ui/scroll-spy";
import { Toc } from "@/components/ui/toc";
</script>

<template>
  <ScrollSpy.Root>
    <div class="flex gap-8">
      <ScrollSpy.Viewport class="flex-1 overflow-y-auto">
        <ScrollSpy.Item value="intro">
          <h2 id="intro">Intro</h2>
        </ScrollSpy.Item>
        <ScrollSpy.Item value="usage">
          <h2 id="usage">Usage</h2>
        </ScrollSpy.Item>
      </ScrollSpy.Viewport>

      <Toc.Root turn="rounded">
        <Toc.Title>On this page</Toc.Title>
        <Toc.List>
          <Toc.Indicator />
          <Toc.Item value="intro">
            <Toc.Link href="#intro">Intro</Toc.Link>
          </Toc.Item>
          <Toc.Item value="usage" :depth="3">
            <Toc.Link href="#usage">Usage</Toc.Link>
          </Toc.Item>
        </Toc.List>
      </Toc.Root>
    </div>
  </ScrollSpy.Root>
</template>
```

## Composition

```
Toc.Root
├── Toc.Title
└── Toc.List
    ├── Toc.Indicator
    └── Toc.Item
        └── Toc.Link
```

## Examples

### Straight rail

`turn="straight"` keeps a continuous vertical line. The active item is highlighted as a primary segment on that line.

::component-preview
---
component: toc
name: turn-straight
---
::

### Sharp path

`turn="sharp"` draws a circuit that follows nested depth offsets with straight 45° diagonal turns.

::component-preview
---
component: toc
name: turn-sharp
---
::

### Indicator modes

`indicator="segment"` (default) pins a short primary mark on the active item. `indicator="fill"` paints the rail from the start up to the active item — useful as reading progress. Toggle both modes and rail styles below.

::component-preview
---
component: toc
name: indicator-modes
---
::

## API Reference

### Toc.Root

| Prop | Type | Default |
| --- | --- | --- |
| `turn` | `"straight" \| "sharp" \| "rounded"` | `"rounded"` |
| `indicator` | `"segment" \| "fill"` | `"segment"` |
| `v-model:active-value` | `string` | `""` (used when outside ScrollSpy) |

### Toc.Item

| Prop | Type | Default |
| --- | --- | --- |
| `value` | `string` | — |
| `depth` | `number` | `2` |

### Toc.Link

| Prop | Type | Default |
| --- | --- | --- |
| `href` | `string` | — |

## Notes

- Prefer nesting Toc under [ScrollSpy](/docs/components/scroll-spy) so the active section stays in sync automatically.
- Without ScrollSpy, drive the rail with `v-model:active-value` on `Toc.Root`.
- `straight` is a continuous rail; `sharp` and `rounded` follow sub-item indents with 45° diagonals or S-curve turns. The active indicator rides that same path.
- `indicator="fill"` grows from the top of the rail to the active item; `indicator="segment"` only highlights the active item itself.
