---
title: ScrollSpy
description: Track which section is in view and share the active value with navigation like Toc.
tag: new
---

::component-preview
---
component: scroll-spy
name: basic
---
::

## Features

- **Active tracking** — Scroll position updates `v-model` from a configurable top offset threshold
- **Viewport** — `ScrollSpy.Viewport` is the scroll container that drives tracking
- **Zag machine** — Behavior is owned by a Zag.js state machine (`useScrollSpy`, Provider)
- **Composable** — Provide active state to Toc (or custom UI) through context

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/scroll-spy.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { ScrollSpy } from "@/components/ui/scroll-spy";
import { ref } from "vue";

const active = ref("intro");
</script>

<template>
  <ScrollSpy.Root v-model="active">
    <ScrollSpy.Viewport class="h-96 overflow-y-auto">
      <ScrollSpy.Item value="intro">
        <h2 id="intro">Intro</h2>
        <p>...</p>
      </ScrollSpy.Item>
      <ScrollSpy.Item value="usage">
        <h2 id="usage">Usage</h2>
        <p>...</p>
      </ScrollSpy.Item>
    </ScrollSpy.Viewport>
  </ScrollSpy.Root>
</template>
```

### Root provider

Drive the machine yourself with `useScrollSpy` and mount parts under `ScrollSpy.Provider`:

```vue
<script setup lang="ts">
import { ScrollSpy, useScrollSpy } from "@/components/ui/scroll-spy";

const api = useScrollSpy({ defaultValue: "intro" });
</script>

<template>
  <ScrollSpy.Provider :value="api">
    <ScrollSpy.Viewport class="h-96 overflow-y-auto">
      <ScrollSpy.Item value="intro">Intro</ScrollSpy.Item>
    </ScrollSpy.Viewport>
  </ScrollSpy.Provider>
</template>
```

## Composition

```
ScrollSpy.Root / ScrollSpy.Provider
├── ScrollSpy.Viewport
│   └── ScrollSpy.Item
└── ScrollSpy.Target
```

## API Reference

### ScrollSpy.Root

| Prop | Type | Default |
| --- | --- | --- |
| `v-model` | `string` | `""` |
| `offset` | `number` | `0.25` |
| `orientation` | `"vertical" \| "horizontal"` | `"vertical"` |

`offset` accepts a ratio (`0`–`1`) of the scroll root size, or an absolute pixel value.

### ScrollSpy.Item

| Prop | Type | Default |
| --- | --- | --- |
| `value` | `string` | — |

### ScrollSpy.Target

| Prop | Type | Default |
| --- | --- | --- |
| `value` | `string` | — |

Registers an existing document element by id (`document.getElementById(value)`). Use this when sections are rendered outside `ScrollSpy.Viewport` — for example a page sidebar TOC watching article headings. Without a viewport, `ScrollSpy.Root` tracks against the window.

## Notes

- Pair with [Toc](/docs/components/toc) for a sidebar rail that follows the active section.
- Prefer `ScrollSpy.Viewport` as the scroll container so tracking binds reliably.
- Use `ScrollSpy.Target` when you cannot wrap the scrolled content in `ScrollSpy.Item`.
- Export `useScrollSpy`, `machine`, `connect`, and `anatomy` for headless composition.
