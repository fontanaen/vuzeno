---
title: Editable
description: An inline text editing component that toggles between display and edit mode.
tag: new
---

::component-preview 
---
name: EditableDemo
---
::

## Features

- **Activation modes** — Enter edit mode on focus, double-click, or none (programmatic only)
- **Submit modes** — Submit on blur, Enter, both, or none (use triggers or custom flow)
- **Composable parts** — `EditableArea`, `EditablePreview`, `EditableInput`, and optional submit/cancel/edit triggers
- **Slot props** — Access `isEditing`, `modelValue`, `submit`, `cancel`, and `edit` on the root slot

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/editable.json
exec: true
---
::

## Limitations

- **NumberField not supported** — For numeric values, use a native `<input type="number">` via `EditableInput` (for example with a `Popover` for actions), as shown in the demo above.
