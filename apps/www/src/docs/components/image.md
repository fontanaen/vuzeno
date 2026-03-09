---
title: Image
description: A composable image component with loading states and fallback support
name: image
---

# Image

A composable image component with loading state management and fallback support. Use it standalone for simple image display, or combine it with Image Viewer for zoom capabilities.

<ComponentPreview name="image/ImageDemo" />

## Features

- **Loading states** — Automatic detection of loading, error, and success states
- **Fallback support** — Display placeholder content during loading or on error
- **Composable** — Flexible slot-based architecture with `ImageSource`, `ImageLoading`, `ImageError`, and `ImageFallback`

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

<InstallationTabs exec value="shadcn-vue@latest add https://vuzeno.com/r/image.json" />

## Usage

Wrap your image with `Image` and use `ImageSource` for the actual image. Add `ImageLoading`, `ImageError`, or `ImageFallback` to handle loading and error states:

```vue
<Image>
  <ImageSource src="..." alt="..." />

  <ImageLoading>
    <div class="p-2 text-center text-muted-foreground bg-muted">Loading...</div>
  </ImageLoading>

  <ImageError>
    <div class="p-2 text-center text-destructive-foreground bg-destructive">
      An error occurred while loading the image.
    </div>
  </ImageError>
</Image>
```

Use `ImageFallback` when you want the same content for both loading and error states.
