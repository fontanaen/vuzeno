---
title: Table
description: Composable table layout with header, body, footer, and empty states.
tag: new
links:
  api: https://ark-ui.com/docs/guides/composition
---

::component-preview
---
component: table
name: basic
---
::

## Features

- **Composable** — Flexible slot-based layout with `Table.Header`, `Table.Body`, `Table.Footer`, `Table.Row`, `Table.Head`, and `Table.Cell`
- **Scrollable** — Root wraps the table in an overflow container for wide datasets
- **Empty state** — Built-in `Table.Empty` for zero-result views
- **Customizable** — Override any part with the `class` prop

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/table.json
exec: true
---
::

## Composition

```
Table.Root
├── Table.Caption
├── Table.Header
│   └── Table.Row
│       └── Table.Head
├── Table.Body
│   └── Table.Row
│       └── Table.Cell
└── Table.Footer
    └── Table.Row
        └── Table.Cell
```

## Usage

```vue
<script setup lang="ts">
import { Table } from "@vuzeno/registry/ui/table";
</script>

<template>
  <Table.Root>
    <Table.Caption>A list of your recent invoices.</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head>Invoice</Table.Head>
        <Table.Head>Status</Table.Head>
        <Table.Head class="text-right">Amount</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>INV001</Table.Cell>
        <Table.Cell>Paid</Table.Cell>
        <Table.Cell class="text-right">$250.00</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
</template>
```

## Examples

### Empty state

Use `Table.Empty` when there are no rows to display.

::component-preview
---
component: table
name: empty
---
::
