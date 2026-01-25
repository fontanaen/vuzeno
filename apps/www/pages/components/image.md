---
title: Image
description: A composable image component with loading states, fallback support, and advanced zoom functionality
name: image
---

<script setup lang="ts">
import ImageDemo from "../../.vitepress/components/demo/ImageDemo.vue"
import ImageZoomDemo from "../../.vitepress/components/demo/ImageZoomDemo.vue"
</script>


# Image

A fully-featured image component with loading state management, fallback support, and an interactive zoom system. Perfect for product galleries, image viewers, and any scenario requiring image inspection.

<ComponentPreview :component="ImageDemo">

```vue:line-numbers
<script setup lang="ts">
import { Image, ImageSource, ImageFallback } from "@/components/ui/phone-field"
</script>

<template>
    <Image>
        <ImageSource src="..." alt="..." />
        <ImageFallback>
            <!-- Loading/error content -->
        </ImageFallback>
    </Image>
</template>
```

</ComponentPreview>

## Features

- **Loading states** — Automatic detection of loading, error, and success states
- **Fallback support** — Display placeholder content during loading or on error
- **Zoom functionality** — Interactive zoom with click, cursor tracking, and controls
- **Minimap navigation** — Visual navigation map for panning zoomed images
- **Zoom controls** — Slider, buttons, and reset controls for zoom level
- **Cursor following** — Zoom follows mouse position for intuitive navigation
- **Composable** — Flexible slot-based architecture

## Installation

<!-- @todo: Add installation instructions -->

## Usage

### Zoomable Image

<ComponentPreview :component="ImageZoomDemo">

```vue:line-numbers
<script setup lang="ts">
import { 
    ImageZoomProvider, 
    ImageZoomContainer, 
    ImageZoomSource, 
    ImageZoomFallback, 
    ImageZoomMap, 
    ImageZoomSlider, 
    ImageZoomInControl, 
    ImageZoomOutControl, 
    ImageZoomReset 
} from "@/components/ui/image"
</script>

<template>
    <ImageZoomProvider class="flex gap-4" :scale="1" :step="1">
        <ImageZoomContainer>
            <ImageZoomSource src="https://picsum.photos/id/229/600/400" alt="..." />
            <ImageZoomFallback>
            <!-- Loading/error content -->
            </ImageZoomFallback>

            <div class="flex p-1 invert bg-background/75 rounded-lg absolute bottom-2 right-2 pointer-events-auto backdrop-blur-lg">
                <ImageZoomInControl variant="ghost" />
                <ImageZoomOutControl variant="ghost" />
                <ImageZoomReset variant="ghost" />
            </div>
        </ImageZoomContainer>
        <div>
            <ImageZoomSlider orientation="vertical" />
        </div>
    </ImageZoomProvider>
</template>
```

</ComponentPreview>

## Components

### Image

The root component that provides loading state context to child components.

<PropsTable 
    :data="[
        { name: 'as', type: 'string', default: 'div', description: 'The element type to render' },
        { name: 'asChild', type: 'boolean', default: 'false', description: 'Merge props onto child element' },
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### ImageSource

Renders the image only when successfully loaded.

<PropsTable 
    :data="[
        { name: 'src', type: 'string', default: null, description: 'Image source URL (required)' },
        { name: 'alt', type: 'string', default: null, description: 'Alternative text for the image' },
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### ImageFallback

Displays slot content when the image is loading or has failed to load.

*No props — renders children during `loading` or `error` states.*

---

### ImageZoomProvider

The root provider for zoom functionality. Manages scale, cursor tracking, and zoom behavior.


<PropsTable 
    :data="[
        { name: 'scale', type: 'number', default: '1', description: 'Current zoom scale (v-model)' },
        { name: 'maxScale', type: 'number', default: '3', description: 'Maximum allowed zoom scale' },
        { name: 'step', type: 'number', default: '2', description: 'Zoom increment per action' },
        { name: 'followCursor', type: 'boolean', default: 'true', description: 'Zoom follows cursor position' },
        { name: 'zoomOnClick', type: 'boolean', default: 'true', description: 'Enable click to zoom in/out' },
        { name: 'resetOnClickOutside', type: 'boolean', default: 'false', description: 'Reset zoom when clicking outside' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable all zoom interactions' }
    ]"
/>

