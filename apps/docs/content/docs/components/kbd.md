---
title: Kbd
description: Used to display textual user input from keyboard.
tag: new
---

::component-preview
---
component: kbd
name: basic
---
::

## Features

- **Semantic** — Renders as a native `kbd` element
- **Composable** — Pair `Kbd.Item` with `Kbd.Group` for key combinations
- **Context-aware** — Adapts contrast when used inside tooltip content
- **Customizable** — Override styles with the `class` prop

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/kbd.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Kbd } from "@vuzeno/registry/ui/kbd";
</script>

<template>
  <Kbd.Item>Ctrl</Kbd.Item>
</template>
```

## Composition

```
Kbd.Item
Kbd.Group
├── Kbd.Item
└── Kbd.Item
```

## Examples

### Group

Use `Kbd.Group` to group keyboard keys together.

::component-preview
---
component: kbd
name: group
---
::

### Button

Use `Kbd.Item` inside a `Button` to show a keyboard shortcut.

::component-preview
---
component: kbd
name: button
---
::

### Tooltip

Use `Kbd.Item` inside a `Tooltip` to show a keyboard shortcut on hover.

::component-preview
---
component: kbd
name: tooltip
---
::

### Input Group

Use `Kbd.Item` inside an `InputGroup.Addon` to hint at a keyboard shortcut.

::component-preview
---
component: kbd
name: input-group
---
::

## API

### Kbd.Item

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | — | Additional CSS classes |

### Kbd.Group

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | — | Additional CSS classes |
