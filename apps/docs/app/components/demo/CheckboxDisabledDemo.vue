<script setup lang="ts">
import { Checkbox } from "@vuzeno/registry/ui/checkbox";
</script>

<template>
  <div class="flex flex-col gap-4">
    <Checkbox.Root disabled>
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Disabled unchecked</Checkbox.Label>
    </Checkbox.Root>

    <Checkbox.Root :default-checked="true" disabled>
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Disabled checked</Checkbox.Label>
    </Checkbox.Root>
  </div>
</template>
