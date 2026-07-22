<script setup lang="ts">
import { Checkbox } from "@vuzeno/registry/ui/checkbox";
import { Fieldset } from "@vuzeno/registry/ui/fieldset";
</script>

<template>
  <Fieldset.Root>
    <Fieldset.Legend>Email Preferences</Fieldset.Legend>

    <Checkbox.Root default-checked>
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Product updates</Checkbox.Label>
    </Checkbox.Root>

    <Checkbox.Root>
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Marketing emails</Checkbox.Label>
    </Checkbox.Root>
  </Fieldset.Root>
</template>
