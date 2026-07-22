<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { Fieldset } from "@vuzeno/registry/ui/fieldset";
</script>

<template>
  <Fieldset.Root>
    <Fieldset.Legend>Contact Details</Fieldset.Legend>

    <Field.Root>
      <Field.Label>Name</Field.Label>
      <Field.Input placeholder="John Doe" />
    </Field.Root>

    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Field.Input type="email" placeholder="john@example.com" />
    </Field.Root>
  </Fieldset.Root>
</template>
