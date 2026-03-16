---
title: Image
description: A composable image component with loading state management and fallback support. Use it standalone for simple image display, or combine it with Image Viewer for zoom capabilities.
name: image
---

::alert
---
title: Disable network cache to see loading state
variant: info
---
::

::component-preview 
---
name: ImageDemo
---
::

## Features

- **Loading states** — Automatic detection of loading, error, and success states
- **Fallback support** — Display placeholder content during loading or on error
- **Composable** — Flexible slot-based architecture with `ImageSource`, `ImageLoading`, `ImageError`, and `ImageFallback`

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/image.json
exec: true
---
::