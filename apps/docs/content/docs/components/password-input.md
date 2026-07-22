---
title: Password Input
description: Password Input component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/password-input
---

::component-preview
---
name: PasswordInputDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/password-input.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { PasswordInput } from "@vuzeno/registry/ui/password-input";
</script>

<template>
  <PasswordInput.Root>
    <PasswordInput.Input placeholder="Enter your password" />
    <PasswordInput.VisibilityTrigger>
      <PasswordInput.Indicator />
    </PasswordInput.VisibilityTrigger>
  </PasswordInput.Root>
</template>
```

## Composition

`PasswordInput.Root` wraps the control and input group internally. Compose the input and visibility trigger as direct children:

```
PasswordInput.Root
├── PasswordInput.Input
└── PasswordInput.VisibilityTrigger
    └── PasswordInput.Indicator
├── PasswordInput.Context
└── PasswordInput.RootProvider
```

Use [`Field`](/docs/components/field) for labels, helper text, and validation context.

## Examples

### Sizes

Use the `size` prop on `PasswordInput.Root` to change the height of the input.

::component-preview
---
name: PasswordInputSizesDemo
---
::

### Autocomplete

Use the `autoComplete` prop to manage autocompletion in the input.

- `new-password` — The user is creating a new password.
- `current-password` — The user is entering an existing password.

::component-preview
---
name: PasswordInputAutocompleteDemo
---
::

### Controlled Visibility

Use the `visible` and `onVisibilityChange` props to control the visibility of the password input.

::component-preview
---
name: PasswordInputControlledVisibilityDemo
---
::

### Root Provider

An alternative way to control the password input is to use the `RootProvider` component and the `usePasswordInput` hook. This way you can access the state and methods from outside the component.

::component-preview
---
name: PasswordInputRootProviderDemo
---
::

### Field

Combine `PasswordInput` with `Field` to add a label, helper text, and validation context.

::component-preview
---
name: PasswordInputFieldDemo
---
::

### Password Managers

Use the `ignorePasswordManagers` prop to ignore password managers like 1Password, LastPass, etc. This is useful for non-login scenarios (e.g., "api keys", "secure notes", "temporary passwords").

::component-preview
---
name: PasswordInputIgnorePasswordManagerDemo
---
::

### Strength Meter

Combine the `PasswordInput` with password strength logic to show visual feedback about password strength.

::component-preview
---
name: PasswordInputStrengthMeterDemo
---
::

### Validation

Combine with custom validation logic to show real-time feedback. Use the `invalid` prop to indicate validation errors.

::component-preview
---
name: PasswordInputValidationDemo
---
::

## API

See [Ark UI Password Input docs](https://ark-ui.com/vue/docs/components/password-input) for full props and examples.
