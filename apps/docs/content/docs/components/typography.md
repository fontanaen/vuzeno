---
title: Typography
description: Styles for headings, paragraphs, lists, and more — with responsive defaults.
tag: new
links:
  api: https://ark-ui.com/docs/guides/composition
---

::component-preview
---
component: typography
name: basic
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
component: typography
name: h1
---
::

### h2

::component-preview
---
component: typography
name: h2
---
::

### h3

::component-preview
---
component: typography
name: h3
---
::

### h4

::component-preview
---
component: typography
name: h4
---
::

### p

::component-preview
---
component: typography
name: p
---
::

### blockquote

::component-preview
---
component: typography
name: blockquote
---
::

### table

::component-preview
---
component: typography
name: table
---
::

### list

::component-preview
---
component: typography
name: list
---
::

### Inline code

::component-preview
---
component: typography
name: inline-code
---
::

### Lead

::component-preview
---
component: typography
name: lead
---
::

### Large

::component-preview
---
component: typography
name: large
---
::

### Small

::component-preview
---
component: typography
name: small
---
::

### Muted

::component-preview
---
component: typography
name: muted
---
::
