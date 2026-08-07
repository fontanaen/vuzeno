<script setup lang="ts">
import { Checkbox } from "@vuzeno/registry/ui/checkbox";
</script>

<template>
  <Checkbox.Root checked="indeterminate">
    <Checkbox.Control>
      <Checkbox.Indicator indeterminate />
    </Checkbox.Control>
    <Checkbox.Label>Select all</Checkbox.Label>
  </Checkbox.Root>
</template>
