---
title: Badge
description: Badge component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/docs/guides/composition
---

::component-preview
---
component: badge
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/badge.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Badge } from "@vuzeno/registry/ui/badge";
</script>

<template>
  <Badge variant="secondary">Badge</Badge>
</template>
```

## Examples

### Variants

Use the `variant` prop to change the visual style of the badge.

::component-preview
---
component: badge
name: variants
---
::
