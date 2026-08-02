---
title: Skeleton
description: Vue skeleton placeholder that reserves layout space while content or data is loading.
tag: new
---

::component-preview
---
component: skeleton
name: basic
---
::

## Features

- **Shimmer** — Light sweep from left to right while content loads
- **Shape with classes** — Size and shape via Tailwind utilities (`rounded-full`, fixed width/height)
- **Customizable** — Override styles with the `class` prop

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/skeleton.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <Skeleton class="h-5 w-[100px] rounded-full" />
</template>
```

## Examples

### Card

Compose multiple skeletons to match a card layout.

::component-preview
---
component: skeleton
name: card
---
::

## API

### Skeleton

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | — | Additional CSS classes |
