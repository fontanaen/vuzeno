---
title: Image
description: A composable image component with loading states and fallback support
name: image
---

# Image

A composable image component with loading state management and fallback support. Use it standalone for simple image display, or combine it with Image Viewer for zoom capabilities.

<Alert variant="info" title="Disable network cache to see loading state" />

<br />  

<ComponentPreview name="image/ImageDemo" />

## Features

- **Loading states** — Automatic detection of loading, error, and success states
- **Fallback support** — Display placeholder content during loading or on error
- **Composable** — Flexible slot-based architecture with `ImageSource`, `ImageLoading`, `ImageError`, and `ImageFallback`

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

<InstallationTabs exec value="shadcn-vue@latest add https://vuzeno.com/r/image.json" />