---
title: Input Group
description: Composable input group with addons, text, and buttons.
tag: new
---

::component-preview
---
name: InputGroupDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/input-group.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { InputGroup } from "@vuzeno/registry/ui/input-group";
</script>

<template>
  <InputGroup.Root>
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon>
      <SearchIcon />
    </InputGroup.Addon>
  </InputGroup.Root>
</template>
```

## Composition

```
InputGroup.Root
├── InputGroup.Input or InputGroup.Textarea
├── InputGroup.Addon
├── InputGroup.Button
└── InputGroup.Text
```

For proper focus management, `InputGroupAddon` should always be placed after `InputGroupInput` or `InputGroupTextarea` in the DOM. Use the `align` prop to visually position the addon.

## Examples

### Icon

Add icons inside `InputGroupAddon` to decorate the input.

::component-preview
---
name: InputGroupIconDemo
---
::

### Text

Use `InputGroupText` for inline prefixes, suffixes, and helper labels.

::component-preview
---
name: InputGroupTextDemo
---
::

### Button

Add action buttons with `InputGroupButton` inside an addon.

::component-preview
---
name: InputGroupButtonDemo
---
::

### Tooltip

Wrap `InputGroupButton` with `Tooltip.Trigger` and `as-child` to add contextual help on hover.

::component-preview
---
name: InputGroupTooltipDemo
---
::

### Menu

Use `Menu.Trigger` with `as-child` on `InputGroupButton` to attach a dropdown menu to the input.

::component-preview
---
name: InputGroupMenuDemo
---
::

## Align

Use the `align` prop on `InputGroupAddon` to position the addon relative to the input:

| Value | Description |
| --- | --- |
| `inline-start` | Start of the input (default) |
| `inline-end` | End of the input |
| `block-start` | Above the input |
| `block-end` | Below the input |

Works with both `InputGroupInput` and `InputGroupTextarea`.
