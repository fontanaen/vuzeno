---
title: Breadcrumb
description: Vue breadcrumb navigation that shows the path to the current page with hierarchical links.
tag: new
---

::component-preview
---
component: breadcrumb
name: basic
---
::

## Features

- **Composable** — Flexible slot-based layout with `Breadcrumb.List`, `Breadcrumb.Item`, `Breadcrumb.Link`, `Breadcrumb.Page`, and `Breadcrumb.Separator`
- **Accessible** — Semantic navigation with `aria-current` on the current page
- **Customizable** — Override separators, compose with menus, or collapse long paths with `Breadcrumb.Ellipsis`

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/breadcrumb.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Breadcrumb } from "@vuzeno/registry/ui/breadcrumb";
</script>

<template>
  <Breadcrumb.Root>
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">
          Home
        </Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/components">
          Components
        </Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
</template>
```

## Composition

```
Breadcrumb.Root
└── Breadcrumb.List
    ├── Breadcrumb.Item
    │   └── Breadcrumb.Link
    ├── Breadcrumb.Separator
    ├── Breadcrumb.Item
    │   └── Breadcrumb.Link
    ├── Breadcrumb.Separator
    └── Breadcrumb.Item
        └── Breadcrumb.Page
```

## Examples

### Custom separator

Use a custom icon or character inside `Breadcrumb.Separator`.

::component-preview
---
component: breadcrumb
name: custom-separator
---
::

### Dropdown

Compose `Breadcrumb.Item` with `Menu` to create a dropdown for nested navigation.

::component-preview
---
component: breadcrumb
name: dropdown
---
::

### Collapsed

Use `Breadcrumb.Ellipsis` to collapse intermediate path segments.

::component-preview
---
component: breadcrumb
name: ellipsis
---
::

## API

| Part | Description |
| --- | --- |
| `Breadcrumb.Root` | Root `nav` element with `aria-label="breadcrumb"` |
| `Breadcrumb.List` | Ordered list of breadcrumb items |
| `Breadcrumb.Item` | List item wrapping a link or page label |
| `Breadcrumb.Link` | Navigable link. Supports `as-child` for router links |
| `Breadcrumb.Page` | Current page label with `aria-current="page"` |
| `Breadcrumb.Separator` | Visual separator between items. Defaults to a chevron icon |
| `Breadcrumb.Ellipsis` | Collapsed path indicator with screen-reader text |
