<script setup lang="ts">
import { Editable } from "@vuzeno/registry/ui/editable";
import { Field } from "@vuzeno/registry/ui/field";
</script>

<template>
  <Field.Root>
    <Field.Label>Description</Field.Label>
    <Editable.Root
      placeholder="Enter a description..."
      default-value="Ark UI is a headless component library for building reusable, scalable design systems."
      activation-mode="dblclick"
    >
      <Editable.Area>
        <Editable.Input as-child>
          <textarea />
        </Editable.Input>
        <Editable.Preview />
      </Editable.Area>
    </Editable.Root>
    <Field.HelperText>Press Cmd + Enter to save</Field.HelperText>
  </Field.Root>
</template>
