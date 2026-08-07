---
title: Rating Group
description: Vue rating group for star or score selection in reviews, feedback, and preference forms.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/rating-group
---

::component-preview
---
component: rating-group
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/rating-group.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { RatingGroup } from "@/components/ui/rating-group";
</script>

<template>
  <RatingGroup.Root>
    <!-- … -->
  </RatingGroup.Root>
</template>
```

## Composition

```
RatingGroup.Root
├── RatingGroup.Label
└── RatingGroup.Control
    ├── RatingGroup.Context
    ├── RatingGroup.Item
    │   ├── RatingGroup.ItemContext
    │   └── RatingGroup.ItemIndicator
    └── RatingGroup.HiddenInput
```

## Examples

### Controlled

When using the `RatingGroup` component, you can use the `value` and `onValueChange` props to control the state.

::component-preview
---
component: rating-group
name: controlled
---
::

### Root Provider

An alternative way to control the rating group is to use the `RootProvider` component and the `useRatingGroup` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: rating-group
name: root-provider
---
::

### Field

The `Field` component helps manage form-related state and accessibility attributes of a rating group. It includes handling ARIA labels, helper text, and error text to ensure proper accessibility.

::component-preview
---
component: rating-group
name: field
---
::

### Half Rating

Allow `0.5` value steps by setting the `allowHalf` prop to `true`. Ensure to render the correct icon if the `half` value is set in the Rating components render callback.

::component-preview
---
component: rating-group
name: half-rating
---
::

### Forms

To use the rating group within forms, pass the prop `name`. It will render a hidden input and ensure the value changes get propagated to the form correctly.

::component-preview
---
component: rating-group
name: forms
---
::

### Disabled

To make the rating group disabled, set the `disabled` prop to `true`.

::component-preview
---
component: rating-group
name: disabled
---
::

## API

See [Ark UI Rating Group docs](https://ark-ui.com/vue/docs/components/rating-group) for full props and examples.
