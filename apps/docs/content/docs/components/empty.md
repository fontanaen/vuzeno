---
title: Empty
description: Composable empty state with header, media, and actions.
tag: new
---

::component-preview
---
component: empty
name: basic
---
::

## Features

- **Composable** — Flexible slot-based layout with `Empty.Header`, `Empty.Media`, `Empty.Title`, `Empty.Description`, and `Empty.Content`
- **Styled primitives** — Opinionated defaults for spacing, typography, and icon media
- **Customizable** — Override any part with the `class` prop

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/empty.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Empty } from "@vuzeno/registry/ui/empty";
import { Button } from "@vuzeno/registry/ui/button";
import { InboxIcon } from "@lucide/vue";
</script>

<template>
  <Empty.Root>
    <Empty.Header>
      <Empty.Media variant="icon">
        <InboxIcon />
      </Empty.Media>
      <Empty.Title>No data</Empty.Title>
      <Empty.Description>No data found</Empty.Description>
    </Empty.Header>
    <Empty.Content>
      <Button>Add data</Button>
    </Empty.Content>
  </Empty.Root>
</template>
```

## Composition

```
Empty.Root
├── Empty.Header
│   ├── Empty.Media
│   ├── Empty.Title
│   └── Empty.Description
└── Empty.Content
```

## Examples

### Outline

Use the `border` utility class to create an outline empty state.

::component-preview
---
component: empty
name: outline
---
::

### Background

Use the `bg-*` utilities to add a background to the empty state.

::component-preview
---
component: empty
name: muted
---
::

### Avatar

Use `Empty.Media` to display an avatar in the empty state.

::component-preview
---
component: empty
name: avatar
---
::

### Avatar Group

Use `Empty.Media` to display an avatar group in the empty state.

::component-preview
---
component: empty
name: avatar-group
---
::

### Input Group

Add an `InputGroup` component to `Empty.Content`.

::component-preview
---
component: empty
name: input-group
---
::

## API

### Empty.Media

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"default" \| "icon"` | `"default"` | Visual style of the media container |
| `class` | `string` | — | Additional CSS classes |

