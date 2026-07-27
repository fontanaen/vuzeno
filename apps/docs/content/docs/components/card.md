---
title: Card
description: Composable card layout with header, content, and footer sections.
tag: new
---

::component-preview
---
component: card
name: basic
---
::

## Features

- **Composable** — Flexible slot-based layout with `Card.Header`, `Card.Title`, `Card.Description`, `Card.Content`, and `Card.Footer`
- **Styled primitives** — Opinionated defaults for borders, spacing, and typography
- **Customizable** — Override any part with the `class` prop

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/card.json
exec: true
---
::

## Composition

```
Card.Root
├── Card.Header
│   ├── Card.Title
│   └── Card.Description
├── Card.Content
└── Card.Footer
```

## Usage

```vue
<script setup lang="ts">
import { Card } from "@vuzeno/registry/ui/card";
import { Button } from "@vuzeno/registry/ui/button";
</script>

<template>
  <Card.Root class="w-[350px]">
    <Card.Header>
      <Card.Title>Create project</Card.Title>
      <Card.Description>Deploy your new project in one click.</Card.Description>
    </Card.Header>
    <Card.Content>
      <p class="text-sm text-muted-foreground">
        Start from a template or import an existing repository.
      </p>
    </Card.Content>
    <Card.Footer class="justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </Card.Footer>
  </Card.Root>
</template>
```


## Examples

### With form

Use a card to group related form fields and actions.

::component-preview
---
component: card
name: form
---
::
