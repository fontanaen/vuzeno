---
title: Dialog
description: Dialog component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/dialog
---

::component-preview
---
component: dialog
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/dialog.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Dialog } from "@vuzeno/registry/ui/dialog";
</script>

<template>
  <Dialog.Root>
    <!-- … -->
  </Dialog.Root>
</template>
```

## Composition

```
Dialog.Root
├── Dialog.Body
├── Dialog.Actions
├── Dialog.CloseTrigger
├── Dialog.Content
├── Dialog.Context
├── Dialog.Description
├── Dialog.RootProvider
├── Dialog.ScrollContainer
├── Dialog.ScrollSection
├── Dialog.Title
├── Dialog.Trigger
```

## Examples

### Controlled

Manage the dialog state using the `open` and `onOpenChange` props.

::component-preview
---
component: dialog
name: controlled
---
::

### Root Provider

An alternative way to control the dialog is to use the `RootProvider` component and the `useDialog` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: dialog
name: root-provider
---
::

### Alert Dialog

For critical confirmations or destructive actions, use `role="alertdialog"`. Alert dialogs differ from regular dialogs in important ways:

- **Automatic focus**: The close/cancel button receives focus when opened, prioritizing the safest action
- **Requires explicit dismissal**: Cannot be closed by clicking outside, only via button clicks or Escape key

::component-preview
---
component: dialog
name: alert-dialog
---
::

### Lazy Mount

Use `lazyMount` to render dialog content only when first opened. Combine with `unmountOnExit` to unmount when closed, freeing up resources. Prefer this over conditionally rendering `Dialog.Root`—see **Conditional Rendering** in the [Ark UI docs](https://ark-ui.com/vue/docs/components/dialog).

::component-preview
---
component: dialog
name: lazy-mount
---
::

### Initial Focus

Use `initialFocusEl` to control which element receives focus when the dialog opens.

::component-preview
---
component: dialog
name: initial-focus
---
::

### Final Focus

Use `finalFocusEl` to control which element receives focus when the dialog closes. Defaults to the trigger element.

::component-preview
---
component: dialog
name: final-focus
---
::

### Non-Modal

Use `modal={false}` to allow interaction with elements outside the dialog. Disables focus trapping and scroll prevention.

::component-preview
---
component: dialog
name: non-modal
---
::

### Inside Scroll

Make the content area scrollable while keeping header and footer fixed using `maxHeight` and `overflow: auto`.

::component-preview
---
component: dialog
name: inside-scroll
---
::

### Outside Scroll

Make the positioner scrollable so the dialog can extend beyond the viewport.

::component-preview
---
component: dialog
name: outside-scroll
---
::

### Context

Access the dialog's state and methods with `Dialog.Context` or the `useDialogContext` hook.

::component-preview
---
component: dialog
name: context
---
::

### Open from Menu

Open a dialog imperatively from a menu item using the `onClick` handler.

::component-preview
---
component: dialog
name: open-from-menu
---
::

### Nested

Nest dialogs within one another. The parent receives `data-has-nested` and `--nested-layer-count` CSS variable for styling effects like zoom-out.

::component-preview
---
component: dialog
name: nested
---
::

### Multiple Triggers

Share a single dialog across multiple trigger elements. Pass a `value` to each `Dialog.Trigger` and use `onTriggerValueChange` to update the dialog content based on which trigger was clicked.

::component-preview
---
component: dialog
name: multiple-triggers
---
::

### Confirmation

Intercept close attempts to show confirmation prompts, preventing data loss from unsaved changes.

::component-preview
---
component: dialog
name: confirmation
---
::

## API

See [Ark UI Dialog docs](https://ark-ui.com/vue/docs/components/dialog) for full props and examples.
