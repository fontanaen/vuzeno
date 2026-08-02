---
title: Button
description: Vue button with variants and sizes for primary actions, secondary controls, and icon buttons.
tag: new
links:
  api: https://ark-ui.com/docs/guides/composition
---

::component-preview
---
component: button
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/button.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <Button variant="outline" size="sm">Button</Button>
</template>
```

## Examples

### Variants

Use the `variant` prop to change the visual style of the button.

::component-preview
---
component: button
name: variants
---
::

### Sizes

Use the `size` prop to change the size of the button.

::component-preview
---
component: button
name: sizes
---
::

### Disabled

Use the native `disabled` attribute to disable the button.

::component-preview
---
component: button
name: disabled
---
::
