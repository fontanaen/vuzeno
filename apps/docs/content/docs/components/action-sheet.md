---
title: ActionSheet
description: A bottom sheet dialog for actions with a programmatic, promise-based selection API.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/dialog
---

::component-preview
---
component: action-sheet
name: basic
---
::

## Features

- **Programmatic API** — Define the action sheet with `useActionSheet()`, pass it to `ActionSheet.Provider`, then `await show()` for a typed result (`ActionSheetStartResult`) when the user picks an option, cancels, or dismisses the sheet
- **Classic usage** — Control visibility with `v-model:open` and open via `ActionSheet.Trigger`
- **Composable layout** — Stack multiple `ActionSheet.Group` blocks for separated groups of actions

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/action-sheet.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { ActionSheet } from "@vuzeno/registry/ui/action-sheet";
import { Button } from "@vuzeno/registry/ui/button";
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
import { ActionSheet, useActionSheet } from "@vuzeno/registry/ui/action-sheet";
import { Button } from "@vuzeno/registry/ui/button";
import { ref } from "vue";

const open = ref(false);

const actionSheet = useActionSheet({
  open,
  showOverlay: ref(true),
  closeOnClickOutside: ref(true),
});

async function openActionSheet() {
  const result = await actionSheet.show<string>();

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

`ActionSheet.Root` forwards other props and emits from Ark UI's `Dialog.Root`.

### ActionSheet.Provider

| Prop | Type | Default |
|------|------|---------|
| `value` | `ActionSheetApi` | — |

Takes the object returned by `useActionSheet()` and drives the sheet's open state and callbacks from it.

### useActionSheet

```ts
function useActionSheet(props: {
  open: Ref<boolean>;
  showOverlay: Ref<boolean>;
  closeOnClickOutside: Ref<boolean>;
}): ActionSheetApi;
```

Returns an `ActionSheetApi` with:

| Member | Type | Description |
|--------|------|-------------|
| `show()` | `<O>() => Promise<ActionSheetStartResult<O>>` | Opens the sheet and resolves when the user selects an option, cancels, or closes it |
| `close()` | `() => void` | Closes the sheet without resolving `show()` |

### ActionSheetStartResult

```ts
type ActionSheetStartResult<O> =
  | { cancelled: false; cancelledReason: null; selectedOption: O }
  | { cancelled: true; cancelledReason: "cancel" | "close"; selectedOption: null }
```

See [Ark UI Dialog docs](https://ark-ui.com/vue/docs/components/dialog) for underlying dialog props and behavior.
