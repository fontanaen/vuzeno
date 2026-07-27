---
title: Segment Group
description: Segment Group component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/segment-group
---

::component-preview
---
component: segment-group
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/segment-group.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { SegmentGroup } from "@vuzeno/registry/ui/segment-group";
</script>

<template>
  <SegmentGroup.Root>
    <SegmentGroup.Indicator />
    <SegmentGroup.Item v-for="framework in frameworks" :key="framework" :value="framework">
      <SegmentGroup.ItemText>{{ framework }}</SegmentGroup.ItemText>
    </SegmentGroup.Item>
  </SegmentGroup.Root>
</template>
```

## Composition

```
SegmentGroup.Root
├── SegmentGroup.Indicator
└── SegmentGroup.Item
    └── SegmentGroup.ItemText
```

## Examples

### Controlled

To create a controlled SegmentGroup component, manage the current selected segment using the `value` prop and update it when the `onValueChange` event handler is called:

::component-preview
---
component: segment-group
name: controlled
---
::

### Root Provider

An alternative way to control the segment group is to use the `RootProvider` component and the `useSegmentGroup` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: segment-group
name: root-provider
---
::

### Disabled

To disable a segment, simply pass the `disabled` prop to the `SegmentGroup.Item` component:

::component-preview
---
component: segment-group
name: disabled
---
::

## API

See [Ark UI Segment Group docs](https://ark-ui.com/vue/docs/components/segment-group) for full props and examples.
