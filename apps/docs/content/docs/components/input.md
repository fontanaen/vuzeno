---
title: Input
description: Styled input component with size variants.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/field
---

::component-preview
---
component: input
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/input.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Input } from "@vuzeno/registry/ui/input";
</script>

<template>
  <Input placeholder="Email" />
</template>
```

## Examples

### Sizes

Use the `size` prop to change the height of the input.

::component-preview
---
component: input
name: sizes
---
::

### Field

Combine the `Input` component with `Field` to add a label, helper text, and validation context.

::component-preview
---
component: input
name: field
---
::


See [Ark UI Field docs](https://ark-ui.com/vue/docs/components/field) for field composition patterns.
