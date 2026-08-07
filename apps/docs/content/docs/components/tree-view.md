---
title: Tree View
description: Vue tree view for nested folders and hierarchical data with expand, collapse, and selection.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/tree-view
---

::component-preview
---
component: tree-view
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/tree-view.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { TreeView } from "@/components/ui/tree-view";
</script>

<template>
  <TreeView.Root>
    <!-- … -->
  </TreeView.Root>
</template>
```

## Examples

### Controlled Expanded

Pass the `expandedValue` and `onExpandedChange` props to the `TreeView.Root` component to control the expanded state of the tree view.

::component-preview
---
component: tree-view
name: controlled-expanded
---
::

### Controlled Selection

Pass the `selectedValue` and `onSelectionChange` props to the `TreeView.Root` component to control the selected state of the tree view.

::component-preview
---
component: tree-view
name: controlled-selection
---
::

### Root Provider

An alternative way to control the tree view is to use the `RootProvider` component and the `useTreeView` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: tree-view
name: root-provider
---
::

### Lazy Loading

Lazy loading is a feature that allows the tree view to load children of a node on demand (or async). This helps to improve the initial load time and memory usage.

To use this, you need to provide the following:

- `loadChildren` — A function that is used to load the children of a node.
- `onLoadChildrenComplete` — A callback that is called when the children of a node are loaded. Used to update the tree collection.
- `childrenCount` — A number that indicates the number of children of a branch node.

::component-preview
---
component: tree-view
name: lazy-loading
---
::

### Lazy Mount

Lazy mounting is a feature that allows the content of a tree view to be rendered only when it is expanded. This is useful for performance optimization, especially when tree content is large or complex. To enable lazy mounting, use the `lazyMount` prop on the `TreeView.Root` component.

In addition, the `unmountOnExit` prop can be used in conjunction with `lazyMount` to unmount the tree view content when branches are collapsed, freeing up resources. The next time a branch is expanded, its content will be re-rendered.

::component-preview
---
component: tree-view
name: lazy-mount
---
::

### Filtering

Filtering is useful when you have a large tree and you want to filter the nodes to only show the ones that match the search query. Here's an example that composes the `filter` method from the `TreeCollection` and `useFilter` hook to filter the nodes.

::component-preview
---
component: tree-view
name: filtering
---
::

### Links

Tree items can be rendered as links to another page or website. This could be useful for documentation sites.

Here's an example that modifies the tree collection to represent an hierarchical link structure. It uses the `asChild` prop to render the tree items as links, passing the `href` prop to a `<a>` element.

::component-preview
---
component: tree-view
name: links
---
::

### Virtualized

For large tree views with thousands of nodes, virtualization can significantly improve performance by only rendering visible nodes.

Key implementation details:

- Use `useTreeView` hook with `TreeView.RootProvider` for programmatic control
- Pass `scrollToIndexFn` to enable keyboard navigation within the virtualized list
- Use `getVisibleNodes()` to get the flattened list of currently visible nodes

::component-preview
---
component: tree-view
name: virtualized
---
::

### Checkbox Tree

Use the `defaultCheckedValue` prop to enable checkbox selection mode. This allows users to select multiple nodes with checkboxes, including parent-child selection relationships.

::component-preview
---
component: tree-view
name: checkbox-tree
---
::

### Expand and Collapse All

Use the `expand()` and `collapse()` methods from the tree view context to programmatically expand or collapse all branches.

::component-preview
---
component: tree-view
name: expand-collapse-all
---
::

### Mutation

Use the collection's `remove()` and `replace()` methods to dynamically add and remove nodes from the tree. This is useful for building file explorer interfaces where users can create and delete files.

::component-preview
---
component: tree-view
name: mutation
---
::

### Rename Node

Enable inline renaming of nodes using the `canRename` prop and `onRenameComplete` callback. Press F2 to activate rename mode on the focused node.

::component-preview
---
component: tree-view
name: rename-node
---
::

## Composition

```
TreeView.Root
├── TreeView.Label
├── TreeView.Tree
│   └── TreeView.NodeProvider
│       ├── TreeView.Branch
│       │   ├── TreeView.BranchControl
│       │   │   ├── TreeView.BranchIndicator
│       │   │   └── TreeView.BranchText
│       │   └── TreeView.BranchContent
│       │       ├── TreeView.BranchIndentGuide
│       │       └── TreeView.Item
│       │           └── TreeView.ItemText
```

## API

See [Ark UI Tree View docs](https://ark-ui.com/vue/docs/components/tree-view) for full props and examples.