<EventsTable 
    :data="[
        { name: 'zoom-in', type: '—', description: 'Emitted when zooming in' },
        { name: 'zoom-out', type: '—', description: 'Emitted when zooming out' },
        { name: 'zoom-reset', type: '—', description: 'Emitted when zoom is reset' },
        { name: 'update:scale', type: 'number', description: 'Emitted when scale changes' }
    ]"
/>

### ImageZoomContainer

Container for the zoomable image. Wraps `Image` and captures mouse position.

<PropsTable 
    :data="[
        { name: 'as', type: 'string', default: 'div', description: 'The element type to render' },
        { name: 'asChild', type: 'boolean', default: 'false', description: 'Merge props onto child element' },
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### ImageZoomSource

The zoomable image with transform animations and cursor tracking.

<PropsTable 
    :data="[
        { name: 'src', type: 'string', default: null, description: 'Image source URL (required)' },
        { name: 'alt', type: 'string', default: null, description: 'Alternative text for the image' }
    ]"
/>

### ImageZoomFallback

Displays slot content when the zoom image is loading or has failed.

*No props — wraps `ImageFallback`.*

### ImageZoomMap

A miniature navigation map showing the full image with a draggable viewport indicator.

<PropsTable 
    :data="[
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### ImageZoomSlider

A draggable slider to control zoom level.

<PropsTable 
    :data="[
        { name: 'orientation', type: 'horizontal | vertical', default: 'horizontal', description: 'Slider orientation' }
    ]"
/>

### ImageZoomInControl

Button to increase zoom level by one step.

<PropsTable 
    :data="[
        { name: 'variant', type: 'ButtonVariants[variant]', default: 'secondary', description: 'Button variant' },
        { name: 'size', type: 'ButtonVariants[size]', default: 'icon', description: 'Button size' },
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### ImageZoomOutControl

Button to decrease zoom level by one step.

<PropsTable 
    :data="[
        { name: 'variant', type: 'ButtonVariants[variant]', default: 'secondary', description: 'Button variant' },
        { name: 'size', type: 'ButtonVariants[size]', default: 'icon', description: 'Button size' },
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### ImageZoomReset

Button to reset zoom to scale 1.

<PropsTable 
    :data="[
        { name: 'variant', type: 'ButtonVariants[variant]', default: 'secondary', description: 'Button variant' },
        { name: 'size', type: 'ButtonVariants[size]', default: 'icon', description: 'Button size' },
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

## Cursor Following Behavior

The `followCursor` prop controls how the zoomed image is positioned:

| Mode | Behavior |
|------|----------|
| `followCursor: true` (default) | The zoom focuses on the cursor position. As you move the mouse, the visible area shifts to keep the cursor point centered. This creates an intuitive "magnifying glass" experience. |
| `followCursor: false` | The zoom is centered on the image. The visible area remains fixed at the center regardless of cursor position. Useful when using the minimap or slider for navigation instead. |

When using `ImageZoomSlider`, the component automatically disables cursor following during drag operations to prevent visual conflicts, then re-enables it when the drag ends.

## Examples

### Basic image with loading fallback

Display a skeleton or spinner while the image loads, with graceful error handling.

### Image with error fallback

Show a placeholder image or icon when the image fails to load.

### Zoomable product image with controls

A product detail view with zoom in/out buttons and reset control.

### Zoomable image with minimap navigation

Large image viewer with a navigation map for panning around the zoomed content.

### Zoomable image with slider control

Image zoom controlled by a horizontal or vertical slider.

### Custom zoom controls layout

Combine controls in a custom toolbar layout with your own styling.

## Accessibility

<!-- @todo: Document accessibility features -->

## API Reference

### Exports

<ExportsTable 
    :data="[
        { name: 'Image', description: 'Root image provider' },
        { name: 'ImageSource', description: 'Image element' },
        { name: 'ImageFallback', description: 'Fallback content' },
        { name: 'ImageZoomProvider', description: 'Zoom functionality provider' },
        { name: 'ImageZoomContainer', description: 'Zoomable image container' },
        { name: 'ImageZoomSource', description: 'Zoomable image element' },
        { name: 'ImageZoomFallback', description: 'Zoom fallback content' },
        { name: 'ImageZoomMap', description: 'Navigation minimap' },
        { name: 'ImageZoomSlider', description: 'Zoom level slider' },
        { name: 'ImageZoomInControl', description: 'Zoom in button' },
        { name: 'ImageZoomOutControl', description: 'Zoom out button' },
        { name: 'ImageZoomReset', description: 'Zoom reset button' }
    ]"
/>
