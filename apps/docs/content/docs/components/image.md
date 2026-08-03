---
title: Image
description: Vue image component with loading states and fallback support for reliable media rendering.
tag: new
---

::component-preview
---
component: image
name: basic
---
::

## Features

- **Loading states** — Automatic detection of loading, error, and success states
- **Fallback support** — Display placeholder content during loading or on error
- **Composable** — Flexible slot-based architecture with `Image.Source`, `Image.Loading`, `Image.Error`, and `Image.Fallback`
- **Zag-powered** — State machine API via `useImage` and `Image.Provider`

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/image.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Image } from "@/components/ui/image";
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <Image.Root>
    <Image.Source class="aspect-video w-72" src="https://picsum.photos/id/229/600/400" alt="..." />

    <Image.Loading as-child>
      <Skeleton class="aspect-video w-72" />
    </Image.Loading>

    <Image.Error>
      <div class="bg-destructive p-2 text-center text-destructive-foreground">
        An error occurred while loading the image.
      </div>
    </Image.Error>
  </Image.Root>
</template>
```

## Composition

```
Image.Root
├── Image.Source
├── Image.Loading
├── Image.Error
└── Image.Fallback
```

## Examples

### Fallback

Use `Image.Fallback` to display a placeholder while the image is loading or when it fails to load.

::component-preview
---
component: image
name: fallback
---
::

### Loading

Use `Image.Loading` to show a dedicated loading indicator.

::component-preview
---
component: image
name: loading
---
::

### Controlled

For a controlled image, manage the state with `v-model:state`. When controlled, image load and error events no longer update the state automatically — use `setState` from `useImage` or bind the model yourself.

::component-preview
---
component: image
name: controlled
---
::

## API

Built with a custom Zag.js state machine. Use `useImage()` with `Image.Provider` for imperative control (`api.value.setState(...)`, `api.value.state`). Polymorphic parts use Ark UI `ark` / `as-child`.
