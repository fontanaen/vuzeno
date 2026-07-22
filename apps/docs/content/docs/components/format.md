---
title: Format
description: Format component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/format
---

::component-preview
---
component: format
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/format.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Format } from "@vuzeno/registry/ui/format";
</script>

<template>
  <Format.Root>
    <!-- … -->
  </Format.Root>
</template>
```

## Composition

```
Format.Byte
├── Format.Number
├── Format.RelativeTime
├── Format.Time
```

## API

See [Ark UI Format docs](https://ark-ui.com/vue/docs/components/format) for full props and examples.
