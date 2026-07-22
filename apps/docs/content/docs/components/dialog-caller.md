---
title: DialogCaller
description: Programmatically call Vue components with a promise-based stack API.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/dialog
---

::component-preview
---
name: DialogCallerDemo
---
::

## Features

- **Programmatic API** — Register a component once with `useDialogCaller()`, then `await caller.call(props)` from any handler
- **Promise-based results** — Components finish calls with `call.resolve()` or `call.reject()`; the outer promise always resolves (shape configurable)
- **Stack support** — Nested and concurrent dialogs mount as separate stack entries with automatic z-index layering
- **Optional dialog shell** — `DialogCaller.DialogShell` wires open state and external dismiss for Ark UI dialogs

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/dialog-caller.json
exec: true
---
::

## Setup

Mount the host once in your app root:

```vue
<script setup lang="ts">
import { DialogCaller } from "@vuzeno/registry/ui/dialog-caller";
</script>

<template>
  <NuxtPage />
  <DialogCaller.Host />
</template>
```

## Usage

Register a dialog component once, then call it imperatively:

```vue
<script setup lang="ts">
import { useDialogCaller } from "@vuzeno/registry/ui/dialog-caller";
import DeleteConfirmDialog from "./DeleteConfirmDialog.vue";

const deleteDialog = useDialogCaller(DeleteConfirmDialog, {
  exitDuration: 250,
  resultShape: "cancelled",
});

async function onDelete(item: Item) {
  const result = await deleteDialog.call({ name: item.name });

  if (!result.cancelled && result.data) {
    await api.delete(item.id);
  }
}
</script>
```

Inside the called component, use `useDialogCallerContext()` and assign it to `call`:

```vue
<script setup lang="ts">
const props = defineProps<{ name: string }>();
const call = useDialogCallerContext<boolean>();
</script>

<template>
  <DialogCaller.DialogShell>
    <Dialog.Content>
      <Dialog.Title>Delete {{ props.name }}?</Dialog.Title>
      <Dialog.Actions>
        <Button @click="call.reject('cancel')">Cancel</Button>
        <Button @click="call.resolve(true)">Delete</Button>
      </Dialog.Actions>
    </Dialog.Content>
  </DialogCaller.DialogShell>
</template>
```

## Composition

```
DialogCaller.Host
└── (dynamic stack entries)

DialogCaller.DialogShell
└── Dialog.Content
    └── your dialog UI
```

## Examples

### Delete confirmation

Use a single `useDialogCaller` registration for the whole table — no dialog duplicated per row:

::component-preview
---
name: DialogCallerDemo
---
::

### Nested dialogs

Edit the form, then cancel with unsaved changes. The confirmation dialog stacks on top while the form stays mounted:

::component-preview
---
name: DialogCallerNestedDemo
---
::

## API

### `useDialogCaller(component, options?)`

Returns `{ call(props), reject() }`.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | component name | Registry key for idempotent registration |
| `exitDuration` | `number` | `200` | Milliseconds to keep the instance mounted after resolve/reject (exit animation) |
| `resultShape` | `"cancelled" \| "data" \| "raw"` | `"cancelled"` | Shape of the value returned by `call()` |
| `defaultRejectValue` | `unknown` | `null` | Value returned on reject when `resultShape` is `"raw"` |

### `useDialogCallerContext()`

Returns `{ props, phase, resolve, reject, id }`. Assign to `call` and use `call.resolve()` / `call.reject()` without destructuring.

### Result shapes

| `resultShape` | After `call.resolve(data)` | After `call.reject(reason?)` |
| --- | --- | --- |
| `"cancelled"` | `{ cancelled: false, data, reason: null }` | `{ cancelled: true, data: null, reason? }` |
| `"data"` | `{ data }` | `{ data: null }` |
| `"raw"` | `data` | `defaultRejectValue` |

## Notes

- Each `call()` mounts a new stack entry. For HTTP-heavy dialogs, fetch data from props (e.g. with `watch`) rather than in `onMounted`.
- `DialogCaller.Host` must be mounted before calling `call()` — otherwise an error is thrown.
