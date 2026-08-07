---
title: Button Group
description: Vue button group that joins related actions with shared borders, spacing, and consistent sizing.
tag: new
links:
  api: https://ark-ui.com/docs/guides/composition
---

::component-preview
---
component: button-group
name: basic
---
::

## Features

- **Grouped layout** — Visually connects adjacent buttons by removing inner border radii
- **Orientation** — Horizontal (default) or vertical layout via the `orientation` prop
- **Composable** — Nest groups or combine with inputs and other controls
- **Accessible** — Renders as a semantic `fieldset` via Ark UI's polymorphic factory

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/button-group.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
</script>

<template>
  <ButtonGroup aria-label="Actions">
    <Button variant="outline">Archive</Button>
    <Button variant="outline">Report</Button>
  </ButtonGroup>
</template>
```

## Composition

```
ButtonGroup
└── Button
```

## Accessibility

- The component renders as a `fieldset` element.
- Use Tab to navigate between focusable elements in the group.
- Label the group with `aria-label` or `aria-labelledby`.

```vue
<ButtonGroup aria-label="Pagination">
  <Button variant="outline">Previous</Button>
  <Button variant="outline">Next</Button>
</ButtonGroup>
```

## Button Group vs Toggle Group

- Use **Button Group** when buttons perform independent actions.
- Use [Toggle Group](/docs/components/toggle-group) when buttons toggle a shared state.

## Examples

### Orientation

Set the `orientation` prop to change the layout.

::component-preview
---
component: button-group
name: orientation
---
::

### Sizes

Control the size of buttons using the `size` prop on individual buttons.

::component-preview
---
component: button-group
name: sizes
---
::

### Nested

Nest `ButtonGroup` components to create groups with spacing between them.

::component-preview
---
component: button-group
name: nested
---
::

### Input

Combine an input with action buttons in a single group.

::component-preview
---
component: button-group
name: input
---
::

### Select

Pair a select with an input and submit button — useful for amount or unit pickers.

::component-preview
---
component: button-group
name: select
---
::

### Dropdown

Create a split button group with a [Menu](/docs/components/menu) for secondary actions.

::component-preview
---
component: button-group
name: dropdown
---
::

## API

### ButtonGroup

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction of the group |
| `asChild` | `boolean` | `false` | Merge props onto the child element |
| `class` | `string` | — | Additional CSS classes |

The component also exports `buttonGroupVariants` and `ButtonGroupVariants` for building custom styled wrappers.

See [Ark UI composition guide](https://ark-ui.com/docs/guides/composition) for polymorphic usage with `asChild`.
