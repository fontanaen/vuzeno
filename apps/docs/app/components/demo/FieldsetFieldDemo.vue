<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { Fieldset } from "@vuzeno/registry/ui/fieldset";
</script>

<template>
  <Fieldset.Root>
    <Fieldset.Legend>Personal Information</Fieldset.Legend>

    <Field.Root>
      <Field.Label>First Name</Field.Label>
      <Field.Input placeholder="Enter your first name" />
      <Field.HelperText>As it appears on your ID</Field.HelperText>
    </Field.Root>

    <Field.Root>
      <Field.Label>Last Name</Field.Label>
      <Field.Input placeholder="Enter your last name" />
    </Field.Root>
  </Fieldset.Root>
</template>
