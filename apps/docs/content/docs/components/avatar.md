---
title: Avatar
description: Avatar component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/avatar
---

::component-preview
---
component: avatar
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/avatar.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Avatar } from "@vuzeno/registry/ui/avatar";
</script>

<template>
  <Avatar.Root>
    <Avatar.Image src="https://github.com/fontanaen.png" alt="CN" />
    <Avatar.Fallback>CN</Avatar.Fallback>
  </Avatar.Root>
</template>
```

## Composition

```
Avatar.Group
└── Avatar.Root
    ├── Avatar.Fallback
    └── Avatar.Image

Avatar.Root
├── Avatar.Context
├── Avatar.Fallback
├── Avatar.Image
├── Avatar.RootProvider
```

## Examples

### Sizes

Use the `size` prop on `Avatar.Root` to change the size of the avatar.

::component-preview
---
component: avatar
name: sizes
---
::

### Group

Stack multiple avatars using `Avatar.Group`. Apply negative spacing and ring utilities on each `Avatar.Root` to create an overlapping effect.

::component-preview
---
component: avatar
name: group
---
::

## API

See [Ark UI Avatar docs](https://ark-ui.com/vue/docs/components/avatar) for full props and examples.

### Avatar.Root

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Size of the avatar |
| `class` | `string` | — | Additional CSS classes |

### Avatar.Group

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction of the group |
| `class` | `string` | — | Additional CSS classes |
