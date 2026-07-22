---
title: Progress Linear
description: Linear progress bar component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/progress-linear
---

::component-preview
---
name: ProgressLinearDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/progress-linear.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { ProgressLinear } from "@vuzeno/registry/ui/progress-linear";
</script>

<template>
  <ProgressLinear.Root :default-value="42">
    <ProgressLinear.Label>Label</ProgressLinear.Label>
    <ProgressLinear.ValueText />
    <ProgressLinear.Track>
      <ProgressLinear.Range />
    </ProgressLinear.Track>
  </ProgressLinear.Root>
</template>
```

## Composition

```
ProgressLinear.Root
├── ProgressLinear.Label
├── ProgressLinear.ValueText
├── ProgressLinear.Track
│   └── ProgressLinear.Range
└── ProgressLinear.RootProvider
```

## Examples

### Min and Max

By default, the maximum is `100`. If that's not what you want, you can easily specify a different bound by changing the value of the `max` prop. You can do the same with the minimum value by setting the `min` prop.

For example, to show the user a progress from `10` to `30`, you can use:

::component-preview
---
name: ProgressLinearMinMaxDemo
---
::

### Indeterminate

The progress component is determinate by default, with the value and max set to 50 and 100 respectively. To render an indeterminate progress, you will have to set the `value` to `null`.

::component-preview
---
name: ProgressLinearIndeterminateDemo
---
::

### Value Text

Progress bars can only be interpreted by sighted users. To include a text description to support assistive technologies like screen readers, use the `value` part in `translations`.

::component-preview
---
name: ProgressLinearValueTextDemo
---
::

### Orientation

By default, the progress is assumed to be horizontal. To change the orientation to vertical, set the orientation property in the machine's context to vertical.

> Don't forget to change the styles of the vertical progress by specifying its height

::component-preview
---
name: ProgressLinearVerticalDemo
---
::

### Root Provider

An alternative way to control the progress is to use the `RootProvider` component and the `useProgress` hook. This way you can access the state and methods from outside the component.

::component-preview
---
name: ProgressLinearRootProviderDemo
---
::

## API

See [Ark UI Progress - Linear docs](https://ark-ui.com/vue/docs/components/progress-linear) for full props and examples.
