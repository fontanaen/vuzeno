---
title: Menu
description: Vue menu dropdown for actions and navigation with nested submenus and keyboard shortcuts.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/menu
---

::component-preview
---
component: menu
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/menu.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Menu } from "@vuzeno/registry/ui/menu";
</script>

<template>
  <Menu.Root>
    <!-- … -->
  </Menu.Root>
</template>
```

## Composition

```
Menu.Root
├── Menu.ArrowTip
├── Menu.Arrow
├── Menu.CheckboxItem
├── Menu.Content
├── Menu.ContextTrigger
├── Menu.Context
├── Menu.Empty
├── Menu.Filter
│   └── Menu.FilterInput
├── Menu.Indicator
├── Menu.ItemContext
├── Menu.ItemGroupLabel
├── Menu.ItemGroup
├── Menu.ItemIndicator
├── Menu.ItemText
├── Menu.Item
├── Menu.RadioItemGroup
├── Menu.RadioItem
├── Menu.RootProvider
├── Menu.Separator
├── Menu.TriggerItem
├── Menu.Trigger
```

## Examples

### Item Selection

Use `onSelect` to handle item selection. The callback receives the item's `id`.

::component-preview
---
component: menu
name: controlled
---
::

### Root Provider

An alternative way to control the menu is to use the `RootProvider` component and the `useMenu` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: menu
name: root-provider
---
::

### Grouping

Use `Menu.ItemGroup` and `Menu.ItemGroupLabel` to organize related menu items.

::component-preview
---
component: menu
name: grouping
---
::

### Links

To render menu items as links, use the `asChild` prop to replace the default element with an anchor tag.

::component-preview
---
component: menu
name: links
---
::

### Checkbox

To add a checkbox to a menu item, use the `Menu.CheckboxItem` component.

::component-preview
---
component: menu
name: checkbox
---
::

### Radio Group

To group radio option items, use the `Menu.RadioItemGroup` component.

::component-preview
---
component: menu
name: radio-group
---
::

### Context Menu

To show the menu when a trigger element is right-clicked, use the `Menu.ContextTrigger` component.

Context menus are also opened during a long-press of roughly `700ms` when the pointer is pen or touch.

::component-preview
---
component: menu
name: context
---
::

### Nested

To show a nested menu, render another `Menu` component and use the `Menu.TriggerItem` component to open the submenu.

::component-preview
---
component: menu
name: nested
---
::

### Menu in Dialog

When rendering a menu inside a dialog, use `lazyMount` and `unmountOnExit` to ensure proper cleanup when the dialog closes.

::component-preview
---
component: menu
name: in-dialog
---
::

### Menu Item Dialog

Open a confirmation dialog from a menu item. This pattern is useful for destructive actions like delete that require user confirmation.

::component-preview
---
component: menu
name: item-dialog
---
::

### Multiple Triggers

Share a single menu across multiple trigger elements. Pass a `value` to each `Menu.Trigger` — the menu repositions to whichever trigger is activated.

::component-preview
---
component: menu
name: multiple-triggers
---
::

### Filterable

Use `Menu.Filter` and `Menu.FilterInput` with `useMenuFilterCollection` to filter menu items. Set `:typeahead="false"` on `Menu.Root` so typing goes to the search field instead of menu typeahead.

::component-preview
---
component: menu
name: filterable
---
::

### Filterable Multiple

Combine a filterable menu with `Menu.CheckboxItem` and `:close-on-select="false"` for multi-select.

::component-preview
---
component: menu
name: filterable-multiple
---
::

## API

See [Ark UI Menu docs](https://ark-ui.com/vue/docs/components/menu) for full props and examples.
