---
title: Badge
description: Vue badge for compact status labels, counts, and categorical tags next to text or controls.
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

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/badge.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
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
