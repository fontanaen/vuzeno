<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { Fieldset, useFieldset } from "@vuzeno/registry/ui/fieldset";

const fieldset = useFieldset();
</script>

<template>
  <Fieldset.RootProvider :value="fieldset">
    <Fieldset.Legend>Contact Details</Fieldset.Legend>

    <Field.Root>
      <Field.Label>Name</Field.Label>
      <Field.Input placeholder="John Doe" />
    </Field.Root>

    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Field.Input type="email" placeholder="john@example.com" />
    </Field.Root>
  </Fieldset.RootProvider>
</template>
