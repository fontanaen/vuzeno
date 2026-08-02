---
title: Pin Input
description: Vue PIN and OTP input for one-time codes and verification flows with per-digit fields.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/pin-input
---

::component-preview
---
component: pin-input
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/pin-input.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { PinInput } from "@vuzeno/registry/ui/pin-input";
</script>

<template>
  <PinInput.Root>
    <!-- … -->
  </PinInput.Root>
</template>
```

## Composition

```
PinInput.Root
├── PinInput.Label
├── PinInput.Control
│   └── PinInput.Input
└── PinInput.HiddenInput
```

## Examples

### Placeholder

To customize the default pin input placeholder `○` for each input, pass the placeholder prop and set it to your desired value.

::component-preview
---
component: pin-input
name: placeholder
---
::

### Blur on Complete

By default, the last input maintains focus when filled, and we invoke the `onValueComplete` callback. To blur the last input when the user completes the input, set the prop `blurOnComplete` to `true`.

::component-preview
---
component: pin-input
name: blur-on-complete
---
::

### OTP Mode

To trigger smartphone OTP auto-suggestion, it is recommended to set the `autocomplete` attribute to "one-time-code". The pin input component provides support for this automatically when you set the `otp` prop to `true`.

::component-preview
---
component: pin-input
name: otp-mode
---
::

### Masking

When collecting private or sensitive information using the pin input, you might need to mask the value entered, similar to `<input type="password"/>`. Pass the `mask` prop to `true`.

::component-preview
---
component: pin-input
name: mask
---
::

### Field

The `Field` component helps manage form-related state and accessibility attributes of a pin input. It includes handling ARIA labels, helper text, and error text to ensure proper accessibility.

::component-preview
---
component: pin-input
name: field
---
::

### Root Provider

An alternative way to control the pin input is to use the `RootProvider` component and the `usePinInput` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: pin-input
name: root-provider
---
::

## API

See [Ark UI Pin Input docs](https://ark-ui.com/vue/docs/components/pin-input) for full props and examples.
