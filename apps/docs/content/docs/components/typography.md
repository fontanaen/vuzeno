---
title: Typography
description: Styles for headings, paragraphs, lists, and more — with responsive defaults.
tag: new
links:
  api: https://ark-ui.com/docs/guides/composition
---

::component-preview
---
name: TypographyDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/typography.json
exec: true
---
::

## Usage

Import the `Typography` namespace and compose text elements with opinionated, responsive defaults:

```vue
<script setup lang="ts">
import { Typography } from "@vuzeno/registry/ui/typography";
</script>

<template>
  <Typography.H1>Page title</Typography.H1>
  <Typography.Lead>A short introduction below the title.</Typography.Lead>
  <Typography.Paragraph>Body copy with comfortable line height.</Typography.P>
</template>
```

## Composition

```
Typography
├── H1, H2, H3, H4
├── P
├── Blockquote
├── List
├── InlineCode
├── Lead, Large, Small, Muted
└── TableContainer
    └── Table
        ├── TableRow
        ├── TableHead
        └── TableCell
```

All parts support the `class` prop for overrides and `as-child` for polymorphic composition via [Ark UI](https://ark-ui.com/docs/guides/composition).

## Examples

### h1

::component-preview
---
name: TypographyH1Demo
---
::

### h2

::component-preview
---
name: TypographyH2Demo
---
::

### h3

::component-preview
---
name: TypographyH3Demo
---
::

### h4

::component-preview
---
name: TypographyH4Demo
---
::

### p

::component-preview
---
name: TypographyPDemo
---
::

### blockquote

::component-preview
---
name: TypographyBlockquoteDemo
---
::

### table

::component-preview
---
name: TypographyTableDemo
---
::

### list

::component-preview
---
name: TypographyListDemo
---
::

### Inline code

::component-preview
---
name: TypographyInlineCodeDemo
---
::

### Lead

::component-preview
---
name: TypographyLeadDemo
---
::

### Large

::component-preview
---
name: TypographyLargeDemo
---
::

### Small

::component-preview
---
name: TypographySmallDemo
---
::

### Muted

::component-preview
---
name: TypographyMutedDemo
---
::
