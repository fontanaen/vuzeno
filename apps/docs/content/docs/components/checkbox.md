---
title: Checkbox
description: Checkbox component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/checkbox
---

::component-preview
---
name: CheckboxDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/checkbox.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Checkbox } from "@vuzeno/registry/ui/checkbox";
</script>

<template>
  <Checkbox.Root>
    <!-- … -->
  </Checkbox.Root>
</template>
```

## Composition

```
Checkbox.Root
├── Checkbox.Context
├── Checkbox.Control
├── Checkbox.Group
├── Checkbox.GroupProvider
├── Checkbox.HiddenInput
├── Checkbox.Indicator
├── Checkbox.Label
├── Checkbox.RootProvider
```

## Examples

### Default Checked

Use the `defaultChecked` prop to set the initial checked state in an uncontrolled manner. The checkbox will manage its own state internally.

::component-preview
---
name: CheckboxDefaultCheckedDemo
---
::

### Controlled

Use the `checked` and `@checked-change` props to programmatically control the checkbox's state.

::component-preview
---
name: CheckboxControlledDemo
---
::

### Root Provider

An alternative way to control the checkbox is to use the `RootProvider` component and the `useCheckbox` hook. This way you can access the state and methods from outside the component.

::component-preview
---
name: CheckboxRootProviderDemo
---
::

### Disabled

Use the `disabled` prop to make the checkbox non-interactive.

::component-preview
---
name: CheckboxDisabledDemo
---
::

### Indeterminate

Use the `indeterminate` prop to create a checkbox in an indeterminate state (partially checked).

::component-preview
---
name: CheckboxIndeterminateDemo
---
::

### Checkbox Group

Use the `Checkbox.Group` component to manage a group of checkboxes. The `Checkbox.Group` component manages the state of the checkboxes and provides a way to access the checked values.

::component-preview
---
name: CheckboxGroupDemo
---
::

### Group Controlled

Use `v-model` (or the `model-value` prop with the `@value-change` event) to programmatically control the checkbox group's state. This example demonstrates how to manage selected checkboxes in an array and display the current selection.

::component-preview
---
name: CheckboxGroupControlledDemo
---
::

### Group Provider

Use the `useCheckboxGroup` hook to create the checkbox group store and pass it to the `Checkbox.GroupProvider` component. This provides maximum control over the group programmatically, similar to how `RootProvider` works for individual checkboxes.

::component-preview
---
name: CheckboxGroupProviderDemo
---
::

### Invalid

Use the `invalid` prop on `Checkbox.Group` to mark the entire group as invalid for validation purposes. This applies the invalid state to all checkboxes within the group.

::component-preview
---
name: CheckboxGroupInvalidDemo
---
::

### Max Selected

Use the `maxSelectedValues` prop to limit the number of checkboxes that can be selected at once. Once the maximum is reached, remaining checkboxes become disabled.

::component-preview
---
name: CheckboxGroupMaxSelectedDemo
---
::

### Select All

Implement a "select all" checkbox that controls all checkboxes within a group. The parent checkbox automatically shows an indeterminate state when some (but not all) items are selected, and becomes fully checked when all items are selected.

::component-preview
---
name: CheckboxSelectAllDemo
---
::

## API

See [Ark UI Checkbox docs](https://ark-ui.com/vue/docs/components/checkbox) for full props and examples.
