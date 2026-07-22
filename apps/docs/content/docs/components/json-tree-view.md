---
title: Json Tree View
description: Json Tree View component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/utilities/json-tree-view
---

::component-preview
---
component: json-tree-view
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/json-tree-view.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { JsonTreeView } from "@vuzeno/registry/ui/json-tree-view";
import { ChevronRightIcon } from "lucide-vue-next";

const data = { name: "John Doe", age: 30 };
</script>

<template>
  <JsonTreeView.Root :data="data" :default-expanded-depth="1">
    <JsonTreeView.Tree>
      <template #arrow>
        <ChevronRightIcon />
      </template>
    </JsonTreeView.Tree>
  </JsonTreeView.Root>
</template>
```

## Composition

```
JsonTreeView.Root
├── JsonTreeView.RootProvider
└── JsonTreeView.Tree
```

## Examples

### Different Data Types

The JSON tree view can display various JavaScript data types including objects, arrays, primitives, and special values:

::component-preview
---
component: json-tree-view
name: array-data
---
::

### Functions and Methods

Display JavaScript functions, async functions, and generators in your JSON tree:

::component-preview
---
component: json-tree-view
name: functions
---
::

### Regular Expressions

Regular expressions are displayed with their pattern and flags:

::component-preview
---
component: json-tree-view
name: regex
---
::

### Error Objects

Error objects and their stack traces can be visualized:

::component-preview
---
component: json-tree-view
name: errors
---
::

### Map and Set Objects

Native JavaScript Map and Set objects are supported:

::component-preview
---
component: json-tree-view
name: map-and-set
---
::

### Controlling Expand Level

Use the `defaultExpandedDepth` prop to control how many levels are expanded by default:

::component-preview
---
component: json-tree-view
name: expand-level
---
::

### Custom Value Rendering

You can customize how specific values are rendered using the `renderValue` prop. This example shows how to make email addresses clickable:

::component-preview
---
component: json-tree-view
name: render-value
---
::

### Configuration Options

The JSON tree view supports several configuration options to customize the display:

```vue
<JsonTreeView.Root
  :data="data"
  :default-expanded-depth="2"
  :quotes-on-keys="true"
  :show-nonenumerable="true"
  :max-preview-items="5"
  :collapse-strings-after-length="50"
  :group-arrays-after-length="100"
>
  <JsonTreeView.Tree>
    <template #arrow>
      <ChevronRightIcon />
    </template>
  </JsonTreeView.Tree>
</JsonTreeView.Root>
```

**Configuration Options:**

- **`quotesOnKeys`**: Whether to show quotes around object keys
- **`showNonenumerable`**: Whether to show non-enumerable properties
- **`maxPreviewItems`**: Maximum number of items to show in object/array previews
- **`collapseStringsAfterLength`**: Collapse strings longer than this length
- **`groupArraysAfterLength`**: Group array items when array is longer than this length

### Using the Root Provider

The `RootProvider` component provides a context for the JSON tree view. It accepts the value of the `useJsonTreeView` hook. You can leverage it to access the component state and methods from outside the JSON tree view.

::component-preview
---
component: json-tree-view
name: root-provider
---
::

> If you're using the `RootProvider` component, you don't need to use the `Root` component.

## API

See [Ark UI Json Tree View docs](https://ark-ui.com/vue/docs/utilities/json-tree-view) for full props and examples.
