---
title: Separator
description: Vue separator to visually or semantically divide sections of content and menus.
tag: new
---

::component-preview
---
component: separator
name: basic
---
::

## Features

- **Horizontal or vertical** — Use the `orientation` prop to switch layout direction
- **Styled default** — A subtle `bg-border` line that adapts to orientation
- **Customizable** — Override with the `class` prop

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/separator.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Separator } from "@vuzeno/registry/ui/separator";
</script>

<template>
  <Separator />
</template>
```

## Examples

### Vertical

Use `orientation="vertical"` for a vertical separator.

::component-preview
---
component: separator
name: vertical
---
::

### Menu

Vertical separators between menu items with descriptions.

::component-preview
---
component: separator
name: menu
---
::

### List

Horizontal separators between list items.

::component-preview
---
component: separator
name: list
---
::

## API

### Separator

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction of the separator |
| `class` | `string` | — | Additional CSS classes |
