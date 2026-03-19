---
title: PasswordField
description: A composable password input with visibility toggle and click-outside reset
tag: new
---

::component-preview 
---
name: PasswordFieldDemo
---
::

## Features

- **Reset on click outside** — Password visibility resets to hidden when clicking outside the field
- **Show/hide password** — Toggle password visibility with a button

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/password-field.json
exec: true
---
::

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | — | The model value of the password field |
| `disabled` | `boolean` | `false` | Whether the password field is disabled |
| `type` | `"text" \| "password"` | — | The type of the password field (controlled) |
| `defaultType` | `"text" \| "password"` | `"password"` | The default type of the password field |
| `resetOnClickOutside` | `boolean` | `true` | Whether to reset the type to password when clicking outside the field |
