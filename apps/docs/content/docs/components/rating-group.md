---
title: Rating Group
description: Rating Group component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/rating-group
---

::component-preview
---
name: RatingGroupDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/rating-group.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { RatingGroup } from "@vuzeno/registry/ui/rating-group";
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
name: RatingGroupControlledDemo
---
::

### Root Provider

An alternative way to control the rating group is to use the `RootProvider` component and the `useRatingGroup` hook. This way you can access the state and methods from outside the component.

::component-preview
---
name: RatingGroupRootProviderDemo
---
::

### Field

The `Field` component helps manage form-related state and accessibility attributes of a rating group. It includes handling ARIA labels, helper text, and error text to ensure proper accessibility.

::component-preview
---
name: RatingGroupFieldDemo
---
::

### Half Rating

Allow `0.5` value steps by setting the `allowHalf` prop to `true`. Ensure to render the correct icon if the `half` value is set in the Rating components render callback.

::component-preview
---
name: RatingGroupHalfRatingDemo
---
::

### Forms

To use the rating group within forms, pass the prop `name`. It will render a hidden input and ensure the value changes get propagated to the form correctly.

::component-preview
---
name: RatingGroupFormsDemo
---
::

### Disabled

To make the rating group disabled, set the `disabled` prop to `true`.

::component-preview
---
name: RatingGroupDisabledDemo
---
::

## API

See [Ark UI Rating Group docs](https://ark-ui.com/vue/docs/components/rating-group) for full props and examples.
