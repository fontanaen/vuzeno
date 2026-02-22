---
title: Image
description: A composable image component with loading states, fallback support, and advanced zoom functionality
name: image
---

# Image

A fully-featured image component with loading state management, fallback support, and an interactive zoom system. Perfect for product galleries, image viewers, and any scenario requiring image inspection.

<ComponentPreview name="ImageDemo" />

## Features

- **Loading states** — Automatic detection of loading, error, and success states
- **Fallback support** — Display placeholder content during loading or on error
- **Zoom functionality** — Interactive zoom with click, cursor tracking, and controls
- **Minimap navigation** — Visual navigation map for panning zoomed images
- **Zoom controls** — Slider, buttons, and reset controls for zoom level
- **Cursor following** — Zoom follows mouse position for intuitive navigation
- **Composable** — Flexible slot-based architecture

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

<InstallationTabs exec value="shadcn-vue@latest add https://vuzeno.com/r/image.json" />

## Zoomable Image

<ComponentPreview name="ImageZoomDemo" />

## Cursor Following Behavior

The `followCursor` prop controls how the zoomed image is positioned:

| Mode | Behavior |
|------|----------|
| `followCursor: true` (default) | The zoom focuses on the cursor position. As you move the mouse, the visible area shifts to keep the cursor point centered. This creates an intuitive "magnifying glass" experience. |
| `followCursor: false` | The zoom is centered on the image. The visible area remains fixed at the center regardless of cursor position. Useful when using the minimap or slider for navigation instead. |

When using `ImageZoomSlider`, the component automatically disables cursor following during drag operations to prevent visual conflicts, then re-enables it when the drag ends.

