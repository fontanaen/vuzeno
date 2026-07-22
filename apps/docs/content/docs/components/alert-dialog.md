---
title: Alert Dialog
description: Alert dialog for critical confirmations and destructive actions, built on Ark UI Dialog.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/dialog
---

::component-preview
---
component: alert-dialog
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/alert-dialog.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { AlertDialog } from "@vuzeno/registry/ui/alert-dialog";
</script>

<template>
  <AlertDialog.Root>
    <AlertDialog.Trigger as-child>
      <Button>Delete Account</Button>
    </AlertDialog.Trigger>

    <AlertDialog.Content>
      <AlertDialog.Header>
        <AlertDialog.Title />
        <AlertDialog.Description />
      </AlertDialog.Header>

      <AlertDialog.Footer>
        <AlertDialog.Cancel />
        <AlertDialog.Confirm />
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog.Root>
</template>
```

Alert Dialog is a pre-configured variant of [Dialog](/docs/components/dialog) with `role="alertdialog"`. It hides the close button in the content panel and is intended for confirmations where the user must explicitly choose an action.

Compared to a regular dialog:

- **Automatic focus** — the cancel/close action receives focus when opened, prioritizing the safest choice
- **Explicit dismissal** — cannot be closed by clicking outside; only button clicks or the Escape key dismiss it

## Composition

```
AlertDialog.Root
├── AlertDialog.Trigger
└── AlertDialog.Content
    ├── AlertDialog.Header
    │   ├── AlertDialog.Title
    │   └── AlertDialog.Description
    └── AlertDialog.Footer
        ├── AlertDialog.Cancel
        └── AlertDialog.Confirm
```

## API

Props, events, and hooks match Ark UI Dialog. See [Ark UI Dialog docs](https://ark-ui.com/vue/docs/components/dialog) for the full API.

```ts
import {
  AlertDialog,
  useDialog,
  useDialogContext,
  dialogAnatomy,
} from "@vuzeno/registry/ui/alert-dialog";
```
