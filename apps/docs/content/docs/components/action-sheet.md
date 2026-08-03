---
title: ActionSheet
description: Vue bottom sheet action dialog with a promise-based API for picking an option on mobile and desktop.
tag: new
---

::component-preview
---
component: action-sheet
name: basic
---
::

## Features

- **Zag state machine** — Open/close, dismiss, option selection, and cancel are modeled with a custom `@zag-js` machine (not Ark Dialog)
- **Programmatic API** — Define the action sheet with `useActionSheet()`, pass it to `ActionSheet.Provider`, then `await show()` for a typed result (`ActionSheetStartResult`) when the user picks an option, cancels, or dismisses the sheet
- **Classic usage** — Control visibility with `v-model:open` and open via `ActionSheet.Trigger`
- **Composable layout** — Stack multiple `ActionSheet.Group` blocks for separated groups of actions

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/action-sheet.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { ActionSheet } from "@/components/ui/action-sheet";
import { Button } from "@/components/ui/button";
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <ActionSheet.Root v-model:open="isOpen">
    <ActionSheet.Trigger as-child>
      <Button>Open Action Sheet</Button>
    </ActionSheet.Trigger>

    <ActionSheet.Content>
      <ActionSheet.Group>
        <ActionSheet.Option value="option1">Option 1</ActionSheet.Option>
        <ActionSheet.Option value="option2">Option 2</ActionSheet.Option>
      </ActionSheet.Group>

      <ActionSheet.Cancel>Cancel</ActionSheet.Cancel>
    </ActionSheet.Content>
  </ActionSheet.Root>
</template>
```

## Composition

```
ActionSheet.Root
├── ActionSheet.Trigger
└── ActionSheet.Content
    ├── ActionSheet.Group
    │   └── ActionSheet.Option
    └── ActionSheet.Cancel

ActionSheet.Provider
└── ActionSheet.Content
    ├── ActionSheet.Group
    │   └── ActionSheet.Option
    └── ActionSheet.Cancel
```

## Examples

### Classic action sheet

Use `ActionSheet.Trigger` to open the sheet and `ActionSheet.Option` for each choice. `ActionSheet.Cancel` fires the cancel path (and closes the sheet).

::component-preview
---
component: action-sheet
name: basic
---
::

### Provider API

Define the action sheet with `useActionSheet()`, then pass it to `ActionSheet.Provider` to drive it programmatically. Call `show()` and `await` the result — the promise resolves when the user selects an option, taps cancel, or closes the overlay (when `closeOnClickOutside` is enabled).

```vue showLineNumbers
<script setup lang="ts">
import { ActionSheet, useActionSheet } from "@/components/ui/action-sheet";
import { Button } from "@/components/ui/button";

const actionSheet = useActionSheet({
  showOverlay: true,
  closeOnClickOutside: true,
});

async function openActionSheet() {
  const result = await actionSheet.value.show();

  if (result.cancelled) {
    // result.cancelledReason is "cancel" | "close"
  } else {
    // result.selectedOption is the chosen value
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button @click="openActionSheet()">Open Action Sheet</Button>

    <ActionSheet.Provider :value="actionSheet">
      <ActionSheet.Content>
        <ActionSheet.Group>
          <ActionSheet.Option value="option1">Option 1</ActionSheet.Option>
          <ActionSheet.Option value="option2">Option 2</ActionSheet.Option>
        </ActionSheet.Group>

        <ActionSheet.Cancel>Cancel</ActionSheet.Cancel>
      </ActionSheet.Content>
    </ActionSheet.Provider>
  </div>
</template>
```

### Multiple option groups

Compose several `ActionSheet.Group` components inside `ActionSheet.Content` to separate primary actions from secondary ones.

```vue showLineNumbers
<template>
  <ActionSheet.Root v-model:open="isOpen">
    <ActionSheet.Trigger as-child>
      <Button>Open</Button>
    </ActionSheet.Trigger>

    <ActionSheet.Content>
      <ActionSheet.Group>
        <ActionSheet.Option value="edit">Edit</ActionSheet.Option>
        <ActionSheet.Option value="duplicate">Duplicate</ActionSheet.Option>
      </ActionSheet.Group>

      <ActionSheet.Group>
        <ActionSheet.Option value="archive">Archive</ActionSheet.Option>
        <ActionSheet.Option value="delete">Delete</ActionSheet.Option>
      </ActionSheet.Group>

      <ActionSheet.Cancel>Cancel</ActionSheet.Cancel>
    </ActionSheet.Content>
  </ActionSheet.Root>
</template>
```

## API Reference

### ActionSheet.Root

| Prop | Type | Default |
|------|------|---------|
| `open` | `boolean` | `false` |
| `closeOnClickOutside` | `boolean` | `true` |
| `showOverlay` | `boolean` | `true` |
| `closeOnEscape` | `boolean` | `true` |

### ActionSheet.Provider

| Prop | Type | Default |
|------|------|---------|
| `value` | `ActionSheetApi` | — |

Takes the object returned by `useActionSheet()` and drives the sheet's open state and callbacks from it.

### useActionSheet

```ts
function useActionSheet(props?: {
  showOverlay?: boolean;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (details: { open: boolean }) => void;
  onSelectOption?: (details: { value: unknown }) => void;
  onCancel?: () => void;
  onDismiss?: () => void;
}): ComputedRef<ActionSheetApi>;
```

Returns a computed `ActionSheetApi` with:

| Member | Type | Description |
|--------|------|-------------|
| `show()` | `() => Promise<ActionSheetStartResult>` | Opens the sheet and resolves when the user selects an option, cancels, or dismisses it |
| `close()` | `() => void` | Closes the sheet |
| `setOpen(open)` | `(open: boolean) => void` | Opens or closes the sheet |
| `open` | `boolean` | Current open state |

### ActionSheetStartResult

```ts
type ActionSheetStartResult<O> =
  | { cancelled: false; cancelledReason: null; selectedOption: O }
  | { cancelled: true; cancelledReason: "cancel" | "close"; selectedOption: null }
```
