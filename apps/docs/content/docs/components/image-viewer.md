---
title: Image Viewer
description: Zoom and pan capabilities for images with touch support
tag: new
---

Add zoom and pan capabilities to images. Builds on the base Image component with click-to-zoom, cursor-following zoom, touch gestures (pinch, pan, double-tap), and optional controls.

::component-preview 
---
name: ImageViewerDemo
---
::

## Features

- **Click to zoom** — Zoom in/out by clicking on the image (desktop)
- **Cursor following** — Zoom centers on cursor position for intuitive navigation
- **Touch support** — Pinch to zoom, pan when zoomed, double-tap to toggle max zoom
- **Zoom controls** — Buttons, slider, and minimap for precise control
- **Composable** — Use with Image component for loading states

## Installation

Install from the Vuzeno registry. Requires the Image component:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/image-viewer.json
exec: true
---
::

## Examples

### Basic

Wrap your image with `ImageViewerProvider` and `ImageViewerContainer`, then use `ImageViewerSource`:

```vue showLineNumbers
<template>
  <ImageViewerProvider :scale="1" :max-scale="6">
    <ImageViewerContainer>
      <ImageViewerSource src="..." alt="..." />
      <ImageFallback>
        <div class="p-2 text-center text-muted-foreground bg-muted">Loading...</div>
      </ImageFallback>
    </ImageViewerContainer>
  </ImageViewerProvider>
</template>
```

### With Controls

::component-preview 
---
name: ImageViewerControlsDemo
---
::

Add zoom controls and minimap for full control:

```vue showLineNumbers
<template>
  <ImageViewerProvider :scale="1" :max-scale="6">
    <ImageViewerContainer>
      <ImageViewerSource src="..." alt="..." />
      <div class="absolute bottom-2 right-2 flex gap-2">
        <ImageViewerZoomInControl />
        <ImageViewerZoomOutControl />
      </div>
    </ImageViewerContainer>
    <ImageViewerZoomSlider orientation="vertical" />
    <ImageViewerZoomMap />
  </ImageViewerProvider>
</template>
```

## Cursor Following

The `followCursor` prop controls how the zoomed image is positioned:

| Mode | Behavior |
|------|----------|
| `followCursor: true` (default) | The zoom focuses on the cursor position. As you move the mouse, the visible area shifts to keep the cursor point centered. |
| `followCursor: false` | The zoom is centered on the image. The visible area remains fixed at the center regardless of cursor position. |

When using `ImageViewerZoomSlider`, the component automatically disables cursor following during drag operations to prevent visual conflicts.

## Touch Gestures

On touch devices:

- **Pinch** — Two-finger pinch to zoom in/out
- **Pan** — Single-finger drag when zoomed to pan the image
- **Double-tap** — Toggle between max zoom and reset
