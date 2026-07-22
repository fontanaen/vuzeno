<script setup lang="ts">
import { Checkbox } from "@vuzeno/registry/ui/checkbox";
</script>

<template>
  <Checkbox.Root default-checked>
    <Checkbox.Control>
      <Checkbox.Indicator />
    </Checkbox.Control>
    <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
  </Checkbox.Root>
</template>
