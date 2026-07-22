---
title: Dialog
description: Dialog component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/dialog
---

::component-preview
---
name: DialogDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

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
name: DialogControlledDemo
---
::

### Root Provider

An alternative way to control the dialog is to use the `RootProvider` component and the `useDialog` hook. This way you can access the state and methods from outside the component.

::component-preview
---
name: DialogRootProviderDemo
---
::

### Alert Dialog

For critical confirmations or destructive actions, use `role="alertdialog"`. Alert dialogs differ from regular dialogs in important ways:

- **Automatic focus**: The close/cancel button receives focus when opened, prioritizing the safest action
- **Requires explicit dismissal**: Cannot be closed by clicking outside, only via button clicks or Escape key

::component-preview
---
name: DialogAlertDialogDemo
---
::

### Lazy Mount

Use `lazyMount` to render dialog content only when first opened. Combine with `unmountOnExit` to unmount when closed, freeing up resources. Prefer this over conditionally rendering `Dialog.Root`—see **Conditional Rendering** in the [Ark UI docs](https://ark-ui.com/vue/docs/components/dialog).

::component-preview
---
name: DialogLazyMountDemo
---
::

### Initial Focus

Use `initialFocusEl` to control which element receives focus when the dialog opens.

::component-preview
---
name: DialogInitialFocusDemo
---
::

### Final Focus

Use `finalFocusEl` to control which element receives focus when the dialog closes. Defaults to the trigger element.

::component-preview
---
name: DialogFinalFocusDemo
---
::

### Non-Modal

Use `modal={false}` to allow interaction with elements outside the dialog. Disables focus trapping and scroll prevention.

::component-preview
---
name: DialogNonModalDemo
---
::

### Inside Scroll

Make the content area scrollable while keeping header and footer fixed using `maxHeight` and `overflow: auto`.

::component-preview
---
name: DialogInsideScrollDemo
---
::

### Outside Scroll

Make the positioner scrollable so the dialog can extend beyond the viewport.

::component-preview
---
name: DialogOutsideScrollDemo
---
::

### Context

Access the dialog's state and methods with `Dialog.Context` or the `useDialogContext` hook.

::component-preview
---
name: DialogContextDemo
---
::

### Open from Menu

Open a dialog imperatively from a menu item using the `onClick` handler.

::component-preview
---
name: DialogOpenFromMenuDemo
---
::

### Nested

Nest dialogs within one another. The parent receives `data-has-nested` and `--nested-layer-count` CSS variable for styling effects like zoom-out.

::component-preview
---
name: DialogNestedDemo
---
::

### Multiple Triggers

Share a single dialog across multiple trigger elements. Pass a `value` to each `Dialog.Trigger` and use `onTriggerValueChange` to update the dialog content based on which trigger was clicked.

::component-preview
---
name: DialogMultipleTriggersDemo
---
::

### Confirmation

Intercept close attempts to show confirmation prompts, preventing data loss from unsaved changes.

::component-preview
---
name: DialogConfirmationDemo
---
::

## API

See [Ark UI Dialog docs](https://ark-ui.com/vue/docs/components/dialog) for full props and examples.
