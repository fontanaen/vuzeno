---
title: Tags Input
description: Tags Input component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/tags-input
---

::component-preview
---
component: tags-input
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/tags-input.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { TagsInput } from "@vuzeno/registry/ui/tags-input";
</script>

<template>
  <TagsInput.Root>
    <!-- … -->
  </TagsInput.Root>
</template>
```

## Composition

```
TagsInput.Root
├── TagsInput.ClearTrigger
├── TagsInput.Context
├── TagsInput.Control
├── TagsInput.HiddenInput
├── TagsInput.Input
├── TagsInput.ItemContext
├── TagsInput.ItemDeleteTrigger
├── TagsInput.ItemInput
├── TagsInput.ItemPreview
├── TagsInput.ItemText
├── TagsInput.Item
├── TagsInput.Label
├── TagsInput.RootProvider
```

## Examples

### Controlled

Use the `value` and `onValueChange` props to programmatically control the tags input's state. This allows you to manage the tags array externally and respond to changes.

::component-preview
---
component: tags-input
name: controlled
---
::

### Controlled Input Value

Use the `inputValue` and `onInputValueChange` props to control the text input field independently. This is useful for clearing the input or pre-filling it programmatically.

::component-preview
---
component: tags-input
name: controlled-input-value
---
::

### Root Provider

An alternative way to control the tags input is to use the `RootProvider` component and the `useTagsInput` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: tags-input
name: root-provider
---
::

### Field

The `Field` component helps manage form-related state and accessibility attributes of a tags input. It includes handling ARIA labels, helper text, and error text to ensure proper accessibility.

::component-preview
---
component: tags-input
name: field
---
::

### Max Tags

To limit the number of tags within the component, you can set the `max` property to the limit you want. The default value is `Infinity`.

::component-preview
---
component: tags-input
name: max-tags
---
::

### Custom Delimiter

Use the `delimiter` prop with a regex pattern to specify multiple characters that can separate tags. By default, only the Enter key creates tags.

::component-preview
---
component: tags-input
name: custom-delimiter
---
::

### Disabled

Use the `disabled` prop to make the tags input non-interactive. Users won't be able to add, remove, or edit tags.

::component-preview
---
component: tags-input
name: disabled
---
::

### Invalid

Use the `invalid` prop to mark the tags input as invalid for form validation purposes.

::component-preview
---
component: tags-input
name: invalid
---
::

### Max Length

Use the `maxLength` prop to limit the number of characters allowed per tag. This prevents users from creating overly long tags.

::component-preview
---
component: tags-input
name: max-length
---
::

### Read-only

Use the `readOnly` prop to make tags visible but not editable. Users can view tags but cannot add, remove, or modify them.

::component-preview
---
component: tags-input
name: read-only
---
::

### Validation

Before a tag is added, the `validate` function is called to determine whether to accept or reject a tag.

::component-preview
---
component: tags-input
name: validation
---
::

### Blur behavior

When the tags input is blurred, you can configure the action the component should take by passing the `blurBehavior` prop.

- `add` — Adds the tag to the list of tags.
- `clear` — Clears the tags input value.

::component-preview
---
component: tags-input
name: blur-behavior
---
::

### Paste behavior

To add a tag when a arbitrary value is pasted in the input element, pass the `addOnPaste` prop.

When a value is pasted, the component will:

- check if the value is a valid tag based on the `validate` option
- split the value by the `delimiter` option passed

::component-preview
---
component: tags-input
name: paste-behavior
---
::

### Disable Editing

by default the tags can be edited by double-clicking on the tag or focusing on them and pressing Enter. To disable this behavior, pass `editable={false}`

::component-preview
---
component: tags-input
name: disable-editing
---
::

### Programmatic Control

Use the `useTagsInput` hook with `RootProvider` to access the component's API methods like `addValue()`, `setValue()`, and `clearValue()` for full programmatic control.

::component-preview
---
component: tags-input
name: programmatic-control
---
::

### Sanitize Value

Use the `sanitizeValue` prop to normalize tag values before they're added. This runs on every new tag — useful for trimming whitespace, converting to lowercase, or any other formatting you need.

::component-preview
---
component: tags-input
name: sanitize-value
---
::

### Autocomplete

Combine TagsInput with Autocomplete to create an autocomplete tags input. This pattern uses shared IDs between both components and the `asChild` prop to compose the inputs together.

::component-preview
---
component: tags-input
name: autocomplete
---
::

## API

See [Ark UI Tags Input docs](https://ark-ui.com/vue/docs/components/tags-input) for full props and examples.
