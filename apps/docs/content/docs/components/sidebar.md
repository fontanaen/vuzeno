---
title: Sidebar
description: Vue sidebar layout with responsive drawer, icon collapse, and hover flyout submenus for app navigation.
tag: new
---

::component-preview
---
component: sidebar
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/sidebar.json
exec: true
---
::

## Overview

The Sidebar is a composite layout component built on Ark UI primitives. It supports classic and inset variants, icon collapse with hover flyout submenus, responsive mobile drawer, multiple independent sidebars, and nested usage inside dialogs.

## Composition

```
Sidebar.Provider
├── Sidebar.Root
│   ├── Sidebar.Header
│   ├── Sidebar.Content
│   │   └── Sidebar.Group
│   │       ├── Sidebar.GroupLabel
│   │       └── Sidebar.GroupContent
│   │           └── Sidebar.Menu
│   │               ├── Sidebar.MenuItem
│   │               │   └── Sidebar.MenuButton
│   │               └── Sidebar.MenuSub
│   │                   ├── Sidebar.MenuSubTrigger
│   │                   └── Sidebar.MenuSubContent
│   ├── Sidebar.Footer
│   └── Sidebar.Rail
└── Sidebar.Inset
    └── Sidebar.Trigger
```

## Theming

Sidebar colors use the design system CSS variables:

- `--sidebar`, `--sidebar-foreground`
- `--sidebar-primary`, `--sidebar-primary-foreground`
- `--sidebar-accent`, `--sidebar-accent-foreground`
- `--sidebar-border`, `--sidebar-ring`

Layout variables are set per sidebar instance:

- `--sidebar-width` (default `16rem`)
- `--sidebar-width-icon` (default `3rem`)
- `--sidebar-width-mobile` (default `18rem` on mobile drawer)

Use Tailwind utilities such as `bg-sidebar`, `text-sidebar-foreground`, and `border-sidebar-border`.

By default, `Sidebar.Provider` is container-relative (`h-full min-h-0`) and fits inside bounded layouts such as demo cards or dialogs. Pass `full-height` for page-level layouts that should fill the viewport (`min-h-svh`).

## useSidebar

`useSidebar(id?)` returns a `ComputedRef<SidebarInstanceContext | undefined>`. Access the resolved sidebar with `.value`, or pass an `id` when multiple sidebars are registered.

| Property | Type | Description |
| --- | --- | --- |
| `state` | `"expanded" \| "collapsed"` | Derived open state for styling |
| `open` | `Ref<boolean>` | Desktop expanded state |
| `setOpen` | `(boolean) => void` | Set desktop open state |
| `openMobile` | `Ref<boolean>` | Mobile drawer open state |
| `setOpenMobile` | `(boolean) => void` | Set mobile drawer state |
| `isMobile` | `Ref<boolean>` | Whether viewport is mobile |
| `toggleSidebar` | `() => void` | Toggle desktop or mobile state |
| `id` | `string` | Sidebar instance id |
| `side` | `"left" \| "right"` | Sidebar side |
| `variant` | `"sidebar" \| "floating" \| "inset"` | Visual variant |
| `collapsible` | `"offcanvas" \| "icon" \| "none"` | Collapse behavior |

Pass an `id` to `useSidebar("left")` when multiple sidebars are registered.

```ts
const sidebar = useSidebar();
sidebar.value?.toggleSidebar();
```

## Examples

### Inset variant

Visual variant where the main content is wrapped in a padded, rounded container.

::component-preview
---
component: sidebar
name: inset
---
::

### Icon collapse with hover flyout

When collapsed to icon mode, submenus with children open a hover flyout menu instead of hiding nested items.

::component-preview
---
component: sidebar
name: icon
---
::

### Multiple sidebars

Register left and right sidebars with independent state using the `id` prop and `Sidebar.Trigger target`.

::component-preview
---
component: sidebar
name: multiple
---
::

### Nested in a dialog

`Sidebar.Provider` is container-relative by default and fits inside dialogs or other bounded layouts. Pass `full-height` for page-level layouts.

::component-preview
---
component: sidebar
name: dialog
---
::

### Controlled

Control sidebar open state with `v-model:open` on `Sidebar.Root`.

::component-preview
---
component: sidebar
name: controlled
---
::
