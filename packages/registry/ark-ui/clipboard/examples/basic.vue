<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Clipboard } from "@vuzeno/registry/ui/clipboard";
import { Field } from "@vuzeno/registry/ui/field";
</script>

<template>
  <Field.Root>
    <Field.Label>Copy this link</Field.Label>
    
    <Clipboard.Root default-value="https://ark-ui.com">
      <Clipboard.Input />

      <Clipboard.Trigger size="icon" variant="outline">
        <Button variant="outline" size="icon">
          <Clipboard.Indicator />
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  </Field.Root>
</template>
