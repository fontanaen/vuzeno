---
title: ActionSheet
description: A bottom sheet dialog for actions with a promise-based selection API
tag: new
---

A mobile-style action sheet built on the dialog primitive. Use `v-model:open` with a trigger, or call `start()` on a template ref to await the user’s choice in async code.

::component-preview
---
name: ActionSheetDemo
---
::

## Features

- **Promise-based API** — Call `start()` on `ActionSheet` and `await` a typed result (`ActionSheetStartResult`) when the user picks an option, cancels, or dismisses the sheet
- **Classic usage** — Control visibility with `v-model:open` and open via `ActionSheetTrigger`
- **Composable layout** — Stack multiple `ActionSheetGroup` blocks for separated groups of actions

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/action-sheet.json
exec: true
---
::

## Examples

### Classic action sheet

Use `ActionSheetTrigger` to open the sheet and `ActionSheetOption` for each choice. `ActionSheetCancel` fires the cancel path (and closes the sheet).

```vue showLineNumbers
<script setup lang="ts">
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetContent,
  ActionSheetOption,
  ActionSheetGroup,
  ActionSheetTrigger,
} from "@vuzeno/registry/ui/action-sheet";
import { Button } from "@/components/button";
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <ActionSheet v-model:open="isOpen">
    <ActionSheetTrigger>
      <Button>Open Action Sheet</Button>
    </ActionSheetTrigger>

    <ActionSheetContent>
      <ActionSheetGroup>
        <ActionSheetOption value="option1">Option 1</ActionSheetOption>
        <ActionSheetOption value="option2">Option 2</ActionSheetOption>
        <ActionSheetOption value="option3">Option 3</ActionSheetOption>
        <ActionSheetOption value="option4">Option 4</ActionSheetOption>
      </ActionSheetGroup>

      <ActionSheetCancel>Cancel</ActionSheetCancel>
    </ActionSheetContent>
  </ActionSheet>
</template>
```

### Promise API

Expose the root with `ref` and `useTemplateRef`, then call `start()`. The promise resolves when the user selects an option, taps cancel, or closes the overlay (when `closeOnClickOutside` is enabled).

```vue{14,17} showLineNumbers
<script setup lang="ts">
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetContent,
  ActionSheetOption,
  ActionSheetGroup,
  ActionSheetTrigger,
} from "@vuzeno/registry/ui/action-sheet";
import { Button } from "@/components/button";
import { ref, useTemplateRef } from "vue";

const isOpen = ref(false);
const actionSheet = useTemplateRef<InstanceType<typeof ActionSheet>>("actionSheet");

async function openActionSheet() {
  const result = await actionSheet.value?.start<string>();

  if (!result) {
    return;
  }

  if (result.cancelled) {
    // result.cancelledReason is "cancel" | "close"
  } else {
    // result.selectedOption is the chosen value
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button @click="openActionSheet()">Open Action Sheet #1</Button>
    <ActionSheet v-model:open="isOpen" ref="actionSheet">
      <ActionSheetTrigger>
        <Button>Open Action Sheet #2</Button>
      </ActionSheetTrigger>

      <ActionSheetContent>
        <ActionSheetGroup>
          <ActionSheetOption value="option1">Option 1</ActionSheetOption>
          <ActionSheetOption value="option2">Option 2</ActionSheetOption>
          <ActionSheetOption value="option3">Option 3</ActionSheetOption>
          <ActionSheetOption value="option4">Option 4</ActionSheetOption>
        </ActionSheetGroup>

        <ActionSheetCancel>Cancel</ActionSheetCancel>
      </ActionSheetContent>
    </ActionSheet>
  </div>
</template>
```

### Multiple option groups

Compose several `ActionSheetGroup` components inside `ActionSheetContent` to separate primary actions from secondary ones. Spacing between groups is handled by `ActionSheetContent`.

```vue showLineNumbers
<template>
  <ActionSheet v-model:open="isOpen">
    <ActionSheetTrigger>
      <Button>Open</Button>
    </ActionSheetTrigger>

    <ActionSheetContent>
      <ActionSheetGroup>
        <ActionSheetOption value="edit">Edit</ActionSheetOption>
        <ActionSheetOption value="duplicate">Duplicate</ActionSheetOption>
      </ActionSheetGroup>

      <ActionSheetGroup>
        <ActionSheetOption value="archive">Archive</ActionSheetOption>
        <ActionSheetOption value="delete">Delete</ActionSheetOption>
      </ActionSheetGroup>

      <ActionSheetCancel>Cancel</ActionSheetCancel>
    </ActionSheetContent>
  </ActionSheet>
</template>
```

## API

### ActionSheet

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controlled open state (`v-model:open`) |
| `closeOnClickOutside` | `boolean` | `true` | When using `start()`, overlay click sets a cancelled result with reason `"close"` |
| `showOverlay` | `boolean` | `true` | Show the dimmed overlay behind the sheet |

`ActionSheet` forwards other props and emits from Reka UI’s `DialogRoot`.

### `start()`

| Method | Returns | Description |
|--------|---------|-------------|
| `start<O>()` | `Promise<ActionSheetStartResult<O>>` | Opens the sheet and resolves when the user selects an option or dismisses |

`ActionSheetStartResult<O>` is a discriminated union:

- **Selected:** `{ cancelled: false; cancelledReason: null; selectedOption: O }`
- **Cancelled:** `{ cancelled: true; cancelledReason: "cancel" \| "close"; selectedOption: null }`