---
title: Toast
description: Toast component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/toast
---

::component-preview
---
name: ToastDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/toast.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Toast, createToaster } from "@vuzeno/registry/ui/toast";
import { X } from "lucide-vue-next";

const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 16,
});
</script>

<template>
  <button @click="toaster.create({ title: 'Hello', type: 'info' })">
    Show toast
  </button>

  <Toast.Toaster v-slot="toast" :toaster="toaster">
    <Toast.Root>
      <Toast.Title>{{ toast.title }}</Toast.Title>
      <Toast.Description>{{ toast.description }}</Toast.Description>
      <Toast.CloseTrigger>
        <X />
      </Toast.CloseTrigger>
    </Toast.Root>
  </Toast.Toaster>
</template>
```

## Composition

```
Toast.Toaster
└── Toast.Root
    ├── Toast.Indicator
    ├── Toast.Title
    ├── Toast.Description
    ├── Toast.ActionTrigger
    └── Toast.CloseTrigger
```

## Examples

### Types

You can create different types of toasts (`success`, `error`, `warning`, `info`) with appropriate styling. For example, to create a success toast, you can do:

```ts
toaster.success({
  title: "Success!",
  description: "Your changes have been saved.",
});
```

::component-preview
---
name: ToastTypesDemo
---
::

### Promise

You can use `toaster.promise()` to automatically handle the different states of an asynchronous operation. It provides options for the `success`, `error`, and `loading` states of the promise and will automatically update the toast when the promise resolves or rejects.

::component-preview
---
name: ToastPromiseDemo
---
::

### Update

To update a toast, use the `toast.update` method.

::component-preview
---
name: ToastUpdateDemo
---
::

### Action

To add an action to a toast, use the `toast.action` property.

::component-preview
---
name: ToastActionDemo
---
::

### Duration

You can control how long a toast stays visible by setting a custom `duration` in milliseconds, or use `Infinity` to keep it visible until manually dismissed.

::component-preview
---
name: ToastDurationDemo
---
::

### Max Visible

Set the `max` prop on the `createToaster` function to define the maximum number of toasts that can be rendered at any one time. Any extra toasts will be queued and rendered when a toast has been dismissed.

::component-preview
---
name: ToastMaxVisibleDemo
---
::

### Placement

Configure where toasts appear on the screen using the `placement` option in `createToaster`. Options include `top-start`, `top-end`, `bottom-start`, `bottom-end`, and more.

::component-preview
---
name: ToastPlacementDemo
---
::

## API

See [Ark UI Toast docs](https://ark-ui.com/vue/docs/components/toast) for full props and examples.
