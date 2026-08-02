---
title: Progress Circular
description: Vue circular progress indicator for loading states and determinate completion percentages.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/progress-circular
---

::component-preview
---
component: progress-circular
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/progress-circular.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Progress } from "@vuzeno/registry/ui/progress-circular";
</script>

<template>
  <Progress.Root :default-value="42">
    <Progress.CircleContainer>
      <Progress.Circle>
        <Progress.CircleTrack />
        <Progress.CircleRange />
      </Progress.Circle>
      <Progress.ValueText />
    </Progress.CircleContainer>
  </Progress.Root>
</template>
```

## Composition

```
Progress.Root
├── Progress.Label
├── Progress.CircleContainer
│   ├── Progress.Circle
│   │   ├── Progress.CircleTrack
│   │   └── Progress.CircleRange
│   └── Progress.ValueText
├── Progress.Context
├── Progress.RootProvider
├── Progress.Range
├── Progress.Track
└── Progress.View
```

## Examples

### Min and Max

By default, the maximum is `100`. If that's not what you want, you can easily specify a different bound by changing the value of the `max` prop. You can do the same with the minimum value by setting the `min` prop.

For example, to show the user a progress from `10` to `30`, you can use:

::component-preview
---
component: progress-circular
name: min-max
---
::

### Indeterminate

The progress component is determinate by default, with the value and max set to 50 and 100 respectively. To render an indeterminate progress, you will have to set the `value` to `null`.

::component-preview
---
component: progress-circular
name: indeterminate
---
::

### Label

Add a label to provide additional context for the progress indicator.

::component-preview
---
component: progress-circular
name: label
---
::

### Root Provider

An alternative way to control the progress is to use the `RootProvider` component and the `useProgress` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: progress-circular
name: root-provider
---
::

## API

See [Ark UI Progress - Circular docs](https://ark-ui.com/vue/docs/components/progress-circular) for full props and examples.
