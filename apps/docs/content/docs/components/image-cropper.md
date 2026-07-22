---
title: Image Cropper
description: Image Cropper component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/image-cropper
---

::component-preview
---
name: ImageCropperDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/image-cropper.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { ImageCropper } from "@vuzeno/registry/ui/image-cropper";
</script>

<template>
  <ImageCropper.Root>
    <!-- … -->
  </ImageCropper.Root>
</template>
```

## Composition

```
ImageCropper.Root
├── ImageCropper.Context
├── ImageCropper.Grid
├── ImageCropper.Handle
├── ImageCropper.Image
├── ImageCropper.RootProvider
├── ImageCropper.Selection
└── ImageCropper.Viewport
```

## Examples

### Aspect Ratio

Lock the crop area to a specific aspect ratio. Use the `aspectRatio` prop—pass a number like `16/9` for widescreen or `1` for square.

::component-preview
---
name: ImageCropperAspectRatioDemo
---
::

### Circle Crop

Use `cropShape="circle"` for profile pictures or avatars. The selection becomes a circle instead of a rectangle.

::component-preview
---
name: ImageCropperCircleCropDemo
---
::

### Initial Crop

Start with a pre-defined crop area using the `initialCrop` prop. Pass an object with `x`, `y`, `width`, and `height` in pixels.

::component-preview
---
name: ImageCropperInitialCropDemo
---
::

### Controlled Zoom

Control zoom programmatically with the `zoom` and `onZoomChange` props. Useful when you want external buttons to zoom in and out.

::component-preview
---
name: ImageCropperControlledZoomDemo
---
::

### Zoom Limits

Set `minZoom` and `maxZoom` to constrain how far users can zoom. Prevents over-zooming or zooming out past the image bounds.

::component-preview
---
name: ImageCropperZoomLimitsDemo
---
::

### Rotation

Rotate the image with the `rotation` and `onRotationChange` props. Values are in degrees—common increments are 90 or 180.

::component-preview
---
name: ImageCropperRotationDemo
---
::

### Flip

Flip the image horizontally or vertically using the `flip` prop. Pass an object with `horizontal` and `vertical` booleans.

::component-preview
---
name: ImageCropperFlipDemo
---
::

### Min and Max Size

Constrain the crop area size with `minWidth`, `minHeight`, `maxWidth`, and `maxHeight`. Keeps the selection within sensible bounds.

::component-preview
---
name: ImageCropperMinAndMaxSizeDemo
---
::

### Fixed Crop Area

Set `fixedCropArea` to `true` when the crop area should stay fixed while the image moves underneath. Useful for overlay-style cropping.

::component-preview
---
name: ImageCropperFixedCropAreaDemo
---
::

### Crop Preview

Use `getCroppedImage()` from the context to get the cropped result. Call it with `{ output: 'dataUrl' }` for a base64 string you can use in an `img` src.

::component-preview
---
name: ImageCropperCropPreviewDemo
---
::

### Reset

The context exposes a `reset()` method that restores the image to its initial state. Handy for an "undo" or "start over" button.

::component-preview
---
name: ImageCropperResetDemo
---
::

### Events

Listen to `onCropChange` and `onZoomChange` to track crop position and zoom level. Use these to sync with external state or show live previews.

::component-preview
---
name: ImageCropperEventsDemo
---
::

### Context

Use `ImageCropper.Context` to access the cropper API from anywhere inside the root. You get methods like `zoomBy`, `rotateBy`, and `setZoom`.

::component-preview
---
name: ImageCropperContextDemo
---
::

### Root Provider

Use `RootProvider` with `useImageCropper` when you need to control the cropper from outside the component tree. Build custom toolbars or integrate with form state.

::component-preview
---
name: ImageCropperRootProviderDemo
---
::

## API

See [Ark UI Image Cropper docs](https://ark-ui.com/vue/docs/components/image-cropper) for full props and examples.
