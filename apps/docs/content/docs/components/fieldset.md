---
title: Fieldset
description: Fieldset component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/fieldset
---

::component-preview
---
component: fieldset
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/fieldset.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Fieldset } from "@vuzeno/registry/ui/fieldset";
</script>

<template>
  <Fieldset.Root>
    <!-- … -->
  </Fieldset.Root>
</template>
```

## Composition

```
Fieldset.Root
├── Fieldset.Context
├── Fieldset.ErrorText
├── Fieldset.HelperText
├── Fieldset.Legend
├── Fieldset.RootProvider
```

## Examples

The `Fieldset` component provides contexts such as `invalid` and `disabled` for form elements. While most Ark UI components natively support these contexts, you can also use the `Field` component with standard HTML form elements.

### Field

This example demonstrates how to use the `Field` component with a standard input field within a `Fieldset`.

::component-preview
---
component: fieldset
name: field
---
::

### Checkbox

This example shows how to use the `Fieldset` component with other Ark UI form elements like `Checkbox`.

::component-preview
---
component: fieldset
name: checkbox
---
::

### Root Provider

An alternative way to control the fieldset is to use the `RootProvider` component and the `useFieldset` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: fieldset
name: root-provider
---
::

### Input with Select

This example shows how to use the `Fieldset` component with `Field.Input` and `Select` to create a interactive phone input component.

::component-preview
---
component: fieldset
name: input-with-select
---
::

## API

See [Ark UI Fieldset docs](https://ark-ui.com/vue/docs/components/fieldset) for full props and examples.
