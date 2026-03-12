---
title: Gallery
description: A carousel with zoomable images and fullscreen dialog with sidebar
name: gallery
---

# Gallery

A powerful carousel component that combines zoomable images with a fullscreen dialog and optional sidebar. Perfect for product galleries, image lightboxes, and media viewers with metadata.

<ComponentPreview name="gallery/GalleryFullscreenDemo" />

## Features

- **Carousel** — Navigate between images with prev/next controls
- **Zoom** — Zoom and pan on each image (pinch, click, cursor-following)
- **Fullscreen dialog** — Open gallery in a fullscreen overlay
- **Sidebar** — Optional sidebar for custom content (metadata, details, actions)
- **Navigation on zoom** — Prev/next buttons hide when zoomed for cleaner UX

## Installation

Install from the Vuzeno registry. Requires Image Viewer and its dependencies:

<InstallationTabs exec value="shadcn-vue@latest add https://vuzeno.com/r/gallery.json" />

## Examples

### Regular Carousel

<ComponentPreview name="gallery/GalleryDemo" />

Use `Gallery`, `GalleryContent`, `GalleryItem`, `GalleryImage`, and `GalleryImageSource` for a simple zoomable carousel:

```vue
<template>
  <Gallery v-model:zoom-scale="scale" zoom-on-click>
    <GalleryContent class="h-64">
      <GalleryItem v-for="(src, index) in images" :key="index" :item-index="index + 1">
        <GalleryImage>
          <GalleryImageSource :src="src" alt="..." />
        </GalleryImage>
      </GalleryItem>
    </GalleryContent>
    <GalleryPrevious />
    <GalleryNext />
  </Gallery>
</template>
```

### Within Dialog

<ComponentPreview name="gallery/GalleryDialogDemo" />

### Fullscreen with Sidebar

Combine `GalleryViewer`, `GalleryViewerTrigger`, `GalleryViewerContent`, and `GalleryViewerSidebar` for a fullscreen experience with custom sidebar content:

```vue
<template>
  <GalleryViewer v-model:open="open">
    <GalleryViewerTrigger>
      <Button>Open Gallery</Button>
    </GalleryViewerTrigger>

    <GalleryViewerContent :style="{ '--sidebar-width': '24rem' }">
      <GalleryViewerGallery>
        <Gallery v-model:zoom-scale="scale" zoom-on-click>
          <GalleryContent>...</GalleryContent>
          <GalleryToolbar>
            <GalleryZoomInControl />
            <GalleryZoomOutControl />
            <GalleryViewerSidebarTrigger />
            <GalleryViewerClose />
          </GalleryToolbar>
          <GalleryPrevious />
          <GalleryNext />
        </Gallery>
      </GalleryViewerGallery>

      <GalleryViewerSidebar side="right">
        <SidebarHeader>...</SidebarHeader>
        <SidebarContent>Custom metadata, details, etc.</SidebarContent>
      </GalleryViewerSidebar>
    </GalleryViewerContent>
  </GalleryViewer>
</template>
```
