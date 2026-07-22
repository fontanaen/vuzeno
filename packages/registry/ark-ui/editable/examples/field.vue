<script setup lang="ts">
import { Editable } from "@vuzeno/registry/ui/editable";
import { Field } from "@vuzeno/registry/ui/field";
</script>

<template>
  <Field.Root>
    <Field.Label>Bio</Field.Label>
    <Editable.Root placeholder="Enter your bio">
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
    </Editable.Root>
    <Field.HelperText>Double-click to edit your bio</Field.HelperText>
    <Field.ErrorText>Bio is required</Field.ErrorText>
  </Field.Root>
</template>
