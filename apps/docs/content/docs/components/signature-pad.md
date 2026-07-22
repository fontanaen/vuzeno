---
title: Signature Pad
description: Signature Pad component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/signature-pad
---

::component-preview
---
component: signature-pad
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/signature-pad.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { SignaturePad } from "@vuzeno/registry/ui/signature-pad";
</script>

<template>
  <SignaturePad.Root>
    <!-- … -->
  </SignaturePad.Root>
</template>
```

## Composition

```
SignaturePad.Root
├── SignaturePad.ClearTrigger
├── SignaturePad.Context
├── SignaturePad.Control
├── SignaturePad.Guide
├── SignaturePad.HiddenInput
├── SignaturePad.Label
├── SignaturePad.RootProvider
├── SignaturePad.Segment
```

## Examples

### Image Preview

After the user draws a signature, you can display a preview of the signature as an image. This is useful when you want to show the user a preview of the signature before saving it.

::component-preview
---
component: signature-pad
name: image-preview
---
::

### Field

The `Field` component helps manage form-related state and accessibility attributes of a signature pad. It includes handling ARIA labels, helper text, and error text to ensure proper accessibility.

::component-preview
---
component: signature-pad
name: field
---
::

### Root Provider

An alternative way to control the signature pad is to use the `RootProvider` component and the `useSignaturePad` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: signature-pad
name: root-provider
---
::

## API

See [Ark UI Signature Pad docs](https://ark-ui.com/vue/docs/components/signature-pad) for full props and examples.
