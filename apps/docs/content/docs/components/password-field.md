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

## API Reference

| Prop | Type | Default |
|------|------|---------|
| `modelValue` | `string` | — |
| `disabled` | `boolean` | `false` |
| `type` | `"text" \| "password"` | — |
| `defaultType` | `"text" \| "password"` | `"password"` |
| `resetOnClickOutside` | `boolean` | `true` |
