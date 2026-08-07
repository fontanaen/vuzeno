---
title: Editable
description: Vue editable text field that switches between read and edit modes for inline content updates.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/editable
---

::component-preview
---
component: editable
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/editable.json
exec: true
---
::

## Usage

Wrap `Editable` in `Field` and use `Field.Label` instead of a dedicated editable label.

```vue
<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Editable } from "@/components/ui/editable";
import { Field } from "@/components/ui/field";
</script>

<template>
  <Field.Root>
    <Field.Label>Label</Field.Label>
    <Editable.Root placeholder="Enter text..." default-value="Hello World">
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.EditTrigger>
          <Button variant="link" size="sm">Edit</Button>
        </Editable.EditTrigger>
      </Editable.Control>
    </Editable.Root>
  </Field.Root>
</template>
```

## Examples

### Controlled

Use the `value` and `onValueChange` props to control the editable state.

::component-preview
---
component: editable
name: controlled
---
::

### Root Provider

An alternative way to control the editable is to use the `RootProvider` component and the `useEditable` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: editable
name: root-provider
---
::

### Context

Access the editable's state with `Editable.Context` or the `useEditableContext` hook—great for showing keyboard hints when editing.

::component-preview
---
component: editable
name: context
---
::

### Controls

In some cases, you might need to use custom controls to toggle the edit and read mode. We use the render prop pattern to provide access to the internal state of the component.

::component-preview
---
component: editable
name: controls
---
::

### Textarea

Use the `asChild` prop on `Editable.Input` to render a textarea for multi-line editing.

::component-preview
---
component: editable
name: textarea
---
::

### Field

The `Field` component helps manage form-related state and accessibility attributes of an editable. It includes handling ARIA labels, helper text, and error text to ensure proper accessibility.

::component-preview
---
component: editable
name: field
---
::

## Composition

```
Field.Root
├── Field.Label
├── Editable.Root
│   ├── Editable.Area
│   │   ├── Editable.Input
│   │   └── Editable.Preview
│   ├── Editable.Control
│   │   ├── Editable.EditTrigger
│   │   ├── Editable.SubmitTrigger
│   │   └── Editable.CancelTrigger
│   └── Editable.Context
└── Field.HelperText / Field.ErrorText
```

## API

See [Ark UI Editable docs](https://ark-ui.com/vue/docs/components/editable) for full props and examples.
