---
title: Image
description: Composable image component with loading state management and fallback support.
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

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/image.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Image } from "@vuzeno/registry/ui/image";
import { Skeleton } from "@vuzeno/ui/components/skeleton";
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

Use `Image.Loading` to show a dedicated loading indicator. The demo below uses a delayed image URL so you can see the loading state in action.

::component-preview
---
component: image
name: loading
---
::

### Controlled

For a controlled image, manage the state with the `state` prop and update it via the `update:state` event (or `v-model:state`). When controlled, `Image.Source` no longer updates the state automatically.

::component-preview
---
component: image
name: controlled
---
::

## API

Built on Ark UI primitives (`ark`, `createContext`, `PolymorphicProps`) and VueUse `useImage` for load state tracking. See [Ark UI composition guide](https://ark-ui.com/docs/guides/composition) for polymorphic rendering details.
