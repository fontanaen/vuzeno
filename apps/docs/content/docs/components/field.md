---
title: Field
description: Field component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/field
---

::component-preview
---
name: FieldDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/field.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
</script>

<template>
  <Field.Root>
    <!-- … -->
  </Field.Root>
</template>
```

## Examples

The `Field` component provides contexts such as `invalid`, `disabled`, `required`, and `readOnly` for form elements. While most Ark UI components natively support these contexts, you can also use the `Field` component with standard HTML form elements.

### Input

This example shows how to use the `Field` component with a standard input field.

::component-preview
---
name: FieldDemo
---
::

### Textarea

This example illustrates how to use the `Field` component with a textarea element.

::component-preview
---
name: FieldTextareaDemo
---
::

### Textarea Autoresize

Pass the `autoresize` prop to the `Textarea` component to enable automatic resizing as the user types.

::component-preview
---
name: FieldTextareaAutoresizeDemo
---
::

### Select

This example demonstrates how to integrate the `Field` component with a select dropdown.

::component-preview
---
name: FieldSelectDemo
---
::

### Root Provider

An alternative way to control the field is to use the `RootProvider` component and the `useField` hook. This way you can access the state and methods from outside the component.

::component-preview
---
name: FieldRootProviderDemo
---
::

### Custom Control

Use the `Field.Context` or `useFieldContext` hook to access the internal state of the field. This can help you wire up custom controls with the `Field` component.

::component-preview
---
name: FieldCustomControlDemo
---
::

## Composition

```
Field.Root
├── Field.Context
├── Field.ErrorText
├── Field.HelperText
├── Field.Input
├── Field.Item
├── Field.Label
├── Field.RequiredIndicator
├── Field.RootProvider
├── Field.Select
├── Field.Textarea
```

## API

See [Ark UI Field docs](https://ark-ui.com/vue/docs/components/field) for full props and examples.
