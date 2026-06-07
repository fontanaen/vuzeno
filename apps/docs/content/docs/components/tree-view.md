---
title: Tree View
description: Thin wrappers around Reka UI Tree primitives for accessible hierarchical lists.
tag: alpha
---

::component-preview
---
name: TreeViewDemo
---
::

## Features

- **Reka UI Tree** — Built on the alpha [Tree](https://reka-ui.com/docs/components/tree) primitive (`TreeRoot`, `TreeItem`, `TreeVirtualizer`)
- **Composable parts** — Style each row with `TreeViewItem`, optional `TreeViewIndicator`, and your own label content
- **Guideline variants** — Connect branches with `guideline="straight"` or `guideline="rounded"` on `TreeView`
- **Virtualization** — Use `TreeViewVirtualizer` for large trees
- **Controlled expansion** — Bind `v-model:expanded` to open and close branches programmatically

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/tree-view.json
exec: true
---
::

## Composition

Use the following composition to build a TreeView:

```
TreeView
└── TreeViewItem
    └── TreeViewIndicator
```

## Anatomy

```vue
<template>
  <TreeView v-slot="{ flattenItems }" :items :get-key="(item) => item.id">
    <TreeViewItem
      v-for="item in flattenItems"
      :key="item._id"
      v-slot="slotProps"
      v-bind="item.bind"
    >
      <TreeViewIndicator v-bind="slotProps" :has-children="item.hasChildren" />
      {{ item.value.title }}
    </TreeViewItem>
  </TreeView>
</template>
```

- **TreeView** — Wraps `TreeRoot`. Forwards all Reka Tree props and exposes the `flattenItems` slot prop.
- **TreeViewItem** — Wraps `TreeItem`. Pass `v-bind="item.bind"` from `flattenItems`. Exposes `isExpanded`, `isSelected`, `isIndeterminate`, `handleToggle`, and `handleSelect` on the default slot.
- **TreeViewIndicator** — Optional expand control for branch nodes. Pass slot props from `TreeViewItem` plus `has-children` from the flattened item.
- **TreeViewVirtualizer** — Wraps `TreeVirtualizer` for virtualized lists. Place inside `TreeView` instead of iterating `flattenItems` manually.

## Examples

### Variants

Set `guideline` on `TreeView` to draw connector lines between branches. Use `"straight"` for vertical guides or `"rounded"` for elbow connectors on child rows. Omit the prop (or use `"none"`) for a plain list.

::component-preview
---
name: TreeViewVariantsDemo
---
::

```vue showLineNumbers
<template>
  <TreeView
    v-slot="{ flattenItems }"
    guideline="rounded"
    :items
    :get-key="(item) => item.id"
  >
    <TreeViewItem
      v-for="item in flattenItems"
      :key="item._id"
      v-slot="slotProps"
      v-bind="item.bind"
    >
      <TreeViewIndicator v-bind="slotProps" :has-children="item.hasChildren" />
      {{ item.value.title }}
    </TreeViewItem>
  </TreeView>
</template>
```

| Value      | Description                                      |
| ---------- | ------------------------------------------------ |
| `none`     | Default. No connector lines.                     |
| `straight` | Vertical line through expanded branch children.  |
| `rounded`  | Vertical line plus rounded elbows on child rows. |

### Virtual list

For large trees, swap the `flattenItems` loop for `TreeViewVirtualizer`. Give the virtualizer a fixed height and pass `text-content` so type-ahead search can resolve item labels.

::component-preview
---
name: TreeViewVirtualDemo
---
::

```vue showLineNumbers
<template>
  <TreeView :items :get-key="(item) => item.id">
    <TreeViewVirtualizer
      v-slot="{ item }"
      :text-content="(node) => node.title"
      class="h-64"
    >
      <TreeViewItem v-slot="slotProps" v-bind="item.bind">
        <TreeViewIndicator v-bind="slotProps" :has-children="item.hasChildren" />
        {{ item.value.title }}
      </TreeViewItem>
    </TreeViewVirtualizer>
  </TreeView>
</template>
```
