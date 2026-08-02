---
title: Qr Code
description: Vue QR code generator to encode URLs and text as scannable codes for sharing and auth flows.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/qr-code
---

::component-preview
---
component: qr-code
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/qr-code.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { QrCode } from "@/components/ui/qr-code";
</script>

<template>
  <QrCode.Root default-value="http://ark-ui.com">
    <QrCode.Frame>
      <QrCode.Pattern />
    </QrCode.Frame>
  </QrCode.Root>
</template>
```

## Composition

```
QrCode.Root
├── QrCode.Frame
│   └── QrCode.Pattern
├── QrCode.Overlay
├── QrCode.DownloadTrigger
├── QrCode.Context
└── QrCode.RootProvider
```

## Examples

### With Overlay

You can also add a logo or overlay to the QR code. This is useful when you want to brand the QR code.

::component-preview
---
component: qr-code
name: overlay
---
::

### Error Correction

In cases where the link is too long or the logo overlay covers a significant area, the error correction level can be increased.

Use the `encoding.ecc` or `encoding.boostEcc` property to set the error correction level:

- `L`: Allows recovery of up to 7% data loss (default)
- `M`: Allows recovery of up to 15% data loss
- `Q`: Allows recovery of up to 25% data loss
- `H`: Allows recovery of up to 30% data loss

::component-preview
---
component: qr-code
name: error-correction
---
::

### Root Provider

An alternative way to control the QR code is to use the `RootProvider` component and the `useQrCode` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: qr-code
name: root-provider
---
::

### Download

Use the `QrCode.DownloadTrigger` component to allow users to download the QR code as an image. Specify the `fileName` and `mimeType` props for the downloaded file.

::component-preview
---
component: qr-code
name: download
---
::

## API

See [Ark UI Qr Code docs](https://ark-ui.com/vue/docs/components/qr-code) for full props and examples.
