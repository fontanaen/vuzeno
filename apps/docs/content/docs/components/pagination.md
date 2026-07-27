---
title: Pagination
description: Pagination component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/pagination
---

::component-preview
---
component: pagination
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/pagination.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Pagination } from "@vuzeno/registry/ui/pagination";
</script>

<template>
  <Pagination.Root>
    <!-- … -->
  </Pagination.Root>
</template>
```

## Composition

```
Pagination.Root
├── Pagination.Context
├── Pagination.Ellipsis
├── Pagination.FirstTrigger
├── Pagination.Item
├── Pagination.LastTrigger
├── Pagination.NextTrigger
├── Pagination.PrevTrigger
├── Pagination.RootProvider
```

## Examples

### Controlled

To create a controlled Pagination component, manage the state of the current page using the `page` prop and update it when the `onPageChange` event handler is called:

::component-preview
---
component: pagination
name: controlled
---
::

### Root Provider

An alternative way to control the pagination is to use the `RootProvider` component and the `usePagination` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: pagination
name: root-provider
---
::

### Customization

You can customize the Pagination component by setting various props such as `dir`, `pageSize`, `siblingCount`, and `translations`. Here's an example of a customized Pagination:

::component-preview
---
component: pagination
name: customized
---
::

### Context

Access pagination state and methods with `Pagination.Context` or the `usePaginationContext` hook. You get methods like `setPage`, `setPageSize`, `goToNextPage`, `goToPrevPage`, `goToFirstPage`, `goToLastPage`, as well as properties like `totalPages` and `pageRange`.

::component-preview
---
component: pagination
name: context
---
::

### Data Slicing

Use the `slice()` method to paginate actual data arrays. This method automatically slices your data based on the current page and page size.

::component-preview
---
component: pagination
name: data-slicing
---
::

### Page Range

Display the current page range information using the `pageRange` property. This shows which items are currently visible (e.g., "Showing 1-10 of 100 results").

::component-preview
---
component: pagination
name: page-range
---
::

### Page Size

Control the number of items per page dynamically using `setPageSize()`. This example shows how to integrate a native select element to change the page size.

> **Note:** For uncontrolled behavior, use `defaultPageSize` to set the initial value. For controlled behavior, use `pageSize` and `onPageSizeChange` to programmatically manage the page size.

::component-preview
---
component: pagination
name: page-size
---
::

### Links

Create pagination with link navigation for better SEO and accessibility. This example shows how to use the pagination component with anchor links instead of buttons.

::component-preview
---
component: pagination
name: links
---
::

## API

See [Ark UI Pagination docs](https://ark-ui.com/vue/docs/components/pagination) for full props and examples.
