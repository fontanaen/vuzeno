---
title: Clipboard
description: Clipboard component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/clipboard
---

::component-preview
---
name: ClipboardDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/clipboard.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Clipboard } from "@vuzeno/registry/ui/clipboard";
</script>

<template>
  <Clipboard.Root>
    <!-- … -->
  </Clipboard.Root>
</template>
```

## Composition

```
Clipboard.Root
├── Clipboard.Label
├── Clipboard.Control
│   ├── Clipboard.Input
│   └── Clipboard.Trigger
│       └── Clipboard.Indicator
├── Clipboard.Context
├── Clipboard.RootProvider
└── Clipboard.ValueText
```

## Examples

### Controlled

Control the clipboard value externally by managing the state yourself and using `onValueChange` to handle updates.

::component-preview
---
name: ClipboardControlledDemo
---
::

### Root Provider

An alternative way to control the clipboard is to use the `RootProvider` component and the `useClipboard` hook. This way you can access the state and methods from outside the component.

::component-preview
---
name: ClipboardRootProviderDemo
---
::

### Context

Access the clipboard's state with `Clipboard.Context` or the `useClipboardContext` hook. You get properties like `copied`, `value`, and `setValue`.

::component-preview
---
name: ClipboardContextDemo
---
::

### Copy Status

Use the `onStatusChange` prop to listen for copy operations. It exposes a `copied` property that you can use to display a success message.

::component-preview
---
name: ClipboardCopyStatusDemo
---
::

### Timeout

Configure the copy status timeout duration using the `timeout` prop. Default is 3000ms (3 seconds).

::component-preview
---
name: ClipboardTimeoutDemo
---
::

### Value Text

Use `Clipboard.ValueText` to display the current clipboard value.

::component-preview
---
name: ClipboardValueTextDemo
---
::

## API

See [Ark UI Clipboard docs](https://ark-ui.com/vue/docs/components/clipboard) for full props and examples.
