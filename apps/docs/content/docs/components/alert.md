---
title: Alert
description: Vue alert callout to highlight important status, warnings, errors, or success messages in your UI.
tag: new
---

::component-preview
---
component: alert
name: basic
---
::

## Features

- **Composable** — Flexible slot-based layout with `Alert.Icon`, `Alert.Title`, and `Alert.Description`
- **Variants** — `default`, `info`, `success`, `warning`, and `destructive` styles
- **Accessible** — Uses `role="alert"` for screen reader announcements
- **Icon support** — `Alert.Icon` renders a variant-aware icon automatically

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/alert.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Alert } from "@vuzeno/registry/ui/alert";
</script>

<template>
  <Alert.Root variant="info">
    <Alert.Icon />
    <Alert.Title>Heads up!</Alert.Title>
    <Alert.Description>
      You can add components to your app using the CLI.
    </Alert.Description>
  </Alert.Root>
</template>
```

## Composition

```
Alert.Root
├── Alert.Icon
├── Alert.Title
└── Alert.Description
```

## Examples

### With icon

`Alert.Icon` picks the icon from the root `variant`.

::component-preview
---
component: alert
name: with-icon
---
::

### Variants

All semantic variants with their default icons.

::component-preview
---
component: alert
name: variants
---
::

### Destructive

Use `variant="destructive"` for error or critical messages.

::component-preview
---
component: alert
name: destructive
---
::

## API

| Part | Description |
| --- | --- |
| `Alert.Root` | Root container with `role="alert"`. Supports `variant` prop |
| `Alert.Icon` | Variant-aware icon (`size-3.5`). Inherits `variant` from root |
| `Alert.Title` | Alert heading |
| `Alert.Description` | Supporting text or rich content |

### Variants

| Variant | Icon | Description |
| --- | --- | --- |
| `default` | Bell | Neutral callout for general information |
| `info` | Info | Informational message with blue styling |
| `success` | Circle check | Positive confirmation or completed action |
| `warning` | Triangle alert | Caution or attention needed |
| `destructive` | Circle alert | Error or critical failure state |
