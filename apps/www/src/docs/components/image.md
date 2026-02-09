---
title: Image
description: A composable image component with loading states, fallback support, and advanced zoom functionality
name: image
---

<script setup lang="ts">
import ImageDemo from "../../../.vitepress/components/demo/ImageDemo.vue"
import ImageZoomDemo from "../../../.vitepress/components/demo/ImageZoomDemo.vue"
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

Install from the Vuetella registry with the shadcn-vue CLI (requires an existing shadcn-vue project with `components.json`):

<InstallationTabs exec value="shadcn-vue@latest add https://vuetella.dev/r/image.json" />

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


## Cursor Following Behavior

The `followCursor` prop controls how the zoomed image is positioned:

| Mode | Behavior |
|------|----------|
| `followCursor: true` (default) | The zoom focuses on the cursor position. As you move the mouse, the visible area shifts to keep the cursor point centered. This creates an intuitive "magnifying glass" experience. |
| `followCursor: false` | The zoom is centered on the image. The visible area remains fixed at the center regardless of cursor position. Useful when using the minimap or slider for navigation instead. |

When using `ImageZoomSlider`, the component automatically disables cursor following during drag operations to prevent visual conflicts, then re-enables it when the drag ends.

