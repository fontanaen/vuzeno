<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { FileUpload } from "@vuzeno/registry/ui/file-upload";
</script>

<template>
  <Field.Root>
    <FileUpload.Root :max-files="5">
      <FileUpload.Label>Label</FileUpload.Label>
      <FileUpload.Trigger>Select</FileUpload.Trigger>
      <FileUpload.ItemGroup />
      <FileUpload.HiddenInput />
    </FileUpload.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
</template>
