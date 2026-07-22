---
title: Textarea
description: Styled textarea component for multi-line text input.
tag: new
---

::component-preview
---
name: TextareaDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/textarea.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Textarea } from "@vuzeno/registry/ui/textarea";
</script>

<template>
  <Textarea placeholder="Type your message here." />
</template>
```

## Examples

### Field

Use `Field` to add a label, helper text, and validation context around the textarea.

::component-preview
---
name: TextareaFieldDemo
---
::

### Disabled

Use the `disabled` prop to disable the textarea. Wrap it in `Field.Root` with `disabled` to style the disabled state.

::component-preview
---
name: TextareaDisabledDemo
---
::

### Invalid

Use the `aria-invalid` prop to mark the textarea as invalid. Set `invalid` on `Field.Root` to style the invalid state.

::component-preview
---
name: TextareaInvalidDemo
---
::

Combine with [`Field`](/docs/components/field) for labels, helper text, and validation. Use [`InputGroup`](/docs/components/input-group) to add addons, text, or buttons around a textarea.
